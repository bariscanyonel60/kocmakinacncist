"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { services } from "@/data/services";

const allowedExtensions = ["pdf", "dxf", "dwg", "step", "stp"];
const maxFileBytes = 20 * 1024 * 1024;

type FieldName = "name" | "company" | "phone" | "email" | "requestType" | "message" | "file";

const requestTypes = [...services.map((service) => service.title), "Genel bilgi"];

const initial = {
  name: "",
  company: "",
  phone: "",
  email: "",
  requestType: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function update(field: keyof typeof initial, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function validate() {
    const next: Partial<Record<FieldName, string>> = {};
    if (values.name.trim().length < 2) next.name = "Ad soyad girin.";
    if (values.phone.trim().length < 10) next.phone = "Telefon numarası girin.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Geçerli bir e-posta girin.";
    if (!values.requestType) next.requestType = "Talep türünü seçin.";
    if (values.message.trim().length < 20) next.message = "Mesaj en az 20 karakter olmalı.";
    if (file) {
      const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
      if (!allowedExtensions.includes(extension)) {
        next.file = "Kabul edilen dosyalar: PDF, DXF, DWG, STEP, STP.";
      } else if (file.size > maxFileBytes) {
        next.file = "Dosya 20 MB sınırını aşıyor.";
      }
    }
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("");
    const form = event.currentTarget;
    const honeypot = new FormData(form).get("company_website");
    if (typeof honeypot === "string" && honeypot.trim()) {
      setNotice("Gönderim kabul edilmedi.");
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const body = new FormData();
      Object.entries(values).forEach(([key, value]) => body.append(key, value));
      if (file) body.append("file", file);

      const response = await fetch("/api/teklif", { method: "POST", body });
      const payload = (await response.json()) as { message?: string };

      setNotice(
        payload.message ??
          "Form doğrulandı ancak talep iletilmedi. Gönderim altyapısı henüz bağlı değil.",
      );
    } catch {
      setNotice("Bağlantı kurulamadı. Talep iletilmedi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_website">Web sitesi</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <Field id="name" label="Ad soyad" error={errors.name}>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          className={inputClass}
        />
      </Field>
      <Field id="company" label="Firma" error={errors.company}>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
          className={inputClass}
        />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="phone" label="Telefon" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            className={inputClass}
          />
        </Field>
        <Field id="email" label="E-posta" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            className={inputClass}
          />
        </Field>
      </div>
      <Field id="requestType" label="Talep türü" error={errors.requestType}>
        <select
          id="requestType"
          name="requestType"
          value={values.requestType}
          onChange={(event) => update("requestType", event.target.value)}
          aria-invalid={Boolean(errors.requestType)}
          className={inputClass}
        >
          <option value="">Seçin</option>
          {requestTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>
      <Field id="message" label="Mesaj" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          className={inputClass}
        />
      </Field>
      <Field
        id="file"
        label="Teknik çizim / dosya"
        error={errors.file}
        hint="PDF, DXF, DWG, STEP veya STP. En fazla 20 MB. Dosya şu an bir sunucuya kaydedilmez."
      >
        <input
          id="file"
          name="file"
          type="file"
          accept=".pdf,.dxf,.dwg,.step,.stp"
          onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          aria-invalid={Boolean(errors.file)}
          className="block w-full text-sm text-muted file:mr-4 file:min-h-11 file:border-0 file:bg-ink file:px-4 file:text-[11px] file:tracking-[0.14em] file:text-white file:uppercase"
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex min-h-12 items-center bg-accent px-6 text-[11px] font-semibold tracking-[0.18em] text-white uppercase disabled:opacity-60"
      >
        {submitting ? "Kontrol ediliyor" : "Teklif talebi gönder"}
      </button>

      {notice ? (
        <p role="status" className="border border-ink/15 px-4 py-3 text-sm leading-relaxed text-ink">
          {notice}
        </p>
      ) : null}
      <p className="text-xs leading-relaxed text-muted">
        TODO: Form arayüzü hazır. Kayıt, e-posta ve dosya saklama için backend entegrasyonu gerekir. Başarılı gönderim gibi davranılmaz.
      </p>
    </form>
  );
}

const inputClass =
  "w-full border border-ink/15 bg-white px-3 py-3 text-base text-ink outline-none focus-visible:border-accent";

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[11px] font-semibold tracking-[0.16em] text-ink uppercase">
        {label}
      </label>
      {children}
      {hint ? <p className="mt-2 text-xs leading-relaxed text-muted">{hint}</p> : null}
      {error ? (
        <p className="mt-2 text-sm text-accent" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
