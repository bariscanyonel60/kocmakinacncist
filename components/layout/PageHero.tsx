import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { company, phoneHref } from "@/data/company";

export function PageHero({
  eyebrow,
  title,
  text,
  crumbs,
  showCta = true,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  crumbs: { name: string; path: string }[];
  showCta?: boolean;
}) {
  const phone = phoneHref();

  return (
    <section className="relative overflow-hidden bg-ink pt-28 text-white md:pt-36">
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative pb-14 md:pb-20">
        <Breadcrumb items={crumbs} />
        <p className="mt-8 text-[11px] font-semibold tracking-[0.28em] text-accent uppercase">{eyebrow}</p>
        <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.4rem,6.4vw,5.4rem)] leading-[0.92] font-medium tracking-[-0.04em] uppercase">
          {title}
        </h1>
        {text ? <p className="mt-6 max-w-2xl text-base leading-relaxed text-metal md:text-lg">{text}</p> : null}
        {showCta ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/iletisim">Teklif Al</Button>
            {phone ? (
              <a
                href={phone}
                className="inline-flex min-h-11 items-center px-1 text-[11px] font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:text-accent"
              >
                Ara · {company.phone}
              </a>
            ) : (
              <Button href="/hizmetler" variant="secondary">
                Hizmetleri İncele
              </Button>
            )}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
