import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedLinks } from "@/components/layout/RelatedLinks";
import { QuoteBand } from "@/components/home/QuoteBand";
import { PageFaq } from "@/components/layout/PageFaq";
import { serviceIndexFaqs } from "@/data/faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { getServices } from "@/lib/services-content";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Hizmetler", path: "/hizmetler" },
];

export const metadata = pageMeta({
  title: "CNC Hizmetleri İstanbul",
  description:
    "İstanbul'da CNC torna, CNC freze, talaşlı imalat, hassas parça, prototip ve seri üretim. Koç Makina hizmet listesi ve teklif yolu.",
  path: "/hizmetler",
  image: "/images/cnc-freze-talas.jpg",
  imageAlt: "CNC frezede metal işlenirken dağılan talaş",
});

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Hizmetler"
        title="CNC hizmetleri İstanbul"
        description="CNC torna ve talaşlı imalat başlıkları tek listede. Kapsam dışı bir iş, veri dosyasından çıkarılabilir."
        image="/images/cnc-freze-talas.jpg"
        imageAlt="CNC frezede metal işlenirken dağılan talaş"
      />
      <Breadcrumbs items={crumbs} />
      <Container className="py-16 lg:py-24">
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {services.map((service) => (
            <li key={service.slug}>
              <Link href={`/hizmetler/${service.slug}`} className="group grid gap-4 py-8 md:grid-cols-12 md:items-end">
                <span className="font-display text-accent md:col-span-1">{service.number}</span>
                <span className="font-display text-3xl uppercase md:col-span-4">{service.title}</span>
                <span className="text-ink/70 md:col-span-6">{service.short}</span>
                <span className="text-sm tracking-[0.16em] uppercase transition-transform group-hover:translate-x-1 md:col-span-1 md:text-right">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <Container className="pb-16 lg:pb-20">
        <RelatedLinks
          title="İlgili sayfalar"
          links={[
            { href: "/makine-parkuru", label: "Makine parkuru" },
            { href: "/uretim", label: "Üretim süreci" },
            { href: "/galeri", label: "Üretim galerisi" },
            { href: "/istanbul-cnc-torna", label: "İstanbul CNC torna" },
            { href: "/iletisim#teklif", label: "Teklif formu" },
          ]}
        />
      </Container>
      <PageFaq faqs={serviceIndexFaqs} title="Hizmet soruları" />
      <QuoteBand />
    </>
  );
}
