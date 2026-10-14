import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { PageFaq } from "@/components/layout/PageFaq";
import { PrecisionStatement } from "@/components/home/PrecisionStatement";
import { QualitySection } from "@/components/home/QualitySection";
import { QuoteBand } from "@/components/home/QuoteBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { qualityFaqs } from "@/data/faq";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Kalite", path: "/kalite" },
];

export const metadata = pageMeta({
  title: "Kalite Kontrol ve Ölçüm",
  description:
    "Koç Makina'da CNC torna ve freze parçaları teknik resimdeki ölçülere göre kontrol edilir. Ölçüm, proses kontrolü ve teknik dokümantasyon yaklaşımı.",
  path: "/kalite",
});

export default function QualityPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Kalite"
        title="Kalite tesadüf değildir."
        description="Hassas üretim, doğru ölçüm ve sürdürülebilir kalite kontrol süreçleriyle tamamlanır."
        image="/images/hassas-parca.jpg"
        imageAlt="Hassas işlenmiş, çok delikli metal parça yüzeyi"
      />
      <Breadcrumbs items={crumbs} />
      <QualitySection />
      <PrecisionStatement />
      <PageFaq faqs={qualityFaqs} title="Kalite soruları" />
      <QuoteBand />
    </>
  );
}
