import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { sectors } from "@/data/sectors";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Sektörler", path: "/sektorler" },
];

export const metadata: Metadata = pageMeta({
  title: "Sektörler | CNC Parça Üretimi | KOC Makina",
  description:
    "CNC torna ve talaşlı imalatın sık görüldüğü iş aileleri: otomotiv yan sanayi, makine, ekipman, otomasyon, enerji. Müşteri listesi değildir.",
  path: "/sektorler",
});

export default function SectorsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Sektörler"
        title="Uygulanabileceği alanlar"
        text="Bu sayfa müşteri listesi değildir. Başlıklar, CNC torna ve talaşlı imalatın sık değerlendirildiği iş ailelerini anlatır."
        crumbs={crumbs}
      />
      <section className="bg-paper text-ink">
        <Container className="grid gap-16 py-16 lg:py-24">
          {sectors.map((sector, index) => (
            <article key={sector.slug} className="grid items-center gap-8 border-t border-ink/10 pt-10 lg:grid-cols-2">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="font-display text-sm text-accent">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-display text-4xl tracking-[-0.03em] uppercase">{sector.title}</h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{sector.text}</p>
              </div>
              <div className={`relative min-h-[280px] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image src={sector.image} alt={sector.imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
            </article>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
