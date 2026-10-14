import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";

export function CapabilityGrid() {
  return (
    <section className="bg-ink text-white">
      <Container className="py-20 lg:py-28">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-accent">Üretim</p>
            <h2 className="display mt-4 text-[clamp(2.4rem,5vw,4.8rem)]">
              Üretim
              <span className="block">yeteneklerimiz</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mist">
            Her başlık ayrı bir veri kaydıdır. Firma kapsamında olmayan bir hizmet, listeden çıkarıldığında sayfası da kapanır.
          </p>
        </div>
        <ul className="grid grid-cols-1 border-t border-l border-white/15 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <li key={service.slug} className="group relative border-r border-b border-white/15">
              <Link href={`/hizmetler/${service.slug}`} className="flex h-full min-h-[320px] flex-col justify-between md:min-h-[420px]">
                <span className="absolute top-0 left-0 h-0 w-px bg-accent transition-all duration-300 group-hover:h-full" />
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-[5/4]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                </div>
                <div className="flex items-end justify-between gap-4 p-5">
                  <div>
                    <p className="text-[11px] tracking-[0.2em] text-metal transition-transform duration-300 group-hover:-translate-y-1">
                      {service.number}
                    </p>
                    <h3 className="mt-2 font-display text-2xl tracking-[-0.03em] uppercase">{service.title}</h3>
                  </div>
                  <span className="text-accent transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
