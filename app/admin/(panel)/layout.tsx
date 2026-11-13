import Link from "next/link";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { LogoImage } from "@/components/brand/Logo";

export default function AdminPanelLayout({ children }: LayoutProps<"/admin">) {
  return (
    <div className="min-h-full">
      <header className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/admin" className="flex items-center gap-3">
            <LogoImage className="h-12 w-auto" />
            <div>
              <p className="text-xs tracking-[0.18em] text-ink/45 uppercase">Yönetim</p>
              <p className="font-display text-xl text-ink">
                Koç <span className="text-brand-blue">Makina</span> panel
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <Link href="/" className="text-ink/60 transition-colors hover:text-ink">
              Siteye dön
            </Link>
            <AdminLogoutButton />
          </div>
        </div>
      </header>
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row">
        <AdminSidebar />
        <div className="min-w-0 flex-1 px-4 py-8 sm:px-6">{children}</div>
      </div>
    </div>
  );
}
