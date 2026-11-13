"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { NavChild } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function NavDropdown({
  label,
  href,
  active,
  items,
}: {
  label: string;
  href: string;
  active: boolean;
  items: readonly NavChild[];
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  useEffect(() => () => clearClose(), []);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => {
        clearClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <Link
        href={href}
        className={cn(
          "relative inline-flex items-center gap-1.5 py-2 text-[11px] font-bold tracking-[0.08em] whitespace-nowrap uppercase transition-colors xl:text-xs xl:tracking-[0.1em] 2xl:text-[13px]",
          active || open ? "text-white" : "text-white/80 hover:text-white",
        )}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onFocus={() => setOpen(true)}
      >
        {label}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={cn("transition-transform duration-200", open ? "rotate-180" : "rotate-0")}
        />
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-x-0 -bottom-0.5 h-px bg-accent transition-opacity",
            active || open ? "opacity-100" : "opacity-0",
          )}
        />
      </Link>

      <div
        id={menuId}
        role="menu"
        aria-label={label}
        className={cn(
          "absolute top-full left-0 z-[70] w-[min(22rem,70vw)] pt-3 transition-[opacity,transform] duration-200",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <ul className="border border-white/10 bg-ink py-2 shadow-[0_18px_48px_rgba(0,0,0,0.55)]">
          {items.map((child) => (
            <li key={child.href + child.label} role="none">
              <Link
                href={child.href}
                role="menuitem"
                className="block px-5 py-3 transition-colors hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                <span className="block text-xs font-bold tracking-[0.12em] text-white uppercase">
                  {child.label}
                </span>
                {child.description ? (
                  <span className="mt-1 block text-[12px] leading-snug text-white/55">
                    {child.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
