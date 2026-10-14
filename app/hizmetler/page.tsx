import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { QuoteBand } from "@/components/home/QuoteBand";
import { PageFaq } from "@/components/layout/PageFaq";
import { serviceIndexFaqs } from "@/data/faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Hizmetler", path: "/hizmetler" },
];

export const metadata = pageMeta({
  title: "CNC Hizmetleri İstanbul",
  description:
    "KOC Makina'nın CNC torna, CNC işleme, talaşlı imalat, hassas parça, prototip ve seri üretim hizmetleri.",
  path: "/hizmetler",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Hizmetler"
        title="Üretim yetenekleri"
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
      <PageFaq faqs={serviceIndexFaqs} title="Hizmet soruları" />
      <QuoteBand />
    </>
  );
}
