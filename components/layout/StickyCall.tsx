"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, phoneHref, whatsappHref } from "@/data/company";
import { cn } from "@/lib/cn";

const hiddenOn = new Set(["/iletisim", "/tesekkurler"]);

export function StickyCall() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const tel = phoneHref(company.phone);
  const whatsapp = whatsappHref();
  const mobileColumns = 1 + Number(Boolean(tel)) + Number(Boolean(whatsapp));

  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.documentElement.scrollHeight - 640;
      setVisible(window.scrollY > window.innerHeight * 0.7 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hideDesktop = hiddenOn.has(pathname) || !visible;

  return (
    <>
      <div className="h-14 md:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink text-white md:hidden">
        <div
          className={cn(
            "grid",
            mobileColumns === 3 ? "grid-cols-3" : mobileColumns === 2 ? "grid-cols-2" : "grid-cols-1",
          )}
        >
          {tel ? (
            <a href={tel} className="inline-flex min-h-14 items-center justify-center px-3 text-xs font-semibold tracking-[0.16em] uppercase">
              Ara
            </a>
          ) : null}
          {whatsapp ? (
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center border-l border-white/10 px-3 text-xs font-semibold tracking-[0.16em] uppercase"
            >
              WhatsApp
            </a>
          ) : null}
          <Link
            href="/iletisim#teklif"
            className="inline-flex min-h-14 items-center justify-center gap-2 bg-accent px-3 text-xs font-semibold tracking-[0.16em] uppercase"
          >
            Teklif Al <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "fixed right-6 bottom-6 z-40 hidden flex-col items-end gap-2 transition-[opacity,transform] duration-300 md:flex",
          hideDesktop ? "pointer-events-none translate-y-3 opacity-0" : "translate-y-0 opacity-100",
        )}
        aria-hidden={hideDesktop || undefined}
        inert={hideDesktop}
      >
        {whatsapp ? (
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center bg-[#128C7E] px-4 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-lg"
          >
            WhatsApp
          </a>
        ) : null}
        {tel ? (
          <a
            href={tel}
            className="inline-flex min-h-11 items-center border border-white/15 bg-ink px-4 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-lg hover:border-accent"
          >
            Ara · {company.phone}
          </a>
        ) : null}
        <Link
          href="/iletisim#teklif"
          className="group inline-flex min-h-12 items-center gap-3 bg-accent px-5 text-xs font-semibold tracking-[0.18em] text-white uppercase shadow-[0_12px_32px_rgba(227,30,36,0.35)] transition-colors hover:bg-ink"
        >
          Teklif Al
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </>
  );
}
