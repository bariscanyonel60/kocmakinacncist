import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";

export function ProcessTimeline({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="bg-ink-2 text-white">
      <Container className="py-20 lg:py-28">
        <p className="eyebrow text-accent">Süreç</p>
        <h2 className="display mt-4 max-w-4xl text-[clamp(2.3rem,5vw,4.8rem)]">Fikirden üretime</h2>
        <ol className="mt-14 hidden gap-px bg-white/10 lg:grid lg:grid-cols-6">
          {processSteps.map((step) => (
            <li key={step.number} className="bg-ink-2 p-5">
              <p className="font-display text-sm text-accent">{step.number}</p>
              <h3 className="mt-6 font-display text-xl tracking-[-0.03em] uppercase">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{detailed ? step.detail : step.summary}</p>
            </li>
          ))}
        </ol>
        <ol className="mt-10 border-l border-white/15 lg:hidden">
          {processSteps.map((step) => (
            <li key={step.number} className="relative pb-8 pl-6">
              <span className="absolute top-1 -left-px h-2 w-2 -translate-x-1/2 bg-accent" />
              <p className="text-xs tracking-[0.18em] text-accent">{step.number}</p>
              <h3 className="mt-2 font-display text-2xl uppercase">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{detailed ? step.detail : step.summary}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
