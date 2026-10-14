import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/cnc-torna-taret.jpg",
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/55" />
      <Container className="relative flex min-h-[48vh] flex-col justify-end pt-32 pb-12 md:min-h-[56vh] md:pb-16">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="display mt-4 max-w-5xl text-[clamp(2.3rem,6.4vw,5.6rem)]">{title}</h1>
        {description ? <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">{description}</p> : null}
      </Container>
    </section>
  );
}
