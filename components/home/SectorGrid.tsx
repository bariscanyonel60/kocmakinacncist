import Image from "next/image";
import { sectors } from "@/data/sectors";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SectorGrid({ index }: { index?: string }) {
  return (
    <section className="bg-paper text-ink">
      <Container className="py-20 lg:py-28">
        <SectionHeader
          index={index}
          eyebrow="Sektörler"
          title={["Uygulama", "alanları"]}
          description="Üretim çözümlerimizin uygulanabileceği alanlar. Bu başlıklar referans listesi değildir; CNC torna, freze ve talaşlı imalatın karşılık bulduğu sektörleri tarif eder."
        />
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, position) => (
            <li key={sector.name} className="bg-ink">
              <Reveal delay={(position % 4) * 0.06} className="group relative h-full min-h-[300px] overflow-hidden">
              <Image
                src={sector.image}
                alt={sector.imageAlt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-70 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-display text-2xl uppercase">{sector.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{sector.text}</p>
              </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
