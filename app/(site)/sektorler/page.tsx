import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedLinks } from "@/components/layout/RelatedLinks";
import { SectorGrid } from "@/components/home/SectorGrid";
import { QuoteBand } from "@/components/home/QuoteBand";
import { PageFaq } from "@/components/layout/PageFaq";
import { sectorFaqs } from "@/data/faq";
import { sectorsRelatedLinks } from "@/data/related-links";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Sektörler", path: "/sektorler" },
];

export const metadata = pageMeta({
  title: "CNC Üretiminin Uygulama Alanları",
  description:
    "Otomotiv, makina, yedek parça ve sanayi için CNC torna / talaşlı imalat uygulama alanları. Referans listesi değildir — Koç Makina.",
  path: "/sektorler",
  image: "/images/motor-blogu.jpg",
  imageAlt: "Soğutma sıvısıyla işlenen motor bloğu",
});

export default function SectorsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Sektörler"
        title="CNC üretiminin uygulama alanları"
        description="Bu sayfa müşteri listesi değildir. CNC torna ve talaşlı imalatın karşılık bulabileceği iş alanlarını tarif eder."
        image="/images/motor-blogu.jpg"
        imageAlt="Kapalı kabin içinde soğutma sıvısıyla işlenen motor bloğu"
      />
      <Breadcrumbs items={crumbs} />
      <SectorGrid />
      <Container className="pb-16 lg:pb-20">
        <RelatedLinks title="İlgili sayfalar" links={sectorsRelatedLinks} />
      </Container>
      <PageFaq faqs={sectorFaqs} title="Sektör soruları" />
      <QuoteBand />
    </>
  );
}
