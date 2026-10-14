import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RelatedLinks } from "@/components/layout/RelatedLinks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Teşekkürler", path: "/tesekkurler" },
];

export const metadata = pageMeta({
  title: "Teklif talebi için teşekkürler",
  description:
    "KOC Makina teklif kaydı oluştuğunda bu sayfa açılır. Kayıt hattı bağlanmadan talep alınmış sayılmaz.",
  path: "/tesekkurler",
  index: false,
});

export default function ThanksPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <section className="bg-ink px-5 pt-28 pb-16 text-white md:px-10 md:pt-36">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-mist">Başka bir parça için yeni çizim gönderebilirsiniz.</p>
          <Link
            href="/iletisim#teklif"
            className="inline-flex min-h-12 items-center justify-center bg-accent px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-white hover:text-ink"
          >
            Yeni teklif →
          </Link>
        </div>
      </section>
      <Breadcrumbs items={crumbs} />
      <Container className="max-w-3xl py-16 lg:py-24">
        <p className="eyebrow text-accent">Teşekkürler</p>
        <h1 className="display mt-4 text-[clamp(2.6rem,6vw,4.8rem)]">Talebiniz not edildi.</h1>
        <div className="mt-8 space-y-4 leading-relaxed text-ink/75">
          <p>
            Bu sayfa, teklif kaydı gerçekten oluşturulduğunda açılır. Kayıt hattı bağlanmadan form bu adrese yönlendirmez ve talep saklanmaz.
          </p>
          <p>
            Kayıt oluştuğunda dönüş, formda yazdığınız telefon veya e-posta üzerinden yapılır. Eksik tolerans varsa üretime geçilmeden sorulur.
          </p>
        </div>
        <div className="mt-12">
          <RelatedLinks
            links={[
              { href: "/hizmetler/cnc-torna", label: "CNC torna" },
              { href: "/uretim", label: "Üretim süreci" },
              { href: "/galeri", label: "Üretimden detaylar" },
              { href: "/kurumsal", label: "Firma yaklaşımı" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
