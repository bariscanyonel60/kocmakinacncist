"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, phoneHref } from "@/data/company";
import { mediaCredit } from "@/data/media-credit";
import { navigation } from "@/data/navigation";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const phone = phoneHref();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const main = document.getElementById("icerik");
    const footer = document.querySelector("footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/85 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-5 md:h-[4.5rem] md:px-8 lg:px-12">
        <Link href="/" onClick={() => setOpen(false)} className="relative z-50 flex items-baseline gap-2.5" aria-label="KOC Makina ana sayfa">
          <span className="font-display text-[1.35rem] leading-none font-medium tracking-[0.16em] text-white">
            KOC
          </span>
          <span className="text-[10px] tracking-[0.28em] text-metal">MAKİNA</span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Ana menü">
          {navigation.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`text-[11px] tracking-[0.16em] uppercase transition-colors ${
                  current ? "text-white" : "text-metal hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-50 flex items-center gap-2 sm:gap-3">
          {phone ? (
            <a
              href={phone}
              className="hidden min-h-11 items-center px-3 text-[11px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:text-accent lg:inline-flex"
            >
              {company.phone}
            </a>
          ) : null}
          <Link
            href="/iletisim"
            className="hidden min-h-11 items-center bg-accent px-5 text-[11px] font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-[#c4191e] sm:inline-flex"
          >
            Teklif Al
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-white xl:hidden"
            aria-expanded={open}
            aria-controls="mobil-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open ? (
      <div id="mobil-menu" className="fixed inset-0 z-40 bg-ink xl:hidden">
        <nav aria-label="Mobil menü" className="flex h-full flex-col px-5 pt-24 pb-8 md:px-8">
          <ul className="flex flex-1 flex-col justify-center">
            {navigation.map((item, index) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={current ? "page" : undefined}
                    className="flex items-baseline gap-4 py-3.5"
                  >
                    <span className="w-8 font-display text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-[clamp(1.7rem,7vw,2.6rem)] leading-none tracking-[-0.03em] uppercase ${
                        current ? "text-white" : "text-white/80"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 grid gap-3">
            <Link
              href="/iletisim"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-12 items-center justify-center bg-accent text-[12px] font-semibold tracking-[0.2em] text-white uppercase"
            >
              Teklif Al
            </Link>
            {phone ? (
              <a
                href={phone}
                className="inline-flex min-h-12 items-center justify-center border border-white/25 text-[12px] font-semibold tracking-[0.2em] text-white uppercase"
              >
                Ara · {company.phone}
              </a>
            ) : null}
            <a
              href={mediaCredit.href}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-12 items-center justify-center border border-white/15 text-[11px] font-semibold tracking-[0.18em] text-metal uppercase hover:border-white/35 hover:text-white"
            >
              {mediaCredit.label}
            </a>
          </div>
          <p className="mt-4 text-[11px] tracking-[0.28em] text-metal uppercase">Başakşehir · İstanbul · CNC</p>
        </nav>
      </div>
      ) : null}
    </header>
  );
}
