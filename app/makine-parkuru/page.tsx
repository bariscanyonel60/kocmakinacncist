import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { MachineList } from "@/components/machines/MachineList";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Makine Parkuru", path: "/makine-parkuru" },
];

export const metadata: Metadata = pageMeta({
  title: "Makine Parkuru | 15\" ve 8\" CNC Torna | KOC Makina",
  description:
    "KOC Makina makine parkuru: 15\" ve 8\" CNC torna, 4 eksen CNC işleme. Marka/model ve mm ölçüler doğrulanınca eklenir. İstanbul İkitelli.",
  path: "/makine-parkuru",
});

export default function MachinesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Makine parkuru"
        title="Teknolojimiz"
        text={'Kartvizitteki kapasite özeti: 15" ve 8" CNC torna, 4 eksen CNC işleme. Fotoğraflar yöntem anlatır; marka, model ve mm değerler doğrulanınca eklenir.'}
        crumbs={crumbs}
      />
      <section className="bg-paper text-ink">
        <Container className="py-16 lg:py-24">
          <MachineList />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
