import type { Metadata } from "next";
import { LegalArticle } from "@/components/layout/LegalArticle";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Çerez Politikası | KOC Makina CNC",
  description:
    "KOC Makina çerez politikası: analitik ve reklam çerezi yok. Zorunlu olmayan izleme aracı eklenirse bu sayfa güncellenir.",
  path: "/cerez-politikasi",
});

export default function CookiePage() {
  return (
    <LegalArticle
      title="Çerez Politikası"
      description="İzleme aracı eklenirse bu sayfa ve bir tercih katmanı birlikte güncellenir."
      path="/cerez-politikasi"
    >
      <p>
        Site, sayfayı göstermek dışında bir çerez yazmaz. Analitik, reklam veya üçüncü taraf piksel eklenmemiştir. Bu yüzden çerez onay bandı gösterilmez. Bant, ancak zorunlu olmayan çerez eklenirse anlamlıdır.
      </p>
      <p>
        Tarayıcının kendi oturum davranışı bu politikanın dışında kalabilir. İleride ölçüm aracı bağlanırsa araç adı, süre ve kapatma yolu burada yazılır.
      </p>
    </LegalArticle>
  );
}
