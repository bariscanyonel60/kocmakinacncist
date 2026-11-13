import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { processSteps } from "@/data/process";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Üretim", path: "/uretim" },
];

export const metadata: Metadata = pageMeta({
  title: "Üretim Süreci | CNC Planlama | KOC Makina",
  description:
    "KOC Makina üretim süreci: teknik talep, yöntem seçimi, talaş kaldırma ve ölçü kontrolü. Tolerans uydurulmaz.",
  path: "/uretim",
});

const materials = [
  {
    title: "Malzeme çizimden gelir",
    text: "Çelik, paslanmaz çelik, alüminyum ve pirinç talaşlı imalatta sık görülen gruplardır. Hangisinin işleneceği, teknik resimdeki tanıma bağlıdır. Listede olmayan bir alaşım varsa ayrıca sorulur.",
  },
  {
    title: "Tolerans uydurulmaz",
    text: "Kritik ölçü resimde işaretliyse kontrol planına girer. İşaret yoksa genel ölçü gibi ele alınır. Mikron cinsinden sabit bir iddia yayınlanmaz.",
  },
  {
    title: "Adet planı değiştirir",
    text: "Tek parça prototip, tekrarlayan parti seri mantığıdır. Operasyonun adı değişmez. Hazırlığın partiye bölünmesi değişir.",
  },
];

export default function ProductionPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Üretim"
        title="Fikirden parçaya giden sıra"
        text="Üretim, tezgahı çalıştırmaktan önce çizimi okumaktır. Aşağıdaki sıra her işte aynı disiplinle, parçaya göre sıkışarak uygulanır."
        crumbs={crumbs}
      />
      <section className="bg-paper text-ink">
        <Container className="py-16 lg:py-24">
          <ol className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step) => (
              <li key={step.number} className="border-t border-ink/15 pt-5">
                <p className="font-display text-sm text-accent">{step.number}</p>
                <h2 className="mt-3 font-display text-2xl tracking-[-0.03em] uppercase">{step.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-3">
            {materials.map((item) => (
              <article key={item.title} className="bg-paper p-6">
                <h2 className="font-display text-2xl tracking-[-0.03em] uppercase">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
