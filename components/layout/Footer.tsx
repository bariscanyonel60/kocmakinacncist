import Link from "next/link";
import { cacheLife } from "next/cache";
import { LogoImage } from "@/components/brand/Logo";
import { MediaCredit } from "@/components/brand/MediaCredit";
import { company, filled, phoneHref, whatsappHref } from "@/data/company";
import { legalLinks } from "@/data/navigation";
import { sectors } from "@/data/sectors";

const corporate = [
  { href: "/kurumsal", label: "Hakkımızda" },
  { href: "/kalite", label: "Kalite" },
  { href: "/makine-parkuru", label: "Makine Parkuru" },
  { href: "/galeri", label: "Projeler & Galeri" },
  { href: "/uretim", label: "Üretim Süreci" },
  { href: "/sektorler", label: "Sektörler" },
  { href: "/istanbul-cnc-torna", label: "İstanbul CNC Torna" },
  { href: "/makaleler", label: "Makaleler" },
];

const production = [
  { href: "/hizmetler", label: "Tüm hizmetler" },
  { href: "/hizmetler/cnc-torna", label: "CNC Torna" },
  { href: "/hizmetler/cnc-isleme", label: "CNC Freze" },
  { href: "/hizmetler/talasli-imalat", label: "Talaşlı İmalat" },
  { href: "/hizmetler/hassas-parca-uretimi", label: "Hassas İşleme" },
  { href: "/hizmetler/prototip-uretim", label: "Prototip Üretim" },
  { href: "/hizmetler/seri-uretim", label: "Seri Üretim" },
  { href: "/hizmetler/ozel-parca-imalati", label: "Özel Parça" },
];

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

const linkClass = "text-base font-medium text-white/80 transition-colors hover:text-white";

export function Footer({
  blurb,
  legalName = company.legalName,
}: {
  blurb?: string;
  legalName?: string;
}) {
  const tel = phoneHref(company.phone);
  const mobile = phoneHref(company.phoneMobile);
  const whatsapp = whatsappHref();

  return (
    <footer className="bg-ink text-white">
      <div className="border-b border-white/10 bg-accent">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p className="min-w-0 text-base font-semibold tracking-[0.02em]">
            CNC torna ve freze teklifi için çiziminizi gönderin veya arayın.
          </p>
          <div className="flex max-w-full flex-wrap gap-2">
            {tel ? (
              <a
                href={tel}
                className="inline-flex min-h-11 items-center bg-ink px-4 text-sm font-bold tracking-[0.12em] uppercase"
              >
                <span className="sm:hidden">Ara</span>
                <span className="hidden sm:inline">Ara · {company.phone}</span>
              </a>
            ) : null}
            {whatsapp ? (
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center bg-[#075E54] px-4 text-sm font-bold tracking-[0.12em] uppercase"
              >
                WhatsApp
              </a>
            ) : null}
            <Link
              href="/iletisim#teklif"
              className="inline-flex min-h-11 items-center bg-white px-4 text-sm font-bold tracking-[0.12em] text-ink uppercase"
            >
              Teklif formu →
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link href="/" aria-label={`${company.name} ana sayfa`} className="block w-fit">
              <LogoImage className="h-32 w-auto bg-transparent sm:h-36" />
            </Link>
            {legalName ? (
              <p className="sr-only">{legalName}</p>
            ) : null}
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
              {blurb ??
                `${company.city} Başakşehir İkitelli'de CNC torna, CNC işleme ve hassas talaşlı imalat. Teknik çizimden parçaya.`}
            </p>
            {company.tags.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {company.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-white/15 px-3 py-1.5 text-xs tracking-[0.1em] text-white/70 uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
            {filled(company.parkSummary) ? (
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/55">{company.parkSummary}</p>
            ) : null}
          </div>
          <Link
            href="/iletisim#teklif"
            className="group inline-flex min-h-12 w-fit items-center gap-3 bg-accent px-6 py-4 text-sm font-bold tracking-[0.14em] uppercase transition-colors hover:bg-white hover:text-ink"
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
            <ul className="mt-5 space-y-3 text-base text-white/80">
              {filled(company.founderName) ? (
                <li>
                  <span className="block font-semibold text-white">{company.founderName}</span>
                  {filled(company.founderTitle) ? (
                    <span className="text-sm text-white/55">{company.founderTitle}</span>
                  ) : null}
                </li>
              ) : null}
              {filled(company.address) ? <li>{company.address}</li> : null}
              {tel ? (
                <li>
                  <a href={tel} className="hover:text-white">
                    {company.phone}
                  </a>
                </li>
              ) : null}
              {mobile ? (
                <li>
                  <a href={mobile} className="hover:text-white">
                    {company.phoneMobile}
                  </a>
                </li>
              ) : null}
              {whatsapp ? (
                <li>
                  <a href={whatsapp} target="_blank" rel="noreferrer" className="hover:text-white">
                    WhatsApp
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
              <li>
                <Link href="/gizlilik-politikasi" className="hover:text-white">
                  Gizlilik politikası
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

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm tracking-[0.06em] text-white/55 uppercase md:flex-row md:items-center md:justify-between">
          <p>
            © <CopyrightYear /> {company.name}
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

        <div className="mt-8 flex justify-center border-t border-white/10 pt-6 pb-1">
          <MediaCredit />
        </div>
      </div>
    </footer>
  );
}
