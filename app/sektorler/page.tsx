import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { SectorGrid } from "@/components/home/SectorGrid";
import { QuoteBand } from "@/components/home/QuoteBand";
import { PageFaq } from "@/components/layout/PageFaq";
import { sectorFaqs } from "@/data/faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Sektörler", path: "/sektorler" },
];

export const metadata = pageMeta({
  title: "CNC Üretiminin Uygulama Alanları",
  description:
    "KOC Makina'nın CNC torna ve talaşlı imalat çözümlerinin değerlendirilebileceği sektörler. Liste müşteri referansı değildir.",
  path: "/sektorler",
});

export default function SectorsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Sektörler"
        title="Parçanın gidebileceği yerler"
        description="Bu sayfa müşteri listesi değildir. CNC torna ve talaşlı imalatın karşılık bulabileceği iş alanlarını tarif eder."
        image="/images/motor-blogu.jpg"
        imageAlt="Kapalı kabin içinde soğutma sıvısıyla işlenen motor bloğu"
      />
      <Breadcrumbs items={crumbs} />
      <SectorGrid />
      <PageFaq faqs={sectorFaqs} title="Sektör soruları" />
      <QuoteBand />
    </>
  );
}
