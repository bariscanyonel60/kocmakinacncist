import Link from "next/link";
import { cacheLife } from "next/cache";
import { LogoImage } from "@/components/brand/Logo";
import { company, filled, phoneHref } from "@/data/company";
import { legalLinks } from "@/data/navigation";
import { sectors } from "@/data/sectors";

const corporate = [
  { href: "/kurumsal", label: "Hakkımızda" },
  { href: "/kalite", label: "Kalite" },
  { href: "/makine-parkuru", label: "Makine Parkuru" },
  { href: "/galeri", label: "Projeler & Galeri" },
  { href: "/uretim", label: "Üretim Süreci" },
];

const production = [
  { href: "/hizmetler/cnc-torna", label: "CNC Torna" },
  { href: "/hizmetler/cnc-isleme", label: "CNC Freze" },
  { href: "/hizmetler/hassas-parca-uretimi", label: "Hassas İşleme" },
  { href: "/hizmetler/prototip-uretim", label: "Prototip Üretim" },
  { href: "/hizmetler/seri-uretim", label: "Seri Üretim" },
  { href: "/hizmetler/ozel-parca-imalati", label: "Özel Parça" },
  { href: "/istanbul-cnc-torna", label: "İstanbul CNC Torna" },
];

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

const linkClass = "text-sm text-white/75 transition-colors hover:text-white";

export function Footer() {
  const tel = phoneHref(company.phone);

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link href="/" aria-label={`${company.name} ana sayfa`} className="block w-fit">
              <LogoImage sizes="(min-width: 768px) 520px, 85vw" className="w-[min(85vw,520px)]" />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
              {company.city} merkezli CNC torna, CNC freze ve hassas talaşlı imalat. Teklif, teknik resim ve adet
              üzerinden çıkar.
            </p>
          </div>
          <Link
            href="/iletisim#teklif"
            className="group inline-flex min-h-12 w-fit items-center gap-3 bg-accent px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-white hover:text-ink"
          >
            Teklif Al
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-12 grid gap-12 sm:grid-cols-2 xl:grid-cols-4">
          <nav aria-label="Kurumsal">
            <p className="eyebrow text-metal">Kurumsal</p>
            <ul className="mt-5 space-y-3">
              {corporate.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Üretim">
            <p className="eyebrow text-metal">Üretim</p>
            <ul className="mt-5 space-y-3">
              {production.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Sektörler">
            <p className="eyebrow text-metal">Sektörler</p>
            <ul className="mt-5 space-y-3">
              {sectors.map((sector) => (
                <li key={sector.name}>
                  <Link href="/sektorler" className={linkClass}>
                    {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow text-metal">İletişim</p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                {company.city}, {company.country}
              </li>
              {filled(company.address) ? <li>{company.address}</li> : null}
              {tel ? (
                <li>
                  <a href={tel} className="hover:text-white">
                    {company.phone}
                  </a>
                </li>
              ) : null}
              {filled(company.email) ? (
                <li>
                  <a href={`mailto:${company.email}`} className="hover:text-white">
                    {company.email}
                  </a>
                </li>
              ) : null}
              <li>
                <Link href="/iletisim#teklif" className="hover:text-white">
                  Teklif formu
                </Link>
              </li>
              {filled(company.instagram) ? (
                <li>
                  <a href={company.instagram} className="hover:text-white" rel="noreferrer">
                    Instagram
                  </a>
                </li>
              ) : null}
              {filled(company.linkedin) ? (
                <li>
                  <a href={company.linkedin} className="hover:text-white" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs tracking-[0.08em] text-white/50 uppercase md:flex-row md:items-center md:justify-between">
          <p>
            © <CopyrightYear /> {company.shortName}. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
