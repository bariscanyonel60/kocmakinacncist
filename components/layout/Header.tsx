"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuPath(null);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-colors duration-300",
          scrolled || open
            ? "border-white/10 bg-ink/80 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10">
          <Logo />
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Ana menü">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[12px] font-semibold tracking-[0.16em] uppercase transition-colors",
                  isActive(pathname, item.href) ? "text-white" : "text-white/70 hover:text-white",
                )}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/iletisim#teklif"
              className="inline-flex bg-accent px-3 py-3 text-[11px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-white hover:text-ink sm:px-5 sm:text-[12px] sm:tracking-[0.18em]"
            >
              <span className="sm:hidden">Teklif</span>
              <span className="hidden sm:inline">Teklif Al</span>
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center border border-white/20 text-white xl:hidden"
              aria-expanded={open}
              aria-controls="mobil-menu"
              onClick={() => setMenuPath(open ? null : pathname)}
            >
              <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobil-menu"
        className={cn(
          "fixed inset-0 top-[4.5rem] z-40 bg-ink text-white xl:hidden",
          open ? "flex" : "hidden",
        )}
      >
        <nav className="flex h-full w-full flex-col justify-between px-6 py-8" aria-label="Mobil menü">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-white/10">
                <Link
                  href={item.href}
                  className="flex items-baseline justify-between py-4 font-display text-[clamp(1.7rem,7vw,2.4rem)] uppercase leading-none tracking-[-0.04em]"
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  <span className="text-xs tracking-[0.2em] text-accent">
                    {isActive(pathname, item.href) ? "●" : "→"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/iletisim"
            className="mt-8 inline-flex min-h-12 items-center justify-center bg-accent px-6 py-4 text-sm font-semibold tracking-[0.18em] uppercase"
          >
            Teklif Al
          </Link>
        </nav>
      </div>
    </header>
  );
}
