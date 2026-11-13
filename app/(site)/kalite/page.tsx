import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedLinks } from "@/components/layout/RelatedLinks";
import { PageFaq } from "@/components/layout/PageFaq";
import { PrecisionStatement } from "@/components/home/PrecisionStatement";
import { QualitySection } from "@/components/home/QualitySection";
import { QuoteBand } from "@/components/home/QuoteBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { qualityFaqs } from "@/data/faq";
import { qualityRelatedLinks } from "@/data/related-links";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Kalite", path: "/kalite" },
];

export const metadata = pageMeta({
  title: "Kalite Kontrol ve Ölçüm",
  description:
    "CNC torna ve freze parçalarında teknik resme göre ölçü kontrolü. Koç Makina kalite yaklaşımı: proses kontrolü, teslim öncesi doğrulama.",
  path: "/kalite",
  image: "/images/hassas-parca.jpg",
  imageAlt: "Hassas işlenmiş, çok delikli metal parça yüzeyi",
});

export default function QualityPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Kalite"
        title="CNC kalite kontrol ve ölçüm"
        description="Hassas üretim, doğru ölçüm ve sürdürülebilir kalite kontrol süreçleriyle tamamlanır."
        image="/images/hassas-parca.jpg"
        imageAlt="Hassas işlenmiş, çok delikli metal parça yüzeyi"
      />
      <Breadcrumbs items={crumbs} />
      <QualitySection />
      <PrecisionStatement />
      <Container className="py-16 lg:py-20">
        <RelatedLinks title="İlgili sayfalar" links={qualityRelatedLinks} />
      </Container>
      <PageFaq faqs={qualityFaqs} title="Kalite soruları" />
      <QuoteBand />
    </>
  );
}
