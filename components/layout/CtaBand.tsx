import { company, phoneHref } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBand() {
  const phone = phoneHref();

  return (
    <section className="relative overflow-hidden bg-ink-2 text-white" aria-labelledby="teklif-baslik">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <Container className="relative py-20 md:py-28">
        <p className="text-[11px] font-semibold tracking-[0.28em] text-accent uppercase">Teklif</p>
        <h2
          id="teklif-baslik"
          className="mt-4 max-w-4xl font-display text-[clamp(2.3rem,6vw,5.2rem)] leading-[0.92] font-medium tracking-[-0.04em] uppercase"
        >
          Teknik çiziminiz hazır mı?
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-metal md:text-lg">
          Projenizi bizimle paylaşın, üretim ihtiyaçlarınızı birlikte değerlendirelim.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/iletisim">
            Teklif Al
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Button>
          {phone ? (
            <a
              href={phone}
              className="inline-flex min-h-11 items-center justify-center border border-white/30 px-5 text-[11px] font-semibold tracking-[0.18em] text-white uppercase hover:border-accent"
            >
              Ara · {company.phone}
            </a>
          ) : null}
          <Button href="/hizmetler" variant="secondary">
            Hizmetler
          </Button>
        </div>
        {!phone ? (
          <p className="mt-4 text-xs tracking-[0.08em] text-metal uppercase">
            Telefon hattı tanımlandığında arama bağlantısı burada görünür.
          </p>
        ) : (
          <p className="sr-only">{company.phone}</p>
        )}
      </Container>
    </section>
  );
}
