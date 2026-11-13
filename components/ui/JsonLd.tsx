import { jsonLdScript } from "@/lib/jsonld";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const payload = "@context" in data ? data : { "@context": "https://schema.org", ...data };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(payload) }}
    />
  );
}
