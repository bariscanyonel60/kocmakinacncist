import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { QuoteBand } from "@/components/home/QuoteBand";
import { PageFaq } from "@/components/layout/PageFaq";
import { machineFaqs } from "@/data/faq";
import { MachineCard } from "@/components/products/MachineCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { machines } from "@/data/machines";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Makine Parkuru", path: "/makine-parkuru" },
];

export const metadata = pageMeta({
  title: "Makine Parkuru",
  description:
    "Koç Makina CNC torna ve CNC işleme parkurunun teknik kartları. Marka, kapasite ve hassasiyet bilgileri girildiğinde bu sayfada görünür.",
  path: "/makine-parkuru",
});

export default function MachinesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Makine parkuru"
        title="Teknolojimiz"
        description="Üretimde hassasiyet, doğru teknolojiyle başlar. Marka, model ve kapasite alanları gerçek değer girilene kadar boş bırakıldı."
        image="/images/cnc-torna-taret.jpg"
        imageAlt="CNC torna içinde çok istasyonlu takım tareti ve kesici takımlar"
      />
      <Breadcrumbs items={crumbs} />
      <Container className="py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {machines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>
      </Container>
      <PageFaq faqs={machineFaqs} title="Parkur soruları" />
      <QuoteBand />
    </>
  );
}
