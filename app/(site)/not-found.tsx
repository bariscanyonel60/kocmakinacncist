import { NotFoundView } from "@/components/layout/NotFoundView";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sayfa bulunamadı",
  description:
    "Aradığınız Koç Makina sayfası yok. CNC torna, CNC freze, galeri ve teklif sayfalarına buradan geçebilirsiniz.",
  path: "/404",
  index: false,
});

export default function NotFound() {
  return <NotFoundView />;
}
