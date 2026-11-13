import Link from "next/link";
import { PageCtaBar } from "@/components/layout/PageCtaBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Sayfa bulunamadı", path: "/404" },
];

const links = [
  { href: "/hizmetler/cnc-torna", label: "CNC Torna" },
  { href: "/hizmetler/cnc-isleme", label: "CNC Freze" },
  { href: "/hizmetler/talasli-imalat", label: "Talaşlı İmalat" },
  { href: "/makine-parkuru", label: "Makine Parkuru" },
  { href: "/uretim", label: "Üretim süreci" },
  { href: "/galeri", label: "Galeri" },
  { href: "/istanbul-cnc-torna", label: "İstanbul CNC torna" },
  { href: "/iletisim", label: "İletişim" },
];

export function NotFoundView() {
  return (
    <section className="bg-ink text-white">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="pt-[92px]">
        <PageCtaBar message="Aradığınız sayfa yok. Parça resmi elinizdeyse teklif formuna geçin veya arayın." />
      </div>
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-10 pb-16 md:px-10 md:pb-24">
        <nav aria-label="Sayfa yolu">
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
        <p className="mt-6 max-w-xl text-lg text-mist">
          Bu adres üretim hattımızda yok. Aşağıdaki sayfalardan CNC torna, freze, galeri veya teklife
          geçebilirsiniz.
        </p>
        <ul className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <li key={link.href} className="bg-ink">
              <Link
                href={link.href}
                className="flex min-h-16 items-center justify-between px-4 text-sm hover:text-accent"
              >
                <span>{link.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="mt-8 inline-flex text-xs font-semibold tracking-[0.18em] uppercase hover:text-accent"
        >
          Ana sayfaya dön →
        </Link>
      </div>
    </section>
  );
}
