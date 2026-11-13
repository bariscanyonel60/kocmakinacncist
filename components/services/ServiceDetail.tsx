import Link from "next/link";
import Image from "next/image";
import { getService, type Service } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export function ServiceDetail({ service }: { service: Service }) {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: service.title, path: `/hizmetler/${service.slug}` },
  ];
  const related = service.related
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: service.title,
            description: service.intro,
            path: `/hizmetler/${service.slug}`,
          }),
          faqSchema(service.faqs),
        ]}
      />
      <PageHero eyebrow={service.number} title={service.h1} text={service.intro} crumbs={crumbs} />
      <article className="bg-paper text-ink">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="relative min-h-[360px]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>

        <Container className="pb-16">
          <h2 className="font-display text-3xl tracking-[-0.03em] uppercase">Avantajlar</h2>
          <ul className="mt-8 grid gap-px bg-ink/10 md:grid-cols-3">
            {service.advantages.map((item) => (
              <li key={item.title} className="bg-paper p-6">
                <h3 className="font-display text-xl tracking-[-0.03em] uppercase">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>

        <div className="bg-white">
          <Container className="py-16">
            <h2 className="font-display text-3xl tracking-[-0.03em] uppercase">Üretim süreci</h2>
            <ol className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {service.steps.map((step, index) => (
                <li key={step.title} className="border-t border-ink/15 pt-4">
                  <p className="font-display text-sm text-accent">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-display text-xl uppercase">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </div>

        <Container className="py-16">
          <h2 className="font-display text-3xl tracking-[-0.03em] uppercase">Uygulama alanları</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.applications.map((item) => (
              <li key={item} className="border-t border-ink/15 py-4 text-sm tracking-[0.08em] uppercase">
                {item}
              </li>
            ))}
          </ul>
        </Container>

        <Container className="pb-16">
          <h2 className="mb-8 font-display text-3xl tracking-[-0.03em] uppercase">Sık sorulan sorular</h2>
          <FaqList items={service.faqs} />
          <div className="mt-10">
            <Button href="/iletisim">Teklif talebi oluştur</Button>
          </div>
        </Container>

        <div className="border-t border-ink/10">
          <Container className="py-16">
            <h2 className="font-display text-3xl tracking-[-0.03em] uppercase">İlgili hizmetler</h2>
            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/hizmetler/${item.slug}`} className="flex items-center justify-between gap-4 py-5">
                    <span>
                      <span className="block text-[11px] tracking-[0.18em] text-accent">{item.number}</span>
                      <span className="mt-1 block font-display text-2xl tracking-[-0.03em] uppercase">{item.title}</span>
                    </span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Tüm başlıklar için{" "}
              <Link href="/hizmetler" className="text-ink underline underline-offset-4">
                hizmetler
              </Link>
              , kapasite için{" "}
              <Link href="/makine-parkuru" className="text-ink underline underline-offset-4">
                makine parkuru
              </Link>
              , İstanbul odaklı özet için{" "}
              <Link href="/istanbul-cnc-torna" className="text-ink underline underline-offset-4">
                CNC torna İstanbul
              </Link>{" "}
              veya{" "}
              <Link href="/iletisim" className="text-ink underline underline-offset-4">
                teklif formu
              </Link>
              .
            </p>
          </Container>
        </div>
      </article>
    </>
  );
}
