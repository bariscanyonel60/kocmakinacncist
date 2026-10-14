<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

$config = require __DIR__ . '/config.php';

$header = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
$token = str_starts_with($header, 'Bearer ') ? substr($header, 7) : '';
if ($config['api_token'] === '' || !hash_equals($config['api_token'], $token)) {
    respond(401, ['ok' => false, 'error' => 'UNAUTHORIZED']);
}

try {
    $db = new PDO(
        sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $config['db_host'], $config['db_name']),
        $config['db_user'],
        $config['db_password'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ],
    );
} catch (PDOException $error) {
    respond(503, ['ok' => false, 'error' => 'DB_UNAVAILABLE', 'code' => $error->errorInfo[1] ?? $error->getCode()]);
}

const MEDIA_TYPES = ['image', 'video'];
const FIELDS = ['media_type', 'collection', 'public_id', 'title', 'alt', 'category', 'width', 'height', 'sort_order', 'published'];

function slug(mixed $value, int $max): ?string
{
    return is_string($value) && preg_match('/^[a-z0-9][a-z0-9_-]{0,' . ($max - 1) . '}$/', $value) ? $value : null;
}

function validate(array $input, bool $partial): array
{
    $data = [];
    $errors = [];

    foreach (FIELDS as $field) {
        if (!array_key_exists($field, $input)) {
            continue;
        }
        $value = $input[$field];
        $valid = match ($field) {
            'media_type' => in_array($value, MEDIA_TYPES, true),
            'collection', 'category' => slug($value, 40) !== null,
            'public_id' => is_string($value) && preg_match('#^[A-Za-z0-9_/-]{1,255}$#', $value) === 1,
            'title' => is_string($value) && trim($value) !== '' && mb_strlen($value) <= 120,
            'alt' => is_string($value) && trim($value) !== '' && mb_strlen($value) <= 255,
            'width', 'height' => $value === null || (is_int($value) && $value > 0),
            'sort_order' => is_int($value),
            'published' => is_bool($value),
        };
        if (!$valid) {
            $errors[] = $field;
            continue;
        }
        $data[$field] = match (true) {
            is_bool($value) => (int) $value,
            is_string($value) => trim($value),
            default => $value,
        };
    }

    if (!$partial) {
        foreach (['public_id', 'title', 'alt', 'category'] as $required) {
            if (!array_key_exists($required, $data)) {
                $errors[] = $required;
            }
        }
    }

    if ($errors) {
        respond(422, ['ok' => false, 'error' => 'VALIDATION', 'fields' => array_values(array_unique($errors))]);
    }
    return $data;
}

function readJson(): array
{
    $body = json_decode((string) file_get_contents('php://input'), true);
    if (!is_array($body)) {
        respond(400, ['ok' => false, 'error' => 'INVALID_JSON']);
    }
    return $body;
}

function requireId(): int
{
    $id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT, ['options' => ['min_range' => 1]]);
    if (!$id) {
        respond(400, ['ok' => false, 'error' => 'ID_REQUIRED']);
    }
    return $id;
}

function present(array $row): array
{
    return [
        'id' => (int) $row['id'],
        'type' => $row['media_type'],
        'collection' => $row['collection'],
        'publicId' => $row['public_id'],
        'title' => $row['title'],
        'alt' => $row['alt'],
        'category' => $row['category'],
        'width' => $row['width'] === null ? null : (int) $row['width'],
        'height' => $row['height'] === null ? null : (int) $row['height'],
        'sortOrder' => (int) $row['sort_order'],
        'published' => (bool) $row['published'],
    ];
}

try {
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            $collection = slug($_GET['collection'] ?? 'gallery', 40) ?? 'gallery';
            $all = ($_GET['all'] ?? '') === '1';
            $query = $db->prepare(
                'SELECT * FROM koc_media WHERE collection = ?' . ($all ? '' : ' AND published = 1')
                . ' ORDER BY sort_order, id',
            );
            $query->execute([$collection]);
            respond(200, ['ok' => true, 'items' => array_map('present', $query->fetchAll())]);

        case 'POST':
            $data = validate(readJson(), false) + ['media_type' => 'image', 'collection' => 'gallery'];
            $columns = array_keys($data);
            $query = $db->prepare(sprintf(
                'INSERT INTO koc_media (%s) VALUES (%s)',
                implode(', ', $columns),
                implode(', ', array_fill(0, count($columns), '?')),
            ));
            $query->execute(array_values($data));
            respond(201, ['ok' => true, 'id' => (int) $db->lastInsertId()]);

        case 'PATCH':
            $id = requireId();
            $data = validate(readJson(), true);
            if (!$data) {
                respond(422, ['ok' => false, 'error' => 'EMPTY_UPDATE']);
            }
            $sets = implode(', ', array_map(fn (string $column) => "$column = ?", array_keys($data)));
            $query = $db->prepare("UPDATE koc_media SET $sets WHERE id = ?");
            $query->execute([...array_values($data), $id]);
            respond(200, ['ok' => true]);

        case 'DELETE':
            $query = $db->prepare('DELETE FROM koc_media WHERE id = ?');
            $query->execute([requireId()]);
            respond($query->rowCount() ? 200 : 404, ['ok' => $query->rowCount() > 0]);

        default:
            header('Allow: GET, POST, PATCH, DELETE');
            respond(405, ['ok' => false, 'error' => 'METHOD_NOT_ALLOWED']);
    }
} catch (PDOException $error) {
    if ($error->getCode() === '23000') {
        respond(409, ['ok' => false, 'error' => 'DUPLICATE']);
    }
    respond(500, ['ok' => false, 'error' => 'DB_ERROR']);
}
