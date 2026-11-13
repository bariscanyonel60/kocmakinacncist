import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedLinks } from "@/components/layout/RelatedLinks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { PageFaq } from "@/components/layout/PageFaq";
import { galleryFaqs } from "@/data/faq";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { getGalleryItems } from "@/lib/media";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Galeri", path: "/galeri" },
];

export const metadata = pageMeta({
  title: "Üretim Galerisi",
  description:
    "İstanbul CNC atölyesinden torna, freze, işlenmiş parça ve tezgâh kareleri. Koç Makina üretim galerisi — ölçü fotoğraftan okunmaz.",
  path: "/galeri",
  image: "/images/hassas-freze.jpg",
  imageAlt: "Bakır alaşım parçaya inen ince CNC freze takımı",
});

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Galeri"
        title="CNC üretim galerisi"
        description="Torna, freze, işlenmiş parça ve tezgâh detayları. Fotoğraflar gerçek işleme anlarından seçildi."
        image="/images/hassas-freze.jpg"
        imageAlt="Bakır alaşım parçaya inen ince CNC freze takımı"
      />
      <Breadcrumbs items={crumbs} />
      <Container className="py-16 lg:py-24">
        <GalleryExplorer items={galleryItems} />
        <div className="mt-16">
          <RelatedLinks
            title="İlgili sayfalar"
            links={[
              { href: "/hizmetler/cnc-torna", label: "CNC torna" },
              { href: "/hizmetler/cnc-isleme", label: "CNC freze" },
              { href: "/makine-parkuru", label: "Makine parkuru" },
              { href: "/iletisim#teklif", label: "Teklif formu" },
            ]}
          />
        </div>
      </Container>
      <PageFaq faqs={galleryFaqs} title="Galeri soruları" />
    </>
  );
}
