import Image from "next/image";
import Link from "next/link";
import { homeCapabilities } from "@/data/capabilities";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CapabilityGrid() {
  return (
    <section className="bg-ink text-white">
      <Container className="py-20 lg:py-28">
        <SectionHeader
          index="02"
          eyebrow="Kabiliyetler"
          title={["Üretim", "kabiliyetleri"]}
          description="Torna ve frezeden prototip ile seri üretime; her başlık teknik resimle başlayan aynı üretim disiplinine bağlıdır."
          tone="dark"
          className="mb-12"
          action={
            <ArrowLink href="/hizmetler" variant="outline">
              Tüm hizmetler
            </ArrowLink>
          }
        />
        <ul className="grid grid-cols-1 gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {homeCapabilities.map((item, index) => (
            <li key={item.slug} className="bg-ink">
              <Reveal delay={(index % 3) * 0.08} className="h-full">
                <Link
                  href={item.href}
                  className="group relative flex aspect-[4/5] h-full flex-col justify-end overflow-hidden focus-visible:outline-offset-[-3px] sm:aspect-[3/4] lg:aspect-[4/5]"
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5" />
                  <span className="absolute top-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                  <div className="relative p-6">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[11px] tracking-[0.22em] text-metal">{item.number}</p>
                      <span
                        aria-hidden="true"
                        className="text-accent transition-transform duration-300 group-hover:translate-x-1.5"
                      >
                        →
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-[clamp(1.6rem,2.4vw,2.2rem)] leading-none tracking-[-0.03em] uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist">{item.short}</p>
                    <div className="grid transition-[grid-template-rows,opacity] duration-500 ease-out md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-visible:grid-rows-[1fr] md:group-focus-visible:opacity-100">
                      <div className="overflow-hidden">
                        <ul className="mt-4 space-y-1.5 border-t border-white/15 pt-4">
                          {item.points.map((point) => (
                            <li key={point} className="flex gap-2 text-xs tracking-[0.06em] text-white/85 uppercase">
                              <span className="text-accent" aria-hidden="true">
                                /
                              </span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
