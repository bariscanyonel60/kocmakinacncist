import type { Metadata } from "next";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { galleryItems } from "@/data/gallery";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Galeri", path: "/galeri" },
];

export const metadata: Metadata = pageMeta({
  title: "Galeri | CNC Üretim Detayları | KOC Makina",
  description:
    "CNC torna, freze, ölçü kontrolü ve atölye kareleri. Temsili üretim görselleri; müşteri proje arşivi değildir. KOC Makina galeri.",
  path: "/galeri",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Galeri"
        title="Üretimden detaylar"
        text="Filtreler talaşlı imalatın farklı karelerini ayırır. Hiçbiri belirli bir müşteri projesi olarak sunulmaz."
        crumbs={crumbs}
      />
      <section className="bg-paper py-16 text-ink">
        <Container>
          <GalleryExplorer items={galleryItems} />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
