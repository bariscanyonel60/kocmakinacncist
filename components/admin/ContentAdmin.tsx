"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { admin } from "@/lib/admin-ui";
import type { SiteContent } from "@/lib/site-content";

export function ContentAdmin({ initial }: { initial: SiteContent }) {
  const router = useRouter();
  const [legalName, setLegalName] = useState(initial.legalName);
  const [about, setAbout] = useState(initial.about);
  const [footerBlurb, setFooterBlurb] = useState(initial.footerBlurb);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ legalName, about, footerBlurb }),
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string; message?: string };
      if (!response.ok || !payload.ok) {
        setError(payload.message ?? payload.error ?? "Kayıt başarısız.");
        return;
      }
      setMessage("İçerik kaydedildi.");
      router.refresh();
    } catch {
      setError("Bağlantı hatası.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className={`max-w-2xl space-y-5 ${admin.card}`}>
      {error ? <p className={admin.alertError}>{error}</p> : null}
      {message ? <p className={admin.alertOk}>{message}</p> : null}

      <label className={admin.label}>
        Ticari unvan
        <input
          value={legalName}
          onChange={(event) => setLegalName(event.target.value)}
          required
          className={admin.inputMt2}
        />
      </label>

      <label className={admin.label}>
        Hakkında / kısa açıklama
        <textarea
          value={about}
          onChange={(event) => setAbout(event.target.value)}
          rows={4}
          className={admin.inputMt2}
        />
      </label>

      <label className={admin.label}>
        Footer metni
        <textarea
          value={footerBlurb}
          onChange={(event) => setFooterBlurb(event.target.value)}
          rows={3}
          className={admin.inputMt2}
        />
      </label>

      <button type="submit" disabled={pending} className={admin.btnPrimary}>
        {pending ? "Kaydediliyor…" : "Kaydet"}
      </button>
    </form>
  );
}
