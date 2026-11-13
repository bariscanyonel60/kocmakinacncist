import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const spans = [
  "lg:col-span-7 lg:row-span-2 min-h-[460px]",
  "lg:col-span-5 min-h-[230px]",
  "lg:col-span-5 min-h-[230px]",
  "lg:col-span-3 min-h-[250px]",
  "lg:col-span-3 min-h-[250px]",
  "lg:col-span-3 min-h-[250px]",
  "lg:col-span-3 min-h-[250px]",
  "lg:col-span-12 min-h-[220px]",
];

export function Capabilities() {
  return (
    <section className="bg-ink py-20 text-white md:py-28" aria-labelledby="yetenek-baslik">
      <Container>
        <SectionHeading
          invert
          index="02"
          eyebrow="Hizmetler"
          title={<span id="yetenek-baslik">Üretim yeteneklerimiz</span>}
          text="Tornalama, işleme, prototip ve seri üretim aynı teknik dille planlanır. Parça geometrisi yöntemi belirler."
        />
        <div className="mt-12 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              className={`group relative flex min-h-[240px] flex-col justify-between overflow-hidden bg-ink p-6 md:p-7 ${spans[index] ?? ""}`}
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover opacity-70 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-90"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/15" />
              <span className="absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-accent" />
              <span className="relative font-display text-sm tracking-[0.18em] text-white/80 transition-transform duration-300 group-hover:-translate-y-1">
                {service.number}
              </span>
              <span className="relative">
                <span className="block font-display text-[clamp(1.5rem,2.4vw,2.4rem)] leading-none tracking-[-0.03em] uppercase">
                  {service.title}
                </span>
                <span className="mt-3 block max-w-md text-sm leading-relaxed text-white/75">{service.summary}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase">
                  İncele
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
