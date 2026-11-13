import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { services } from "@/data/services";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Hizmetler", path: "/hizmetler" },
];

export const metadata: Metadata = pageMeta({
  title: "Hizmetler | CNC Torna ve Talaşlı İmalat | KOC Makina",
  description:
    "KOC Makina hizmetleri: CNC torna, CNC işleme, talaşlı imalat, hassas parça, prototip, seri ve özel parça. Her başlık ayrı sayfada.",
  path: "/hizmetler",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Hizmetler"
        title="Üretim yetenekleri"
        text="Her başlık ayrı bir sayfada anlatılır. Kapsam dışı kalan bir hizmet, veri dosyasından çıkarılabilir."
        crumbs={crumbs}
      />
      <section className="bg-paper text-ink">
        <Container className="py-16">
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/hizmetler/${service.slug}`} className="group grid items-center gap-6 py-6 md:grid-cols-[88px_1.1fr_0.9fr_auto]">
                  <span className="font-display text-sm text-accent">{service.number}</span>
                  <span>
                    <span className="block font-display text-3xl tracking-[-0.03em] uppercase">{service.title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted">{service.summary}</span>
                  </span>
                  <span className="relative hidden h-28 md:block">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="240px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="text-[11px] tracking-[0.16em] uppercase">
                    İncele <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
