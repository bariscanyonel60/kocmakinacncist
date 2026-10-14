import Link from "next/link";
import { machines } from "@/data/machines";
import { MachineCard } from "@/components/products/MachineCard";
import { Container } from "@/components/ui/Container";

export function MachineStrip() {
  return (
    <section className="bg-paper text-ink">
      <Container className="py-20 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-accent">Makine parkuru</p>
            <h2 className="display mt-4 text-[clamp(2.3rem,5vw,4.6rem)]">Teknolojimiz</h2>
            <p className="mt-4 max-w-xl text-ink/70">Üretimde hassasiyet, doğru teknolojiyle başlar.</p>
          </div>
          <Link href="/makine-parkuru" className="text-xs font-semibold tracking-[0.18em] uppercase hover:text-accent">
            Parkuru incele →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {machines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>
      </Container>
    </section>
  );
}
