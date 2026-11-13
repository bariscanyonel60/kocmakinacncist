import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedLinks } from "@/components/layout/RelatedLinks";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { QuoteBand } from "@/components/home/QuoteBand";
import { PageFaq } from "@/components/layout/PageFaq";
import { productionFaqs } from "@/data/faq";
import { productionRelatedLinks } from "@/data/related-links";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Üretim", path: "/uretim" },
];

export const metadata = pageMeta({
  title: "CNC Üretim Süreci",
  description:
    "Teknik talep, değerlendirme, plan, CNC torna/freze işleme, kalite kontrol ve teslimat. Koç Makina üretim adımları İstanbul.",
  path: "/uretim",
  image: "/images/cnc-disli.jpg",
  imageAlt: "Dişli formundaki metal parçanın üzerinde çalışan freze takımı",
});

export default function ProductionPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Üretim"
        title="CNC üretim süreci: çizimden teslimata"
        description="Süreç, tezgâhın başına geçmeden önce yazılır. Aşağıdaki sıra her parçada aynı ciddiyetle uygulanır; süre parçaya göre değişir."
        image="/images/cnc-disli.jpg"
        imageAlt="Dişli formundaki metal parçanın üzerinde çalışan ince freze takımı"
      />
      <Breadcrumbs items={crumbs} />
      <Container className="py-16 lg:py-20">
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-ink/80">
          <p>
            Üretim planı malzeme cinsini de içerir. Çelik, paslanmaz, alüminyum ve pirinç sık görülen işlenebilir metallerdir. Hangisinin kullanılacağı stok vitrininden değil, teknik resimden gelir. Malzeme müşteriden de gelebilir; ölçü ve şart resimle uyumlu olmalıdır.
          </p>
          <p>
            Tek parçada amaç geometriyi doğrulamaktır. Seride amaç, aynı rotayı bozmadan ölçü dağılımını dar tutmaktır. İkisi için ayrı teklif çıkar. Sabit gün sayısı veya aylık adet ilan edilmez.
          </p>
        </div>
      </Container>
      <ProcessTimeline detailed />
      <Container className="pb-16 lg:pb-20">
        <RelatedLinks title="İlgili sayfalar" links={productionRelatedLinks} />
      </Container>
      <PageFaq faqs={productionFaqs} title="Süreç soruları" />
      <QuoteBand />
    </>
  );
}
