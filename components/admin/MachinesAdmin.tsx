"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AdminImageField } from "@/components/admin/AdminImageField";
import type { Machine } from "@/data/machines";
import { admin } from "@/lib/admin-ui";
import { cn } from "@/lib/cn";

function emptyMachine(): Machine {
  return {
    id: `makine-${Date.now()}`,
    name: "",
    type: "",
    brand: "",
    model: "",
    capacity: "",
    maxDiameter: "",
    maxLength: "",
    axis: "",
    control: "",
    rpm: "",
    tolerance: "",
    summary: "",
    image: "/images/cnc-torna-taret.jpg",
    imageAlt: "",
  };
}

export function MachinesAdmin({ initialItems }: { initialItems: Machine[] }) {
  const router = useRouter();
  const [items, setItems] = useState(initialItems);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function updateItem(id: string, patch: Partial<Machine>) {
    setItems((current) => current.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  }

  function addItem() {
    setItems((current) => [...current, emptyMachine()]);
  }

  function removeItem(id: string) {
    if (!window.confirm("Bu makine kaydı silinsin mi?")) return;
    setItems((current) => current.filter((item) => item.id !== id));
  }

  async function onSave() {
    setPending(true);
    setError(null);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/machines", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        items?: Machine[];
        message?: string;
        error?: string;
      };
      if (!response.ok || !payload.ok) {
        setError(payload.message ?? payload.error ?? "Kayıt başarısız.");
        return;
      }
      if (payload.items) setItems(payload.items);
      setMessage("Makine parkuru kaydedildi. Site önbelleği yenilendi.");
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

      <div className={admin.cardMuted}>
        Kapasite, çap, boy, rpm ve tolerans alanlarına yalnızca doğrulanmış değer yazın. Bilinmeyen alanları boş bırakın.
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={addItem} className={admin.btnSecondary}>
          Makine ekle
        </button>
        <button type="button" disabled={pending} onClick={onSave} className={admin.btnPrimary}>
          {pending ? "Kaydediliyor…" : "Tümünü kaydet"}
        </button>
      </div>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className={admin.card}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-4">
              <div>
                <p className={admin.eyebrow}>{item.id}</p>
                <h2 className="font-display text-2xl text-ink">{item.name || "Yeni makine"}</h2>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} className={admin.btnDanger}>
                Sil
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Kimlik (id)" value={item.id} onChange={(value) => updateItem(item.id, { id: value })} />
              <Field label="Ad" value={item.name} onChange={(value) => updateItem(item.id, { name: value })} />
              <Field label="Tür" value={item.type} onChange={(value) => updateItem(item.id, { type: value })} />
              <Field
                label="Özet"
                value={item.summary}
                onChange={(value) => updateItem(item.id, { summary: value })}
                multiline
                className="sm:col-span-2"
              />
              <Field label="Marka" value={item.brand} onChange={(value) => updateItem(item.id, { brand: value })} />
              <Field label="Model" value={item.model} onChange={(value) => updateItem(item.id, { model: value })} />
              <Field
                label="Kapasite"
                value={item.capacity}
                onChange={(value) => updateItem(item.id, { capacity: value })}
              />
              <Field
                label="Maks. çap"
                value={item.maxDiameter}
                onChange={(value) => updateItem(item.id, { maxDiameter: value })}
              />
              <Field
                label="Maks. uzunluk"
                value={item.maxLength}
                onChange={(value) => updateItem(item.id, { maxLength: value })}
              />
              <Field label="Eksen" value={item.axis} onChange={(value) => updateItem(item.id, { axis: value })} />
              <Field
                label="Kontrol"
                value={item.control}
                onChange={(value) => updateItem(item.id, { control: value })}
              />
              <Field label="Devir (rpm)" value={item.rpm} onChange={(value) => updateItem(item.id, { rpm: value })} />
              <Field
                label="Tolerans"
                value={item.tolerance}
                onChange={(value) => updateItem(item.id, { tolerance: value })}
              />
              <AdminImageField
                label="Makine görseli"
                value={item.image}
                onChange={(value) => updateItem(item.id, { image: value })}
              />
              <Field
                label="Görsel alt metni"
                value={item.imageAlt}
                onChange={(value) => updateItem(item.id, { imageAlt: value })}
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
  className,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  className?: string;
}) {
  return (
    <label className={cn(admin.labelXs, className)}>
      {label}
      {multiline ? (
        <textarea value={value} onChange={(event) => onChange(event.target.value)} rows={3} className={admin.input} />
      ) : (
        <input value={value} onChange={(event) => onChange(event.target.value)} className={admin.input} />
      )}
    </label>
  );
}
