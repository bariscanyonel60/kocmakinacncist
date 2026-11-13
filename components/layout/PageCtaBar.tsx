import Link from "next/link";
import { company, filled, phoneHref, whatsappHref } from "@/data/company";
import { cn } from "@/lib/cn";

export function PageCtaBar({
  message = "Teknik resminiz hazırsa teklif formuna geçin veya bizi arayın.",
  className,
  tone = "ink",
}: {
  message?: string;
  className?: string;
  tone?: "ink" | "paper";
}) {
  const tel = phoneHref(company.phone);
  const whatsapp = whatsappHref();
  const onInk = tone === "ink";

  return (
    <div
      className={cn(
        "border-b",
        onInk ? "border-white/15 bg-ink text-white" : "border-ink/10 bg-paper text-ink",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p className={cn("min-w-0 max-w-xl text-sm leading-relaxed", onInk ? "text-mist" : "text-ink/70")}>
          {message}
        </p>
        <div className="flex max-w-full flex-wrap gap-2">
          {tel ? (
            <a
              href={tel}
              className={cn(
                "inline-flex min-h-11 items-center justify-center px-4 text-xs font-semibold tracking-[0.14em] uppercase",
                onInk
                  ? "border border-white/20 hover:border-white hover:bg-white hover:text-ink"
                  : "border border-ink/15 hover:border-ink hover:bg-ink hover:text-white",
              )}
            >
              <span className="sm:hidden">Ara</span>
              <span className="hidden sm:inline">Ara · {company.phone}</span>
            </a>
          ) : null}
          {whatsapp ? (
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center bg-[#128C7E] px-4 text-xs font-semibold tracking-[0.16em] text-white uppercase"
            >
              WhatsApp
            </a>
          ) : null}
          <Link
            href="/iletisim#teklif"
            className="inline-flex min-h-11 items-center justify-center bg-accent px-5 text-xs font-semibold tracking-[0.16em] text-white uppercase hover:bg-white hover:text-ink"
          >
            Teklif Al →
          </Link>
          {filled(company.email) ? (
            <a
              href={`mailto:${company.email}`}
              className={cn(
                "inline-flex min-h-11 items-center justify-center px-4 text-xs font-semibold tracking-[0.16em] uppercase",
                onInk ? "text-mist hover:text-white" : "text-ink/60 hover:text-ink",
              )}
            >
              E-posta
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
