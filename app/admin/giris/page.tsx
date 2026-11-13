import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { adminAuthConfigured } from "@/lib/admin-auth";

export const instant = false;

export default function AdminLoginPage() {
  const configured = adminAuthConfigured();

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-16">
      <div className="w-full max-w-md border border-ink/10 bg-white p-8 shadow-sm">
        <p className="text-xs tracking-[0.2em] text-ink/45 uppercase">Koç Makina</p>
        <h1 className="mt-3 font-display text-3xl text-ink">Yönetim girişi</h1>
        <p className="mt-2 text-sm text-ink/60">Galeri, hizmet ve makine içeriklerini yönetmek için şifrenizi girin.</p>
        {configured ? (
          <AdminLoginForm />
        ) : (
          <p className="mt-8 border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-ink">
            ADMIN_PASSWORD ve ADMIN_SESSION_SECRET ortam değişkenleri tanımlı değil.
          </p>
        )}
      </div>
    </div>
  );
}
