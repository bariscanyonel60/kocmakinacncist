import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section className="bg-ink py-20 text-white md:py-28" aria-labelledby="surec-baslik">
      <Container>
        <SectionHeading
          invert
          index="04"
          eyebrow="Süreç"
          title={<span id="surec-baslik">Fikirden üretime</span>}
          text="Altı adım, tezgah başında konuşulan sıranın sade halidir. Süreç parçaya göre sıkışabilir, atlanmaz."
        />
        <ol className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-6">
          {processSteps.map((step) => (
            <li key={step.number} className="relative bg-ink px-5 py-7">
              <span className="mb-8 block h-px w-10 bg-accent" aria-hidden="true" />
              <p className="font-display text-sm tracking-[0.18em] text-accent">{step.number}</p>
              <h3 className="mt-3 font-display text-xl leading-tight tracking-[-0.03em] uppercase">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-metal">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
