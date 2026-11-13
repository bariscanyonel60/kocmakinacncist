import { company, phoneHref } from "@/data/company";

export function StickyPhoneButton() {
  const href = phoneHref();
  if (!href) return null;

  return (
    <a
      href={href}
      className="fixed bottom-4 left-4 z-40 inline-flex min-h-12 items-center gap-2 bg-accent px-4 text-[11px] font-semibold tracking-[0.16em] text-white uppercase shadow-[0_10px_30px_rgba(0,0,0,0.28)] md:bottom-6 md:left-6"
      aria-label={`Telefon: ${company.phone}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6.6 3.8c.4-.4 1-.5 1.5-.3l2.2.9c.5.2.8.7.8 1.2v2.1c0 .4-.2.8-.5 1L9.2 10c1.2 2.4 3.2 4.3 5.6 5.5l1.3-1.4c.3-.3.7-.5 1.1-.5h2.1c.5 0 1 .3 1.2.8l.9 2.2c.2.5.1 1.1-.3 1.5l-1.1 1.1c-.4.4-1 .6-1.6.5C12.3 19.1 4.9 11.7 3.3 5.5c-.1-.6.1-1.2.5-1.6L6.6 3.8Z" />
      </svg>
      Ara
    </a>
  );
}
