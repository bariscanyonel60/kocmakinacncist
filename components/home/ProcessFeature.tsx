import Image from "next/image";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal, RevealLines } from "@/components/ui/Reveal";
import { filled } from "@/data/company";
import type { ProcessFeature as Feature } from "@/data/capabilities";
import { cn } from "@/lib/cn";

export function ProcessFeature({ feature, reverse = false }: { feature: Feature; reverse?: boolean }) {
  const specs = feature.specs.filter((spec) => filled(spec.value));
  const [primary, secondary] = feature.links;

  return (
    <section id={feature.id} className="scroll-mt-24 bg-white text-ink">
      <Container className="grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className={cn("lg:col-span-6", reverse && "lg:order-2")}>
          <p className="eyebrow text-accent">
            {feature.index} / {feature.eyebrow}
          </p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.4vw,4.4rem)]">
            <RevealLines lines={feature.title} />
          </h2>
          <Reveal className="mt-6 space-y-4 text-base leading-relaxed text-ink/75">
            {feature.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
          {specs.length > 0 ? (
            <dl className="mt-10 grid border-t border-ink/15 sm:grid-cols-2">
              {specs.map((spec) => (
                <div key={spec.label} className="border-b border-ink/15 py-4 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                  <dt className="text-[11px] tracking-[0.2em] text-ink/50 uppercase">{spec.label}</dt>
                  <dd className="mt-1.5 font-display text-sm tracking-[0.04em] uppercase">{spec.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            {primary ? (
              <ArrowLink href={primary.href} variant="dark">
                {primary.label}
              </ArrowLink>
            ) : null}
            {secondary ? (
              <ArrowLink href={secondary.href} variant="text" className="w-fit">
                {secondary.label}
              </ArrowLink>
            ) : null}
          </div>
        </div>
        <div className={cn("relative lg:col-span-6", reverse && "lg:order-1")}>
          <ImageReveal className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <span className="absolute top-3 left-3 h-6 w-6 border-t border-l border-white" />
            <span className="absolute right-3 bottom-3 h-6 w-6 border-r border-b border-white" />
          </ImageReveal>
        </div>
      </Container>
    </section>
  );
}
