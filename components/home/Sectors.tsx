import Image from "next/image";
import Link from "next/link";
import { sectors } from "@/data/sectors";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Sectors() {
  return (
    <section className="bg-ink py-20 text-white md:py-28" aria-labelledby="sektor-baslik">
      <Container>
        <SectionHeading
          invert
          index="07"
          eyebrow="Sektörler"
          title={<span id="sektor-baslik">Üretim çözümlerimizin uygulanabileceği alanlar</span>}
          text="Aşağıdaki başlıklar müşteri referansı değildir. Parça, teknik şartnameye göre değerlendirilir."
        />
        <ul className="mt-12 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <li key={sector.slug} className="relative min-h-[280px] overflow-hidden bg-ink">
              <Image src={sector.image} alt={sector.imageAlt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
              <h3 className="absolute right-5 bottom-5 left-5 font-display text-2xl leading-none tracking-[-0.03em] uppercase">
                {sector.title}
              </h3>
            </li>
          ))}
        </ul>
        <Link href="/sektorler" className="mt-8 inline-flex text-[11px] font-semibold tracking-[0.18em] uppercase">
          Sektör notlarını oku <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </Container>
    </section>
  );
}
