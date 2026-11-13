"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const links: { href: string; label: string; exact?: boolean }[] = [
  { href: "/admin", label: "Genel bakış", exact: true },
  { href: "/admin/galeri", label: "Galeri" },
  { href: "/admin/hizmetler", label: "Hizmetlerimiz" },
  { href: "/admin/makine-parkuru", label: "Makine parkuru" },
  { href: "/admin/icerik", label: "İçerik" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-ink/10 bg-white md:min-h-[calc(100vh-4.5rem)] md:w-56 md:shrink-0 md:border-r md:border-b-0">
      <nav className="flex gap-1 overflow-x-auto p-3 md:flex-col md:gap-1 md:p-4" aria-label="Yönetim menüsü">
        {links.map((link) => {
          const active = link.exact
            ? pathname === link.href
            : pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap px-3 py-2 text-sm transition-colors",
                active ? "bg-ink text-white" : "text-ink/65 hover:bg-ink/[0.04] hover:text-ink",
              )}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
