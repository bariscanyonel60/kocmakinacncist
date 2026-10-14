import Link from "next/link";
import { company, filled, phoneHref } from "@/data/company";
import { legalLinks } from "@/data/navigation";
import { services } from "@/data/services";

const corporate = [
  { href: "/kurumsal", label: "Hakkımızda" },
  { href: "/uretim", label: "Üretim" },
  { href: "/makine-parkuru", label: "Makine Parkuru" },
  { href: "/sektorler", label: "Sektörler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/istanbul-cnc-torna", label: "İstanbul CNC Torna" },
  { href: "/iletisim", label: "İletişim" },
];

export function Footer() {
  const tel = phoneHref(company.phone);

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-[clamp(4.2rem,14vw,9rem)] leading-[0.8] tracking-[-0.06em] uppercase">
              KOC
              <span className="block">Makina</span>
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
              {company.city} merkezli CNC torna, CNC işleme ve talaşlı imalat. Teklif, teknik resim ve adet üzerinden çıkar.
            </p>
          </div>
          <Link
            href="/iletisim#teklif"
            className="inline-flex min-h-12 w-fit items-center bg-accent px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-white hover:text-ink"
          >
            Teklif Al →
          </Link>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="eyebrow text-metal">Hizmetler</p>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/hizmetler/${service.slug}`} className="text-sm text-white/80 hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-metal">Kurumsal</p>
            <ul className="mt-5 space-y-3">
              {corporate.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-metal">İletişim</p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>{company.city}</li>
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
                  İletişim formu
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-metal">Yasal</p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
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
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs tracking-[0.08em] text-white/50 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.shortName}</p>
          <p>{company.city}</p>
        </div>
      </div>
    </footer>
  );
}
