"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { allowedDrawingExtensions, maxDrawingBytes, maxDrawingFiles, quoteRequestTypes, validateQuote, type QuoteErrors } from "@/lib/quote";

const initial = {
  name: "",
  company: "",
  phone: "",
  email: "",
  requestType: "",
  message: "",
};

export function ContactForm() {
  const router = useRouter();
  const [fields, setFields] = useState(initial);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "rejected">("idle");
  const [notice, setNotice] = useState("");

  function update(key: keyof typeof initial, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateQuote({ ...fields, files });
    setErrors(nextErrors);
    setNotice("");
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    const body = new FormData();
    body.set("name", fields.name.trim());
    body.set("company", fields.company.trim());
    body.set("phone", fields.phone.trim());
    body.set("email", fields.email.trim());
    body.set("requestType", fields.requestType);
    body.set("message", fields.message.trim());
    files.forEach((file) => body.append("files", file));

    setStatus("sending");
    try {
      const response = await fetch("/api/teklif", { method: "POST", body });
      const payload = (await response.json()) as { ok?: boolean; message?: string };
      if (response.ok && payload.ok) {
        router.push("/tesekkurler");
        return;
      }
      setStatus("rejected");
      setNotice(
        payload.message ??
          "Talep kaydedilmedi. Form arayüzü hazır; gönderim için sunucu entegrasyonu gerekiyor.",
      );
    } catch {
      setStatus("rejected");
      setNotice("Bağlantı kurulamadı. Talep kaydedilmedi.");
    }
  }

  return (
    <form id="teklif" onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Ad Soyad" error={errors.name} required>
          <input
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Firma" error={errors.company}>
          <input
            name="company"
            autoComplete="organization"
            value={fields.company}
            onChange={(event) => update("company", event.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Telefon" error={errors.phone} required>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="E-posta" error={errors.email} required>
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="Talep Türü" error={errors.requestType} required>
        <select
          name="requestType"
          value={fields.requestType}
          onChange={(event) => update("requestType", event.target.value)}
          className={inputClass}
        >
          <option value="">Seçin</option>
          {quoteRequestTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Mesaj" error={errors.message} required>
        <textarea
          name="message"
          rows={6}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          className={inputClass}
        />
      </Field>
      <Field label="Teknik çizim / dosya" error={errors.files}>
        <input
          name="files"
          type="file"
          multiple
          accept={allowedDrawingExtensions.join(",")}
          onChange={(event) => setFiles(Array.from(event.target.files ?? []))}
          className="block w-full text-sm file:mr-4 file:border-0 file:bg-ink file:px-4 file:py-3 file:text-xs file:tracking-[0.14em] file:text-white file:uppercase"
        />
        <p className="mt-2 text-xs leading-relaxed text-ink/55">
          PDF, DXF, DWG, STEP, STP ve IGES. En fazla {maxDrawingFiles} dosya, dosya başına {Math.round(maxDrawingBytes / (1024 * 1024))} MB.
          Dosyalar şu an saklanmaz.
        </p>
      </Field>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 items-center bg-accent px-6 py-4 text-xs font-semibold tracking-[0.18em] text-white uppercase disabled:opacity-60"
      >
        {status === "sending" ? "Kontrol ediliyor" : "Teklif Talebi Gönder"}
      </button>
      <p role="status" className="min-h-6 text-sm leading-relaxed text-ink">
        {notice}
      </p>
      <p className="text-xs leading-relaxed text-ink/50">
        TODO: Form ve teknik dosyalar güvenli bir API, depolama ve bildirim hattına bağlanacak. Başarılı gönderim mesajı bu bağlantı kurulmadan gösterilmez.
      </p>
    </form>
  );
}

const inputClass = "w-full border-b border-ink/20 bg-transparent py-3 text-base outline-none focus:border-accent";

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold tracking-[0.16em] uppercase">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <span className="mt-2 block">{children}</span>
      {error ? <span className="mt-2 block text-sm text-accent">{error}</span> : null}
    </label>
  );
}
