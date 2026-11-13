"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { MediaCredit } from "@/components/brand/MediaCredit";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { company, phoneHref } from "@/data/company";
import { navItems, type NavItem } from "@/data/navigation";
import { cn } from "@/lib/cn";

const HEADER_H = "h-[92px]";
const HEADER_TOP = "top-[92px]";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function itemActive(pathname: string, item: NavItem) {
  if (isActive(pathname, item.href)) return true;
  return item.children?.some((child) => isActive(pathname, child.href)) ?? false;
}

export function Header({ legalName }: { legalName?: string }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const open = menuPath === pathname;
  const tel = phoneHref(company.phone);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuPath(null);
        setMobileOpen(null);
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggleMenu = () => {
    if (open) {
      setMenuPath(null);
      setMobileOpen(null);
      return;
    }
    setMobileOpen(null);
    setMenuPath(pathname);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-[background-color,border-color,box-shadow] duration-300",
          scrolled || open
            ? "border-white/10 bg-ink/95 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-md"
            : "border-white/5 bg-ink/80 backdrop-blur-sm",
        )}
      >
        <div
          className={cn(
            "relative z-[60] mx-auto flex w-full max-w-[1500px] items-center gap-3 overflow-visible px-4 sm:gap-4 sm:px-6 lg:gap-5 lg:px-8 xl:px-10",
            HEADER_H,
          )}
        >
          <div className="flex w-auto shrink-0 items-center">
            <Logo legalName={legalName} />
          </div>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-x-4 overflow-visible lg:flex xl:gap-x-5 2xl:gap-x-7"
            aria-label="Ana menü"
          >
            {navItems.map((item) => {
              const active = itemActive(pathname, item);
              if (item.children?.length) {
                return (
                  <NavDropdown
                    key={item.href + item.label}
                    label={item.label}
                    href={item.href}
                    active={active}
                    items={item.children}
                  />
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative shrink-0 py-2 text-[11px] font-bold tracking-[0.08em] whitespace-nowrap uppercase transition-colors xl:text-xs xl:tracking-[0.1em] 2xl:text-[13px]",
                    active ? "text-white" : "text-white/80 hover:text-white",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-px bg-accent transition-opacity",
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            {tel ? (
              <a
                href={tel}
                className="hidden items-center px-3 text-[12px] font-semibold tracking-[0.06em] whitespace-nowrap text-white transition-colors hover:text-accent xl:inline-flex 2xl:px-4 2xl:text-sm"
              >
                {company.phone}
              </a>
            ) : null}
            <Link
              href={pathname === "/" ? "/#teklif-al" : "/iletisim#teklif"}
              className="inline-flex h-9 items-center bg-accent px-3.5 text-[11px] font-bold tracking-[0.12em] whitespace-nowrap text-white uppercase transition-colors hover:bg-white hover:text-ink sm:h-10 sm:px-5 sm:text-xs sm:tracking-[0.14em]"
            >
              Teklif Al
            </Link>
            <button
              type="button"
              className="grid h-full min-h-[3rem] w-12 place-items-center self-center border border-white/20 text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobil-menu"
              onClick={toggleMenu}
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
            className={cn(
              "fixed inset-0 z-40 flex overflow-y-auto bg-ink text-white lg:hidden",
              HEADER_TOP,
            )}
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex min-h-full w-full flex-col justify-between px-6 py-8" aria-label="Mobil menü">
              <ul className="space-y-1">
                <li className="border-b border-white/10">
                  <Link
                    href="/"
                    className="flex items-baseline justify-between py-4 font-display text-[clamp(1.5rem,6vw,2.2rem)] font-bold leading-none tracking-[-0.04em] uppercase"
                    aria-current={pathname === "/" ? "page" : undefined}
                  >
                    <span>Ana Sayfa</span>
                    <span className="text-xs tracking-[0.2em] text-accent">
                      {pathname === "/" ? "●" : "→"}
                    </span>
                  </Link>
                </li>
                {navItems.map((item, index) => {
                  const active = itemActive(pathname, item);
                  const expanded = mobileOpen === item.label;
                  if (item.children?.length) {
                    return (
                      <motion.li
                        key={item.href + item.label}
                        className="border-b border-white/10"
                        initial={reduce ? false : { opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.04 * (index + 1) }}
                      >
                        <button
                          type="button"
                          className="flex w-full items-baseline justify-between py-4 text-left font-display text-[clamp(1.5rem,6vw,2.2rem)] font-bold leading-none tracking-[-0.04em] uppercase"
                          aria-expanded={expanded}
                          onClick={() => setMobileOpen(expanded ? null : item.label)}
                        >
                          <span className={active ? "text-white" : undefined}>{item.label}</span>
                          <ChevronDown
                            size={18}
                            className={cn(
                              "text-accent transition-transform",
                              expanded ? "rotate-180" : "rotate-0",
                            )}
                          />
                        </button>
                        {expanded ? (
                          <ul className="space-y-1 pb-4">
                            {item.children.map((child) => (
                              <li key={child.href + child.label}>
                                <Link
                                  href={child.href}
                                  className="block border-l border-white/15 py-2.5 pl-4 text-sm tracking-[0.08em] text-white/75 uppercase hover:text-white"
                                  aria-current={isActive(pathname, child.href) ? "page" : undefined}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </motion.li>
                    );
                  }
                  return (
                    <motion.li
                      key={item.href}
                      className="border-b border-white/10"
                      initial={reduce ? false : { opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.04 * (index + 1) }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-baseline justify-between py-4 font-display text-[clamp(1.5rem,6vw,2.2rem)] font-bold leading-none tracking-[-0.04em] uppercase"
                        aria-current={active ? "page" : undefined}
                      >
                        <span>{item.label}</span>
                        <span className="text-xs tracking-[0.2em] text-accent">
                          {active ? "●" : "→"}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                {tel ? (
                  <a
                    href={tel}
                    className="inline-flex min-h-12 items-center justify-center border border-white/20 px-6 text-sm font-bold tracking-[0.14em] uppercase"
                  >
                    {company.phone}
                  </a>
                ) : null}
                <Link
                  href="/iletisim#teklif"
                  className="inline-flex min-h-12 items-center justify-center bg-accent px-6 py-4 text-sm font-bold tracking-[0.14em] uppercase"
                >
                  Teklif Al
                </Link>
                <div className="mt-6 flex justify-center border-t border-white/10 pt-5 pb-2">
                  <MediaCredit />
                </div>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
