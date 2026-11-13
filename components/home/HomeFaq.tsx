import { homeFaqs } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HomeFaq() {
  return (
    <section className="bg-paper py-20 text-ink md:py-28" aria-labelledby="sss-baslik">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          index="09"
          eyebrow="Sorular"
          title={<span id="sss-baslik">Teknik tarafta net cevap</span>}
          text="Beş sık soru: ne üretiriz, torna kapsamı, teklif dosyası, prototip/seri ve fiyat mantığı. Ayrıntı hizmet sayfalarındadır."
        />
        <FaqList items={homeFaqs} />
      </Container>
    </section>
  );
}
