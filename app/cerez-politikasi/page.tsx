import { LegalArticle } from "@/components/layout/LegalArticle";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Çerez Politikası",
  description:
    "KOC Makina sitesinde pazarlama ve analitik çerezi yoktur. Ölçüm aracı eklenirse bu politika ve onay birlikte güncellenir.",
  path: "/cerez-politikasi",
});

export default function CookiesPage() {
  return (
    <LegalArticle
      eyebrow="Yasal"
      title="Çerez Politikası"
      description="Site, sayfayı çalıştırmak dışında bir izleme aracı kurmaz."
      path="/cerez-politikasi"
      sections={[
        {
          heading: "Mevcut durum",
          paragraphs: [
            "Zorunlu olmayan analitik, reklam veya profilleme çerezi eklenmemiştir. Bu nedenle çerez onay bandı gösterilmez.",
            "Tarayıcınızın kendi oturum davranışı dışında, ziyaretçi hareketi bir panele yazılmaz.",
          ],
        },
        {
          heading: "İleride",
          paragraphs: [
            "Bir ölçüm aracı eklenirse bu sayfa güncellenir ve gerekliyse onay istenir. Araç eklenmeden politika varmış gibi davranılmaz.",
          ],
        },
      ]}
    />
  );
}
