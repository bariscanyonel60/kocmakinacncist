import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedLinks } from "@/components/layout/RelatedLinks";
import { QuoteBand } from "@/components/home/QuoteBand";
import { PageFaq } from "@/components/layout/PageFaq";
import { machineFaqs } from "@/data/faq";
import { machinesRelatedLinks } from "@/data/related-links";
import { MachineCard } from "@/components/products/MachineCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { getMachines } from "@/lib/machines-content";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Makine Parkuru", path: "/makine-parkuru" },
];

export const metadata = pageMeta({
  title: 'Makine Parkuru | 15" ve 8" CNC Torna',
  description:
    'Kartvizitteki kapasite özeti: 15" ve 8" CNC torna, 4 eksen CNC işleme. Koç Makina İstanbul makine parkuru — marka ve mm değerler doğrulanınca eklenir.',
  path: "/makine-parkuru",
  image: "/images/cnc-torna-taret.jpg",
  imageAlt: "CNC torna içinde çok istasyonlu takım tareti",
});

export default async function MachinesPage() {
  const machines = await getMachines();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Makine parkuru"
        title='CNC makine parkuru: 15" ve 8" torna'
        description='Kartvizitteki kapasite özeti: 15" ve 8" CNC torna, 4 eksen CNC işleme. Fotoğraflar yöntem anlatır; marka, model ve mm değerler doğrulanınca eklenir.'
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
      <Container className="pb-16 lg:pb-20">
        <RelatedLinks title="İlgili sayfalar" links={machinesRelatedLinks} />
      </Container>
      <PageFaq faqs={machineFaqs} title="Parkur soruları" />
      <QuoteBand />
    </>
  );
}
