import Image from "next/image";
import Link from "next/link";
import { PageCtaBar } from "@/components/layout/PageCtaBar";
import { Container } from "@/components/ui/Container";
import { company, phoneHref } from "@/data/company";

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/cnc-torna-taret.jpg",
  imageAlt,
  showCta = true,
  ctaMessage,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt: string;
  showCta?: boolean;
  ctaMessage?: string;
}) {
  const tel = phoneHref(company.phone);

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {showCta ? (
        <div className="relative z-10 pt-[92px]">
          <PageCtaBar
            message={
              ctaMessage ??
              "Teknik çiziminiz hazırsa teklif alın; acil işlerde bizi arayın."
            }
            className="border-b border-white/10 bg-ink/80 backdrop-blur-sm"
          />
        </div>
      ) : null}
      <Image
        src={image}
        alt={imageAlt}
        fill
        preload
        sizes="100vw"
        className="object-cover opacity-35"
        quality={55}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/55" />
      <Container
        className={`relative flex min-h-[42vh] flex-col justify-end pb-12 md:min-h-[50vh] md:pb-16 ${showCta ? "pt-10" : "pt-32"}`}
      >
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="display mt-4 max-w-5xl text-[clamp(2.3rem,6.4vw,5.6rem)]">{title}</h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">{description}</p>
        ) : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/iletisim#teklif"
            className="inline-flex min-h-12 items-center justify-center bg-accent px-6 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-white hover:text-ink"
          >
            Teklif Al →
          </Link>
          {tel ? (
            <a
              href={tel}
              className="inline-flex min-h-12 items-center justify-center border border-white/25 px-6 text-xs font-semibold tracking-[0.18em] uppercase hover:border-white hover:bg-white hover:text-ink"
            >
              Ara · {company.phone}
            </a>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
