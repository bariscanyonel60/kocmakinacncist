"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { galleryCategories, type GalleryCategory } from "@/data/gallery";
import type { AdminMediaItem } from "@/lib/admin-media";
import { admin } from "@/lib/admin-ui";
import { cn } from "@/lib/cn";

type GalleryMediaCategory = Exclude<GalleryCategory, "tumu">;

const categories = galleryCategories.filter(
  (category): category is (typeof galleryCategories)[number] & { id: GalleryMediaCategory } =>
    category.id !== "tumu",
);

type Props = {
  initialItems: AdminMediaItem[];
  loadError?: string | null;
};

export function GalleryAdmin({ initialItems, loadError }: Props) {
  const router = useRouter();
  const [items, setItems] = useState(initialItems);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(loadError ?? null);
  const [busyId, setBusyId] = useState<number | "new" | null>(null);

  const [title, setTitle] = useState("");
  const [alt, setAlt] = useState("");
  const [category, setCategory] = useState<GalleryMediaCategory>(categories[0]?.id ?? "cnc-torna");
  const [sortOrder, setSortOrder] = useState(0);
  const [published, setPublished] = useState(true);
  const [file, setFile] = useState<File | null>(null);

  async function refreshList() {
    const response = await fetch("/api/admin/media");
    const payload = (await response.json()) as { ok?: boolean; items?: AdminMediaItem[]; message?: string };
    if (response.ok && payload.items) {
      setItems(payload.items);
      setError(null);
    }
    router.refresh();
  }

  async function onCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!file) {
      setError("Bir görsel seçin.");
      return;
    }
    setBusyId("new");
    setError(null);
    setMessage(null);
    const form = new FormData();
    form.set("file", file);
    form.set("title", title);
    form.set("alt", alt);
    form.set("category", category);
    form.set("sortOrder", String(sortOrder));
    form.set("published", published ? "true" : "false");
    try {
      const response = await fetch("/api/admin/media", { method: "POST", body: form });
      const payload = (await response.json()) as { ok?: boolean; message?: string; error?: string };
      if (!response.ok || !payload.ok) {
        setError(payload.message ?? payload.error ?? "Yükleme başarısız.");
        return;
      }
      setTitle("");
      setAlt("");
      setSortOrder(0);
      setPublished(true);
      setFile(null);
      setMessage("Görsel eklendi.");
      await refreshList();
    } catch {
      setError("Yükleme sırasında bağlantı hatası.");
    } finally {
      setBusyId(null);
    }
  }

  async function saveItem(item: AdminMediaItem, patch: Partial<AdminMediaItem>) {
    setBusyId(item.id);
    setError(null);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/media", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: item.id,
          publicId: item.publicId,
          title: patch.title ?? item.title,
          alt: patch.alt ?? item.alt,
          category: patch.category ?? item.category,
          sortOrder: patch.sortOrder ?? item.sortOrder,
          published: patch.published ?? item.published,
        }),
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string; message?: string };
      if (!response.ok || !payload.ok) {
        setError(payload.message ?? payload.error ?? "Güncelleme başarısız.");
        return;
      }
      setItems((current) =>
        current
          .map((row) => (row.id === item.id ? { ...row, ...patch } : row))
          .sort((a, b) => a.sortOrder - b.sortOrder || a.id - b.id),
      );
      setMessage("Kaydedildi.");
      router.refresh();
    } catch {
      setError("Güncelleme sırasında bağlantı hatası.");
    } finally {
      setBusyId(null);
    }
  }

  async function removeItem(item: AdminMediaItem) {
    if (!window.confirm(`“${item.title || item.publicId}” silinsin mi?`)) return;
    setBusyId(item.id);
    setError(null);
    setMessage(null);
    try {
      const response = await fetch(
        `/api/admin/media?id=${item.id}&publicId=${encodeURIComponent(item.publicId)}`,
        { method: "DELETE" },
      );
      const payload = (await response.json()) as { ok?: boolean; error?: string; message?: string };
      if (!response.ok || !payload.ok) {
        setError(payload.message ?? payload.error ?? "Silme başarısız.");
        return;
      }
      setItems((current) => current.filter((row) => row.id !== item.id));
      setMessage("Silindi.");
      router.refresh();
    } catch {
      setError("Silme sırasında bağlantı hatası.");
    } finally {
      setBusyId(null);
    }
  }

  async function replaceImage(item: AdminMediaItem, file: File, meta: Partial<AdminMediaItem>) {
    setBusyId(item.id);
    setError(null);
    setMessage(null);
    const form = new FormData();
    form.set("file", file);
    form.set("publicId", item.publicId);
    form.set("title", meta.title ?? item.title);
    form.set("alt", meta.alt ?? item.alt);
    form.set("category", meta.category ?? item.category);
    form.set("sortOrder", String(meta.sortOrder ?? item.sortOrder));
    form.set("published", (meta.published ?? item.published) ? "true" : "false");
    try {
      const response = await fetch("/api/admin/media", { method: "PATCH", body: form });
      const payload = (await response.json()) as { ok?: boolean; error?: string; message?: string };
      if (!response.ok || !payload.ok) {
        setError(payload.message ?? payload.error ?? "Görsel değiştirilemedi.");
        return;
      }
      setMessage("Görsel güncellendi.");
      await refreshList();
    } catch {
      setError("Görsel değiştirilirken bağlantı hatası.");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="space-y-10">
      {(error || message) && <p className={error ? admin.alertError : admin.alertOk}>{error ?? message}</p>}

      <section className={admin.card}>
        <h2 className={admin.sectionTitle}>Yeni görsel</h2>
        <p className="mt-1 text-sm text-ink/60">JPG, PNG veya WebP — en fazla 10 MB. Başlık ve açıklama zorunlu değildir.</p>
        <form onSubmit={onCreate} className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className={cn(admin.label, "sm:col-span-2")}>
            Dosya
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              required
              onChange={(event) => setFile(event.target.files?.[0] ?? null)}
              className="mt-2 block w-full text-sm text-ink file:mr-3 file:border-0 file:bg-accent file:px-3 file:py-2 file:text-white"
            />
          </label>
          <label className={admin.label}>
            Başlık <span className="text-ink/40">(isteğe bağlı)</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              maxLength={120}
              className={admin.inputMt2}
            />
          </label>
          <label className={admin.label}>
            Açıklama / alt metin <span className="text-ink/40">(isteğe bağlı)</span>
            <input
              value={alt}
              onChange={(event) => setAlt(event.target.value)}
              maxLength={255}
              className={admin.inputMt2}
            />
          </label>
          <label className={admin.label}>
            Kategori
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value as GalleryMediaCategory)}
              className={admin.inputMt2}
            >
              {categories.map((entry) => (
                <option key={entry.id} value={entry.id}>
                  {entry.label}
                </option>
              ))}
            </select>
          </label>
          <label className={admin.label}>
            Sıra
            <input
              type="number"
              value={sortOrder}
              onChange={(event) => setSortOrder(Number(event.target.value))}
              className={admin.inputMt2}
            />
          </label>
          <label className="flex items-center gap-2 text-sm text-ink/70 sm:col-span-2">
            <input type="checkbox" checked={published} onChange={(event) => setPublished(event.target.checked)} />
            Yayınla
          </label>
          <button
            type="submit"
            disabled={busyId === "new"}
            className={cn(admin.btnPrimary, "sm:col-span-2 sm:w-fit")}
          >
            {busyId === "new" ? "Yükleniyor…" : "Yükle ve kaydet"}
          </button>
        </form>
      </section>

      <section>
        <div className="mb-4">
          <h2 className={admin.sectionTitle}>Kayıtlar</h2>
          <p className="text-sm text-ink/60">{items.length} öğe</p>
        </div>

        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.publicId} className={admin.card}>
              <MediaRow
                item={item}
                busy={busyId === item.id}
                onSave={saveItem}
                onDelete={removeItem}
                onReplaceImage={replaceImage}
              />
            </li>
          ))}
          {items.length === 0 && !loadError ? (
            <li className="border border-dashed border-ink/20 bg-white px-4 py-8 text-center text-sm text-ink/55">
              Henüz kayıt yok.
            </li>
          ) : null}
        </ul>
      </section>
    </div>
  );
}

function MediaRow({
  item,
  busy,
  onSave,
  onDelete,
  onReplaceImage,
}: {
  item: AdminMediaItem;
  busy: boolean;
  onSave: (item: AdminMediaItem, patch: Partial<AdminMediaItem>) => Promise<void>;
  onDelete: (item: AdminMediaItem) => Promise<void>;
  onReplaceImage: (item: AdminMediaItem, file: File, meta: Partial<AdminMediaItem>) => Promise<void>;
}) {
  const [title, setTitle] = useState(item.title);
  const [alt, setAlt] = useState(item.alt);
  const [category, setCategory] = useState<string>(item.category);
  const [sortOrder, setSortOrder] = useState(item.sortOrder);
  const [published, setPublished] = useState(item.published);
  const [bust, setBust] = useState(0);

  return (
    <div className="grid gap-4 md:grid-cols-[140px_1fr]">
      <div className="relative aspect-[4/3] bg-ink/5">
        <Image
          src={item.publicId}
          alt={item.alt || item.title || "Galeri"}
          fill
          className="object-cover"
          sizes="140px"
          key={`${item.publicId}-${bust}`}
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className={admin.labelXs}>
          Başlık
          <input value={title} onChange={(event) => setTitle(event.target.value)} className={admin.input} />
        </label>
        <label className={admin.labelXs}>
          Açıklama / alt metin
          <input value={alt} onChange={(event) => setAlt(event.target.value)} className={admin.input} />
        </label>
        <label className={admin.labelXs}>
          Kategori
          <select value={category} onChange={(event) => setCategory(event.target.value)} className={admin.input}>
            {categories.map((entry) => (
              <option key={entry.id} value={entry.id}>
                {entry.label}
              </option>
            ))}
          </select>
        </label>
        <label className={admin.labelXs}>
          Sıra
          <input
            type="number"
            value={sortOrder}
            onChange={(event) => setSortOrder(Number(event.target.value))}
            className={admin.input}
          />
        </label>
        <label className="flex items-center gap-2 text-sm text-ink/70">
          <input type="checkbox" checked={published} onChange={(event) => setPublished(event.target.checked)} />
          Yayınlı
        </label>
        <p className="self-center truncate text-xs text-ink/40">{item.publicId}</p>
        <label className={cn(admin.labelXs, "sm:col-span-2")}>
          Görseli değiştir (bilgisayardan seç)
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            disabled={busy}
            onChange={async (event) => {
              const file = event.target.files?.[0];
              event.target.value = "";
              if (!file) return;
              await onReplaceImage(item, file, { title, alt, category, sortOrder, published });
              setBust((value) => value + 1);
            }}
            className="mt-1 block w-full text-sm text-ink file:mr-3 file:border-0 file:bg-accent file:px-3 file:py-2 file:text-white disabled:opacity-60"
          />
        </label>
        <div className="flex flex-wrap gap-2 sm:col-span-2">
          <button
            type="button"
            disabled={busy}
            onClick={() => onSave(item, { title, alt, category, sortOrder, published })}
            className={admin.btnSave}
          >
            {busy ? "Kaydediliyor…" : "Kaydet"}
          </button>
          <button type="button" disabled={busy} onClick={() => onDelete(item)} className={admin.btnDanger}>
            Sil
          </button>
        </div>
      </div>
    </div>
  );
}
