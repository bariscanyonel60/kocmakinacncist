import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { qualityPillars } from "@/data/quality";

export function QualitySection({ index }: { index?: string }) {
  return (
    <section id="kalite" className="scroll-mt-24 bg-white text-ink">
      <Container className="py-20 lg:py-28">
        <SectionHeader
          index={index}
          eyebrow="Kalite"
          title={["Kalite", "tesadüf değildir."]}
          description="Hassas üretim, doğru ölçüm ve sürdürülebilir kalite kontrol süreçleriyle tamamlanır."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <ImageReveal className="relative min-h-[320px] lg:col-span-5 lg:min-h-full">
            <Image
              src="/images/hassas-parca.jpg"
              alt="Hassas işlenmiş metal parça yüzeyi ve kenar detayları"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>
          <ol className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:col-span-7">
            {qualityPillars.map((pillar, position) => (
              <li key={pillar.number} className="bg-white">
                <Reveal delay={position * 0.06} className="group flex h-full flex-col p-6 lg:p-8">
                  <span className="font-display text-sm text-accent">{pillar.number}</span>
                  <h3 className="mt-6 font-display text-2xl tracking-[-0.03em] uppercase">{pillar.title}</h3>
                  <span className="mt-4 block h-px w-10 bg-ink/20 transition-all duration-500 group-hover:w-20 group-hover:bg-accent" />
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">{pillar.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
