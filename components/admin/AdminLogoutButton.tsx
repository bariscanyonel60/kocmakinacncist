"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminLogoutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function logout() {
    setPending(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.replace("/admin/giris");
      router.refresh();
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      type="button"
      onClick={logout}
      disabled={pending}
      className="border border-ink/20 px-3 py-2 text-ink/70 transition-colors hover:border-ink hover:text-ink disabled:opacity-60"
    >
      {pending ? "Çıkılıyor…" : "Çıkış"}
    </button>
  );
}
