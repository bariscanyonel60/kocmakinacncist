import { AboutBand } from "@/components/home/AboutBand";
import { CapabilityGrid } from "@/components/home/CapabilityGrid";
import { CapabilityMarquee } from "@/components/home/CapabilityMarquee";
import { EngineeringBand } from "@/components/home/EngineeringBand";
import { FaqList } from "@/components/home/FaqList";
import { Hero } from "@/components/home/Hero";
import { MachineStrip } from "@/components/home/MachineStrip";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { QuoteBand } from "@/components/home/QuoteBand";
import { ReviewList } from "@/components/home/ReviewList";
import { SectorGrid } from "@/components/home/SectorGrid";
import { TurningFeature } from "@/components/home/TurningFeature";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { galleryItems } from "@/data/gallery";
import { homeFaqs } from "@/data/faq";
import { faqJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMeta({
  title: "CNC Torna İstanbul | Hassas CNC İşleme | KOC Makina",
  description:
    "KOC Makina; İstanbul'da CNC torna, CNC işleme, talaşlı imalat ve hassas parça üretimi çözümleri sunar. Projeniz için bizimle iletişime geçin.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />
      <CapabilityMarquee />
      <AboutBand />
      <CapabilityGrid />
      <TurningFeature />
      <ProcessTimeline />
      <MachineStrip />
      <EngineeringBand />
      <SectorGrid />
      <section className="bg-white">
        <Container className="py-20 lg:py-28">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-accent">Galeri</p>
              <h2 className="display mt-4 text-[clamp(2.3rem,5vw,4.6rem)]">Üretimden detaylar</h2>
            </div>
            <Link href="/galeri" className="text-xs font-semibold tracking-[0.18em] uppercase hover:text-accent">
              Tüm galeri →
            </Link>
          </div>
          <GalleryExplorer items={galleryItems.slice(0, 6)} showFilters={false} />
        </Container>
      </section>
      <FaqList faqs={homeFaqs} />
      <ReviewList />
      <QuoteBand />
    </>
  );
}
