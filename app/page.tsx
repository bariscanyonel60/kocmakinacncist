import { About } from "@/components/home/About";
import { Capabilities } from "@/components/home/Capabilities";
import { CncFeature } from "@/components/home/CncFeature";
import { Engineering } from "@/components/home/Engineering";
import { Hero } from "@/components/home/Hero";
import { HomeFaq } from "@/components/home/HomeFaq";
import { Machines } from "@/components/home/Machines";
import { Marquee } from "@/components/home/Marquee";
import { Process } from "@/components/home/Process";
import { Reviews } from "@/components/home/Reviews";
import { Sectors } from "@/components/home/Sectors";
import { CtaBand } from "@/components/layout/CtaBand";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { Container } from "@/components/ui/Container";
import { InternalLinks } from "@/components/ui/InternalLinks";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/data/gallery";
import { homeFaqs } from "@/data/faq";
import { faqSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <Marquee />
      <About />
      <Capabilities />
      <CncFeature />
      <Process />
      <Machines />
      <Engineering />
      <Sectors />
      <section className="bg-paper py-20 text-ink md:py-28" aria-labelledby="galeri-baslik">
        <Container>
          <SectionHeading
            index="08"
            eyebrow="Galeri"
            title={<span id="galeri-baslik">Üretimden detaylar</span>}
            text="Kareler yöntemi gösterir: tornalama, işlenmiş parça, ölçü ve tezgah. Müşteri proje arşivi değildir."
          />
          <div className="mt-12">
            <GalleryExplorer items={galleryItems.slice(0, 6)} showFilters={false} />
          </div>
        </Container>
      </section>
      <HomeFaq />
      <Reviews />
      <section className="border-t border-ink/10 bg-paper py-16 text-ink md:py-20">
        <Container>
          <InternalLinks title="Site içi geçişler" />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
