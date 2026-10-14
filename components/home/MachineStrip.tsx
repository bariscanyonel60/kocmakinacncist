import { machines } from "@/data/machines";
import { MachineCard } from "@/components/products/MachineCard";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function MachineStrip() {
  return (
    <section className="bg-paper text-ink">
      <Container className="py-20 lg:py-28">
        <SectionHeader
          index="06"
          eyebrow="Makine parkuru"
          title={["Teknolojimiz"]}
          description="Üretimde hassasiyet, doğru teknolojiyle başlar."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {machines.map((machine, index) => (
            <Reveal key={machine.id} delay={index * 0.08} className="h-full">
              <MachineCard machine={machine} compact />
            </Reveal>
          ))}
        </div>
        <ArrowLink href="/makine-parkuru" variant="dark" className="mt-10">
          Tüm makine parkurunu incele
        </ArrowLink>
      </Container>
    </section>
  );
}
