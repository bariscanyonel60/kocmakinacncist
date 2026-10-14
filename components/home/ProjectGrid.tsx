import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

export function ProjectGrid({ index }: { index: string }) {
  if (projects.length === 0) return null;

  return (
    <section className="bg-paper text-ink">
      <Container className="py-20 lg:py-28">
        <SectionHeader index={index} eyebrow="Projeler" title={["Üretimden", "parçalar"]} />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, position) => (
            <li key={project.slug}>
              <Reveal delay={(position % 3) * 0.08} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl tracking-[-0.02em] uppercase">{project.title}</h3>
                <dl className="mt-3 grid grid-cols-3 gap-3 border-t border-ink/10 pt-3 text-xs">
                  <div>
                    <dt className="tracking-[0.16em] text-ink/50 uppercase">Yöntem</dt>
                    <dd className="mt-1">{project.process}</dd>
                  </div>
                  <div>
                    <dt className="tracking-[0.16em] text-ink/50 uppercase">Malzeme</dt>
                    <dd className="mt-1">{project.material}</dd>
                  </div>
                  <div>
                    <dt className="tracking-[0.16em] text-ink/50 uppercase">Sektör</dt>
                    <dd className="mt-1">{project.sector}</dd>
                  </div>
                </dl>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
