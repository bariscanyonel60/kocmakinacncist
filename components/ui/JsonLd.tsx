export function JsonLd({ data }: { data: unknown }) {
  const payload = Array.isArray(data) ? data.filter((item) => item != null) : data;
  if (payload == null || (Array.isArray(payload) && payload.length === 0)) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
