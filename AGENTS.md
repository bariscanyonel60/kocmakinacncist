<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# KOC Makina CNC

## Çalıştırma

- `npm run dev` — yerel geliştirme
- `npm run build` — production derlemesi
- `npm run lint` — ESLint
- `npm start` — production sunucusu

## Ortam

- `NEXT_PUBLIC_SITE_URL` canonical, Open Graph ve sitemap adresidir. Örnek: `.env.example`
- Cloudinary bilgileri `.env.local` içindedir (git'e girmez). `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` doluysa `next/image`, `lib/cloudinary-loader.ts` ile görselleri Cloudinary'den çeker; boşsa `public/images` kullanılır. `/images/<ad>.jpg` yolu `koc-makina/<ad>` public ID'sine eşlenir. Yeni yerel görseller `npm run cloudinary:upload` ile yüklenir. `CLOUDINARY_API_SECRET` yalnızca sunucuda kullanılır; `NEXT_PUBLIC_` ile açılmaz.
- Netlify'da `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` ve `NEXT_PUBLIC_CLOUDINARY_FOLDER` build ortamına girilmelidir; admin paneli yüklemesi için `CLOUDINARY_API_KEY` ve `CLOUDINARY_API_SECRET` de eklenir.
- Veritabanı: sitenin kendi veritabanı `u2456160_koccnc` (MariaDB 10.6, `94.73.144.133`). Uzak erişim yalnızca Natro panelinde (Veritabanı Yönetimi → IP Güncelle) tanımlı IP'lerden açıktır; Homebrew MySQL 9 istemcisi `mysql_native_password` desteklemediği için yerelde PHP PDO veya uyumlu bir istemci kullanılır. `u2456160_lo2k1` WordPress veritabanıdır; içindeki `yw4p_` tablolarına dokunma. Next.js veritabanına doğrudan bağlanmaz, `hosting/koc-api/` PHP API'sini `MEDIA_API_URL` + `MEDIA_API_TOKEN` ile çağırır. `hosting/koc-api/config.php` git'e girmez; cPanel Dosya Yöneticisi ile `public_html/koc-api/` altına yüklenir, şema `schema.sql` ile phpMyAdmin'den kurulur.
- Galeri `lib/media.ts` → `getGalleryItems()` ile API'den gelir (`use cache`, `cacheTag("media-gallery")`). API yanıt vermezse `data/gallery.ts` yedektir.
- Telefon, e-posta, adres, WhatsApp ve sosyal hesaplar yalnızca `data/company.ts` içinden girilir. Boş bırakılan alan sitede yayınlanmaz.

## Deploy

Netlify, Next.js runtime ile derler. `netlify.toml` içindeki komut `next build`, yayın dizini `.next`.

## Dokunma

- `data/company.ts` içine doğrulanmamış telefon, adres veya sertifika yazma.
- `data/machines.ts` kapasite alanlarına tahmin değer koyma.
- `app/api/teklif/route.ts` talebi Resend ile `QUOTE_TO_EMAIL` adresine iletmeden `200` dönmesin. `RESEND_API_KEY`, `QUOTE_FROM_EMAIL` veya `QUOTE_TO_EMAIL` eksikse `501` döner. Vercel istek gövdesi ~4,5 MB ile sınırlı; ek dosyalar toplam 4 MB.

