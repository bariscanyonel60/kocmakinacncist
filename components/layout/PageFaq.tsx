import { FaqList } from "@/components/home/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import type { Faq } from "@/data/faq";
import { faqJsonLd } from "@/lib/jsonld";

export function PageFaq({ faqs, title }: { faqs: Faq[]; title?: string }) {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <FaqList faqs={faqs} title={title} />
    </>
  );
}
