"use client";

import { useRouter } from "next/navigation";
import { FileUp, X } from "lucide-react";
import { useId, useRef, useState } from "react";
import {
  allowedDrawingExtensions,
  maxDrawingBytes,
  maxDrawingFiles,
  quoteRequestTypes,
  validateQuote,
  type QuoteErrors,
} from "@/lib/quote";
import { cn } from "@/lib/cn";

const initial = {
  name: "",
  company: "",
  phone: "",
  email: "",
  requestType: "",
  material: "",
  quantity: "",
  deadline: "",
  message: "",
};

type Tone = "light" | "dark";

function formatSize(bytes: number) {
  return bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function ContactForm({ tone = "light" }: { tone?: Tone }) {
  const router = useRouter();
  const inputId = useId();
  const fileInput = useRef<HTMLInputElement>(null);
  const [fields, setFields] = useState(initial);
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [notice, setNotice] = useState("");
  const dark = tone === "dark";

  function update(key: keyof typeof initial, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function setFileList(next: File[]) {
    setFiles(next);
    setErrors((previous) => ({ ...previous, files: validateQuote({ ...fields, files: next }).files }));
  }

  function addFiles(list: FileList | null) {
    if (!list) return;
    const merged = [...files];
    for (const file of Array.from(list)) {
      if (!merged.some((item) => item.name === file.name && item.size === file.size)) merged.push(file);
    }
    setFileList(merged.slice(0, maxDrawingFiles));
    if (fileInput.current) fileInput.current.value = "";
  }

  function removeFile(index: number) {
    setFileList(files.filter((_, position) => position !== index));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validateQuote({ ...fields, files });
    setErrors(nextErrors);
    setNotice("");
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      requestAnimationFrame(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }

    const body = new FormData();
    for (const [key, value] of Object.entries(fields)) body.set(key, value.trim());
    files.forEach((file) => body.append("files", file));

    setStatus("sending");
    try {
      const response = await fetch("/api/teklif", { method: "POST", body });
      const payload = (await response.json()) as { ok?: boolean; message?: string };
      if (response.ok && payload.ok) {
        setStatus("success");
        router.push("/tesekkurler");
        return;
      }
      setStatus("error");
      setNotice(payload.message ?? "Talep iletilemedi. Lütfen biraz sonra tekrar deneyin.");
    } catch {
      setStatus("error");
      setNotice("Bağlantı kurulamadı. Talep iletilmedi.");
    }
  }

  const inputClass = cn(
    "w-full border-b bg-transparent py-3 text-base outline-none transition-colors focus:border-accent",
    dark ? "border-white/25 text-white" : "border-ink/20",
  );

  if (status === "success") {
    return (
      <div role="status" className={cn("border p-8", dark ? "border-white/15" : "border-ink/10")}>
        <p className="eyebrow text-accent">Talebiniz alındı</p>
        <p className="display mt-4 text-[clamp(1.8rem,3vw,2.6rem)]">Talebiniz alındı.</p>
        <p className={cn("mt-4 leading-relaxed", dark ? "text-mist" : "text-ink/70")}>
          Teknik resminiz incelenip size dönüş yapılacak.
        </p>
      </div>
    );
  }

  return (
    <form id="teklif" onSubmit={onSubmit} noValidate className="scroll-mt-28 space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Ad Soyad" error={errors.name} required tone={tone}>
          <input name="name" autoComplete="name" value={fields.name} onChange={(e) => update("name", e.target.value)} className={inputClass} aria-invalid={Boolean(errors.name)} />
        </Field>
        <Field label="Firma" error={errors.company} tone={tone}>
          <input name="company" autoComplete="organization" value={fields.company} onChange={(e) => update("company", e.target.value)} className={inputClass} />
        </Field>
        <Field label="Telefon" error={errors.phone} required tone={tone}>
          <input name="phone" type="tel" autoComplete="tel" value={fields.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} aria-invalid={Boolean(errors.phone)} />
        </Field>
        <Field label="E-posta" error={errors.email} required tone={tone}>
          <input name="email" type="email" autoComplete="email" value={fields.email} onChange={(e) => update("email", e.target.value)} className={inputClass} aria-invalid={Boolean(errors.email)} />
        </Field>
        <Field label="Üretim Türü" error={errors.requestType} required tone={tone}>
          <select
            name="requestType"
            value={fields.requestType}
            onChange={(e) => update("requestType", e.target.value)}
            className={cn(inputClass, dark && "[&>option]:bg-ink")}
            aria-invalid={Boolean(errors.requestType)}
          >
            <option value="">Seçin</option>
            {quoteRequestTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Malzeme" error={errors.material} tone={tone}>
          <input name="material" value={fields.material} onChange={(e) => update("material", e.target.value)} className={inputClass} placeholder="Örn. paslanmaz, alüminyum" />
        </Field>
        <Field label="Adet" error={errors.quantity} tone={tone}>
          <input name="quantity" inputMode="numeric" value={fields.quantity} onChange={(e) => update("quantity", e.target.value)} className={inputClass} />
        </Field>
        <Field label="Termin" error={errors.deadline} tone={tone}>
          <input name="deadline" value={fields.deadline} onChange={(e) => update("deadline", e.target.value)} className={inputClass} placeholder="Örn. 3 hafta" />
        </Field>
      </div>
      <Field label="Açıklama" error={errors.message} required tone={tone}>
        <textarea name="message" rows={5} value={fields.message} onChange={(e) => update("message", e.target.value)} className={inputClass} aria-invalid={Boolean(errors.message)} />
      </Field>

      <div>
        <label htmlFor={`${inputId}-files`} className="text-[11px] font-semibold tracking-[0.16em] uppercase">
          Teknik çizim / dosya
        </label>
        <div
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragging(false);
            addFiles(event.dataTransfer.files);
          }}
          className={cn(
            "relative mt-2 flex flex-col items-center justify-center gap-3 border border-dashed px-6 py-8 text-center transition-colors focus-within:border-accent",
            dragging ? "border-accent bg-accent/5" : dark ? "border-white/25" : "border-ink/20",
          )}
        >
          <FileUp size={22} className="text-accent" aria-hidden="true" />
          <p className="text-sm">
            Dosyaları buraya sürükleyin veya{" "}
            <span className="font-semibold underline underline-offset-4">bilgisayardan seçin</span>
          </p>
          <p className={cn("text-xs", dark ? "text-white/55" : "text-ink/55")}>
            PDF, STEP, STP, DXF, DWG, IGES, ZIP · En fazla {maxDrawingFiles} dosya, toplam{" "}
            {Math.round(maxDrawingBytes / (1024 * 1024))} MB
          </p>
          <input
            ref={fileInput}
            id={`${inputId}-files`}
            name="files"
            type="file"
            multiple
            accept={allowedDrawingExtensions.join(",")}
            onChange={(event) => addFiles(event.target.files)}
            className="absolute inset-0 cursor-pointer opacity-0"
            aria-describedby={errors.files ? `${inputId}-files-error` : undefined}
          />
        </div>
        {files.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {files.map((file, index) => (
              <li
                key={`${file.name}-${file.size}`}
                className={cn("flex items-center justify-between gap-3 border px-3 py-2 text-sm", dark ? "border-white/15" : "border-ink/10")}
              >
                <span className="min-w-0 truncate">{file.name}</span>
                <span className="flex shrink-0 items-center gap-3">
                  <span className={dark ? "text-white/55" : "text-ink/55"}>{formatSize(file.size)}</span>
                  <button type="button" onClick={() => removeFile(index)} className="grid h-8 w-8 place-items-center hover:text-accent">
                    <span className="sr-only">{file.name} dosyasını kaldır</span>
                    <X size={16} aria-hidden="true" />
                  </button>
                </span>
              </li>
            ))}
          </ul>
        ) : null}
        {errors.files ? (
          <p id={`${inputId}-files-error`} className="mt-2 text-sm text-accent">
            {errors.files}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(
          "group inline-flex min-h-12 items-center gap-3 bg-accent px-6 py-4 text-xs font-semibold tracking-[0.18em] text-white uppercase transition-colors disabled:opacity-60",
          dark ? "hover:bg-white hover:text-ink" : "hover:bg-ink",
        )}
      >
        {status === "sending" ? "Gönderiliyor..." : "Teklif talebi gönder"}
        {status === "sending" ? null : (
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        )}
      </button>
      <p role="status" aria-live="polite" className={cn("min-h-6 text-sm leading-relaxed", status === "error" ? "text-accent" : "")}>
        {notice}
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  tone,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  tone: Tone;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className={cn("text-[11px] font-semibold tracking-[0.16em] uppercase", tone === "dark" && "text-white/80")}>
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <span className="mt-2 block">{children}</span>
      {error ? <span className="mt-2 block text-sm text-accent">{error}</span> : null}
    </label>
  );
}
