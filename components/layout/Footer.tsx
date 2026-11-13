import Link from "next/link";
import { SiteLogo } from "@/components/ui/SiteLogo";
import { company, mailHref, mobileHref, phoneHref, whatsappHref } from "@/data/company";
import { mediaCredit } from "@/data/media-credit";
import { legalLinks } from "@/data/navigation";
import { services } from "@/data/services";

const corporate = [
  { href: "/kurumsal", label: "Hakkımızda" },
  { href: "/makine-parkuru", label: "Makine Parkuru" },
  { href: "/uretim", label: "Üretim" },
  { href: "/sektorler", label: "Sektörler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/blog", label: "Blog" },
  { href: "/istanbul-cnc-torna", label: "CNC Torna İstanbul" },
  { href: "/iletisim", label: "İletişim" },
];

export function Footer() {
  const phone = phoneHref();
  const mobile = mobileHref();
  const email = mailHref();
  const whatsapp = whatsappHref();
  const featured = services.slice(0, 6);

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1.25fr_1fr_1fr_1.1fr] lg:px-12 lg:py-20">
        <div>
          <Link href="/" className="block w-[11rem] sm:w-[14rem]" aria-label="Koç Makina ana sayfa">
            <SiteLogo variant="dark" className="max-h-16 sm:max-h-20" />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-metal">
            İstanbul Başakşehir İkitelli’de CNC torna, CNC işleme ve hassas talaşlı imalat. Teknik çizimden parçaya.
          </p>
          <p className="mt-4 text-sm text-metal">
            <a
              href={mediaCredit.href}
              target="_blank"
              rel="noopener"
              className="tracking-[0.08em] text-white/85 uppercase hover:text-white"
            >
              {mediaCredit.label}
            </a>
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/iletisim"
              className="inline-flex min-h-11 items-center justify-center bg-accent px-5 text-[11px] font-semibold tracking-[0.18em] text-white uppercase hover:bg-[#c4191e]"
            >
              Teklif Al
            </Link>
            {phone ? (
              <a
                href={phone}
                className="inline-flex min-h-11 items-center justify-center border border-white/25 px-5 text-[11px] font-semibold tracking-[0.18em] text-white uppercase hover:border-accent"
              >
                Ara
              </a>
            ) : null}
            {whatsapp ? (
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center border border-white/25 px-5 text-[11px] font-semibold tracking-[0.18em] text-white uppercase hover:border-accent"
              >
                WhatsApp
              </a>
            ) : null}
          </div>
        </div>

        <div>
          <h2 className="text-[11px] tracking-[0.24em] text-accent uppercase">Hizmetler</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {featured.map((service) => (
              <li key={service.slug}>
                <Link href={`/hizmetler/${service.slug}`} className="text-white/85 hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/hizmetler" className="text-white/85 hover:text-white">
                Tüm hizmetler
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] tracking-[0.24em] text-accent uppercase">Kurumsal</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {corporate.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] tracking-[0.24em] text-accent uppercase">İletişim</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/85">
            {company.contactName ? (
              <li>
                <span className="block text-white">{company.contactName}</span>
                {company.contactTitle ? <span className="block text-metal">{company.contactTitle}</span> : null}
              </li>
            ) : null}
            {company.address ? <li>{company.address}</li> : <li>{company.city}</li>}
            {phone ? (
              <li>
                <a href={phone} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
            ) : null}
            {mobile ? (
              <li>
                <a href={mobile} className="hover:text-white">
                  {company.mobile}
                </a>
              </li>
            ) : null}
            {email ? (
              <li>
                <a href={email} className="hover:text-white">
                  {company.email}
                </a>
              </li>
            ) : null}
          </ul>
          {(company.instagram || company.linkedin) && (
            <ul className="mt-6 space-y-3 text-sm">
              {company.instagram ? (
                <li>
                  <a href={company.instagram} className="hover:text-white" rel="noreferrer">
                    Instagram
                  </a>
                </li>
              ) : null}
              {company.linkedin ? (
                <li>
                  <a href={company.linkedin} className="hover:text-white" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
              ) : null}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-5 text-[11px] tracking-[0.14em] text-metal uppercase md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
          <p>© 2026 KOC Makina CNC</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <a
                href={mediaCredit.href}
                target="_blank"
                rel="noopener"
                className="hover:text-white"
              >
                {mediaCredit.label}
              </a>
            </li>
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
