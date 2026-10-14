"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  const reduce = useReducedMotion();
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
          "border-b transition-[background-color,border-color,box-shadow] duration-300",
          scrolled || open
            ? "border-white/10 bg-ink/85 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[4.75rem] max-w-[1440px] items-center justify-between gap-3 px-4 sm:gap-6 sm:px-5 md:px-10">
          <Logo />
          <nav className="hidden items-center gap-4 xl:flex 2xl:gap-7" aria-label="Ana menü">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-2 text-[13px] font-bold tracking-[0.08em] 2xl:tracking-[0.12em] whitespace-nowrap uppercase transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300",
                    active ? "text-white after:scale-x-100" : "text-white/70 after:scale-x-0 hover:text-white hover:after:scale-x-100",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/iletisim#teklif"
              className="group inline-flex items-center gap-2 bg-accent px-3 py-3 text-[11px] font-semibold tracking-[0.16em] whitespace-nowrap text-white uppercase transition-colors hover:bg-white hover:text-ink sm:px-5 sm:text-[13px] sm:font-bold sm:tracking-[0.16em]"
            >
              Teklif Al
              <span aria-hidden="true" className="hidden transition-transform group-hover:translate-x-1 sm:inline">
                →
              </span>
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

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobil-menu"
            className="fixed inset-0 top-[4.75rem] z-40 flex overflow-y-auto bg-ink text-white xl:hidden"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex min-h-full w-full flex-col justify-between px-6 py-8" aria-label="Mobil menü">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    className="border-b border-white/10"
                    initial={reduce ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.04 * index }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-baseline justify-between py-4 font-display text-[clamp(1.6rem,7vw,2.4rem)] leading-none tracking-[-0.04em] uppercase"
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs tracking-[0.2em] text-accent">
                        {isActive(pathname, item.href) ? "●" : "→"}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/iletisim#teklif"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-accent px-6 py-4 text-sm font-semibold tracking-[0.18em] uppercase"
              >
                Teklif Al <span aria-hidden="true">→</span>
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
