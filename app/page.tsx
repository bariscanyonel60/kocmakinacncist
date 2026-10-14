import { AboutBand } from "@/components/home/AboutBand";
import { CapabilityGrid } from "@/components/home/CapabilityGrid";
import { CapabilityMarquee } from "@/components/home/CapabilityMarquee";
import { EngineeringBand } from "@/components/home/EngineeringBand";
import { FaqList } from "@/components/home/FaqList";
import { Hero } from "@/components/home/Hero";
import { MachineStrip } from "@/components/home/MachineStrip";
import { PrecisionStatement } from "@/components/home/PrecisionStatement";
import { ProcessFeature } from "@/components/home/ProcessFeature";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ProjectGrid } from "@/components/home/ProjectGrid";
import { QualitySection } from "@/components/home/QualitySection";
import { ReviewList } from "@/components/home/ReviewList";
import { RfqSection } from "@/components/home/RfqSection";
import { SectorGrid } from "@/components/home/SectorGrid";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processFeatures } from "@/data/capabilities";
import { homeFaqs } from "@/data/faq";
import { projects } from "@/data/projects";
import { faqJsonLd } from "@/lib/jsonld";
import { getGalleryItems } from "@/lib/media";
import { defaultDescription, homeTitle, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: homeTitle,
  description: defaultDescription,
  path: "/",
  absolute: true,
});

export default async function HomePage() {
  const galleryItems = await getGalleryItems();
  const [turning, milling] = processFeatures;
  const offset = projects.length > 0 ? 1 : 0;
  const number = (value: number) => String(value + offset).padStart(2, "0");

  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />
      <CapabilityMarquee />
      <AboutBand />
      <CapabilityGrid />
      {turning ? <ProcessFeature feature={turning} /> : null}
      {milling ? <ProcessFeature feature={milling} reverse /> : null}
      <ProcessTimeline index="05" />
      <MachineStrip />
      <EngineeringBand />
      <QualitySection index="07" />
      <PrecisionStatement />
      <SectorGrid index="08" />
      <ProjectGrid index="09" />
      <section className="bg-white">
        <Container className="py-20 lg:py-28">
          <SectionHeader
            index={number(9)}
            eyebrow="Galeri"
            title={["Üretimden", "detaylar"]}
            className="mb-10"
            action={
              <ArrowLink href="/galeri" variant="text">
                Tüm galeri
              </ArrowLink>
            }
          />
          <GalleryExplorer items={galleryItems.slice(0, 6)} showFilters={false} />
        </Container>
      </section>
      <FaqList faqs={homeFaqs} index={number(10)} />
      <ReviewList />
      <RfqSection index={number(11)} />
    </>
  );
}
