"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { admin } from "@/lib/admin-ui";
import { cn } from "@/lib/cn";

type Props = {
  label?: string;
  value: string;
  onChange: (path: string) => void;
  className?: string;
};

export function AdminImageField({ label = "Görsel", value, onChange, className }: Props) {
  const inputId = useId();
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  async function onFileChange(file: File | null) {
    if (!file) return;
    setUploading(true);
    setError(null);
    setFileName(file.name);
    const body = new FormData();
    body.set("file", file);
    try {
      const response = await fetch("/api/admin/upload", { method: "POST", body });
      const payload = (await response.json()) as {
        ok?: boolean;
        path?: string;
        message?: string;
        error?: string;
      };
      if (!response.ok || !payload.ok || !payload.path) {
        setError(payload.message ?? payload.error ?? "Yükleme başarısız.");
        return;
      }
      onChange(payload.path);
    } catch {
      setError("Bağlantı hatası. Dosya yüklenemedi.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div className={cn("sm:col-span-2", className)}>
      <p className={admin.labelXs}>{label}</p>
      <div className="mt-2 grid gap-4 sm:grid-cols-[160px_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden border border-ink/10 bg-ink/[0.03]">
          {value ? (
            <Image src={value} alt="" fill className="object-cover" sizes="160px" unoptimized={value.startsWith("blob:")} />
          ) : (
            <div className="grid h-full place-items-center px-3 text-center text-xs text-ink/40">Görsel yok</div>
          )}
        </div>
        <div className="space-y-3">
          <label htmlFor={inputId} className={admin.label}>
            Bilgisayardan görsel seç
            <input
              ref={fileRef}
              id={inputId}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              disabled={uploading}
              onChange={(event) => onFileChange(event.target.files?.[0] ?? null)}
              className="mt-2 block w-full text-sm text-ink file:mr-3 file:border-0 file:bg-accent file:px-3 file:py-2 file:text-sm file:font-medium file:text-white disabled:opacity-60"
            />
          </label>
          <p className="text-xs text-ink/50">
            JPG, PNG veya WebP — en fazla 10 MB.
            {fileName && uploading ? ` Yükleniyor: ${fileName}` : null}
            {uploading ? " …" : null}
          </p>
          <label className={admin.labelXs}>
            Görsel yolu
            <input
              value={value}
              onChange={(event) => onChange(event.target.value)}
              placeholder="/images/ornek.jpg"
              className={admin.input}
            />
          </label>
          {error ? <p className="text-sm text-accent">{error}</p> : null}
        </div>
      </div>
    </div>
  );
}
