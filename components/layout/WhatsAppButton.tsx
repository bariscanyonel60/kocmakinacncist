import { company, phoneHref, whatsappHref } from "@/data/company";

export function WhatsAppButton() {
  const href = whatsappHref();
  if (!href) return null;
  const raised = Boolean(phoneHref(company.phone));

  return (
    <a
      href={href}
      className={`fixed right-4 bottom-20 z-40 inline-flex min-h-12 items-center gap-2 bg-[#128C7E] px-4 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-lg md:right-6 ${raised ? "md:bottom-24" : "md:bottom-6"}`}
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp
    </a>
  );
}
