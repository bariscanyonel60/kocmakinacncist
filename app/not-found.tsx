import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NotFoundView } from "@/components/layout/NotFoundView";
import { StickyCall } from "@/components/layout/StickyCall";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sayfa bulunamadı",
  description:
    "Aradığınız Koç Makina sayfası yok. CNC torna, CNC freze, galeri ve teklif sayfalarına buradan geçebilirsiniz.",
  path: "/404",
  index: false,
});

export default function RootNotFound() {
  return (
    <>
      <Header />
      <main id="icerik" className="max-w-full overflow-x-clip">
        <NotFoundView />
      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
