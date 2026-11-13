"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AdminImageField } from "@/components/admin/AdminImageField";
import { admin } from "@/lib/admin-ui";
import type { ServiceAdminItem } from "@/lib/services-content";
import { cn } from "@/lib/cn";

export function ServicesAdmin({ initialItems }: { initialItems: ServiceAdminItem[] }) {
  const router = useRouter();
  const [items, setItems] = useState(initialItems);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function updateItem(slug: string, patch: Partial<ServiceAdminItem>) {
    setItems((current) => current.map((item) => (item.slug === slug ? { ...item, ...patch } : item)));
  }

  async function onSave() {
    setPending(true);
    setError(null);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/services", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        items?: ServiceAdminItem[];
        message?: string;
        error?: string;
      };
      if (!response.ok || !payload.ok) {
        setError(payload.message ?? payload.error ?? "Kayıt başarısız.");
        return;
      }
      if (payload.items) setItems(payload.items);
      setMessage("Hizmetler kaydedildi. Site önbelleği yenilendi.");
      router.refresh();
    } catch {
      setError("Bağlantı hatası.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="space-y-8">
      {(error || message) && <p className={error ? admin.alertError : admin.alertOk}>{error ?? message}</p>}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink/60">
          Kart ve SEO alanlarını düzenleyin. Detay paragrafları / SSS kod tarafında kalır.
        </p>
        <button type="button" disabled={pending} onClick={onSave} className={admin.btnPrimary}>
          {pending ? "Kaydediliyor…" : "Tümünü kaydet"}
        </button>
      </div>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.slug} className={admin.card}>
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-ink/10 pb-4">
              <div>
                <p className={admin.eyebrow}>{item.slug}</p>
                <h2 className="font-display text-2xl text-ink">{item.title || "Hizmet"}</h2>
              </div>
              <label className="flex items-center gap-2 text-sm text-ink/70">
                <input
                  type="checkbox"
                  checked={item.published}
                  onChange={(event) => updateItem(item.slug, { published: event.target.checked })}
                />
                Yayınlı
              </label>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Numara" value={item.number} onChange={(value) => updateItem(item.slug, { number: value })} />
              <Field
                label="Sıra"
                type="number"
                value={String(item.sortOrder)}
                onChange={(value) => updateItem(item.slug, { sortOrder: Number(value) || 0 })}
              />
              <Field
                label="Başlık"
                value={item.title}
                onChange={(value) => updateItem(item.slug, { title: value })}
                className="sm:col-span-2"
              />
              <Field
                label="Kısa özet"
                value={item.short}
                onChange={(value) => updateItem(item.slug, { short: value })}
                multiline
                className="sm:col-span-2"
              />
              <AdminImageField
                label="Kart / sayfa görseli"
                value={item.image}
                onChange={(value) => updateItem(item.slug, { image: value })}
              />
              <Field
                label="Görsel alt metni"
                value={item.imageAlt}
                onChange={(value) => updateItem(item.slug, { imageAlt: value })}
                className="sm:col-span-2"
              />
              <Field
                label="SEO başlık"
                value={item.seoTitle}
                onChange={(value) => updateItem(item.slug, { seoTitle: value })}
              />
              <Field label="H1" value={item.h1} onChange={(value) => updateItem(item.slug, { h1: value })} />
              <Field
                label="SEO açıklama"
                value={item.seoDescription}
                onChange={(value) => updateItem(item.slug, { seoDescription: value })}
                multiline
                className="sm:col-span-2"
              />
              <Field
                label="Giriş metni"
                value={item.intro}
                onChange={(value) => updateItem(item.slug, { intro: value })}
                multiline
                className="sm:col-span-2"
              />
            </div>
          </li>
        ))}
      </ul>

      <button type="button" disabled={pending} onClick={onSave} className={admin.btnPrimary}>
        {pending ? "Kaydediliyor…" : "Tümünü kaydet"}
      </button>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  multiline,
  type = "text",
  className,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  type?: "text" | "number";
  className?: string;
}) {
  return (
    <label className={cn(admin.labelXs, className)}>
      {label}
      {multiline ? (
        <textarea value={value} onChange={(event) => onChange(event.target.value)} rows={3} className={admin.input} />
      ) : (
        <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className={admin.input} />
      )}
    </label>
  );
}
