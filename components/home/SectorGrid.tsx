import Image from "next/image";
import { sectors } from "@/data/sectors";
import { Container } from "@/components/ui/Container";

export function SectorGrid() {
  return (
    <section className="bg-paper text-ink">
      <Container className="py-20 lg:py-28">
        <p className="eyebrow text-accent">Uygulama alanları</p>
        <h2 className="display mt-4 max-w-4xl text-[clamp(2.2rem,4.6vw,4.4rem)]">
          Üretim çözümlerimizin uygulanabileceği alanlar
        </h2>
        <p className="mt-5 max-w-2xl text-ink/70">
          Aşağıdaki başlıklar referans listesi değildir. CNC torna ve talaşlı imalatın karşılık bulabileceği sektörleri tarif eder.
        </p>
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <li key={sector.name} className="group relative min-h-[280px] overflow-hidden bg-ink">
              <Image
                src={sector.image}
                alt={sector.imageAlt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-display text-2xl uppercase">{sector.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{sector.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
