import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Sayfa bulunamadı", path: "/404" },
];

const links = [
  { href: "/hizmetler/cnc-torna", label: "CNC Torna" },
  { href: "/hizmetler/cnc-isleme", label: "CNC İşleme" },
  { href: "/hizmetler/talasli-imalat", label: "Talaşlı İmalat" },
  { href: "/makine-parkuru", label: "Makine Parkuru" },
  { href: "/uretim", label: "Üretim süreci" },
  { href: "/galeri", label: "Galeri" },
  { href: "/istanbul-cnc-torna", label: "İstanbul CNC torna" },
  { href: "/iletisim", label: "İletişim" },
];

export const metadata = pageMeta({
  title: "Sayfa bulunamadı",
  description:
    "Aradığınız KOC Makina sayfası yok. CNC torna, işleme, galeri ve teklif sayfalarına buradan geçebilirsiniz.",
  path: "/404",
  index: false,
});

export default function NotFound() {
  return (
    <section className="bg-ink px-5 pt-28 pb-16 text-white md:px-10 md:pt-32">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex flex-col gap-4 border border-white/15 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-mist">
            Aradığınız sayfa yok. Parça resmi elinizdeyse teklif formuna geçin.
          </p>
          <Link
            href="/iletisim#teklif"
            className="inline-flex min-h-12 shrink-0 items-center justify-center bg-accent px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-white hover:text-ink"
          >
            Teklif Al →
          </Link>
        </div>
        <nav aria-label="Sayfa yolu" className="mt-8">
          <ol className="flex flex-wrap gap-x-3 gap-y-2 text-xs tracking-[0.14em] text-white/55 uppercase">
            <li>
              <Link href="/" className="hover:text-white">
                Ana Sayfa
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white" aria-current="page">
              Sayfa bulunamadı
            </li>
          </ol>
        </nav>
        <p className="eyebrow mt-10 text-accent">404</p>
        <h1 className="display mt-4 text-[clamp(3rem,10vw,8rem)]">Parça bulunamadı.</h1>
        <p className="mt-6 max-w-xl text-lg text-mist">Aradığınız sayfa üretim hattımızda görünmüyor.</p>
        <ul className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <li key={link.href} className="bg-ink">
              <Link href={link.href} className="flex min-h-16 items-center justify-between px-4 text-sm hover:text-accent">
                <span>{link.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="mt-8 inline-flex text-xs font-semibold tracking-[0.18em] uppercase hover:text-accent">
          Ana sayfaya dön →
        </Link>
      </div>
    </section>
  );
}
