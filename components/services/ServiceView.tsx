import Image from "next/image";
import Link from "next/link";
import { relatedServices, type Service } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { FaqList } from "@/components/home/FaqList";
import { QuoteBand } from "@/components/home/QuoteBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd, faqJsonLd, graphJsonLd, serviceJsonLd } from "@/lib/jsonld";

export function ServiceView({ service }: { service: Service }) {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: service.title, path: `/hizmetler/${service.slug}` },
  ];
  const related = relatedServices(service.related);

  return (
    <>
      <JsonLd
        data={graphJsonLd([
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: service.title,
            description: service.seoDescription,
            path: `/hizmetler/${service.slug}`,
          }),
          faqJsonLd(service.faqs),
        ])}
      />
      <PageHero eyebrow="Hizmet" title={service.h1} description={service.intro} image={service.image} imageAlt={service.imageAlt} />
      <Breadcrumbs items={crumbs} />
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <article className="space-y-5 text-base leading-relaxed text-ink/80 lg:col-span-7">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <div className="relative min-h-[320px] lg:col-span-5">
          <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        </div>
      </Container>
      <section className="bg-paper">
        <Container className="py-16 lg:py-20">
          <h2 className="display text-[clamp(2rem,4vw,3.4rem)]">Bu işte ne değişir</h2>
          <ul className="mt-10 grid gap-px bg-ink/10 md:grid-cols-2">
            {service.advantages.map((item, index) => (
              <li key={item.title} className="bg-paper p-6">
                <p className="text-xs tracking-[0.18em] text-accent">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl uppercase">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-white">
        <Container className="grid gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 className="display text-[clamp(2rem,4vw,3.4rem)]">Üretim adımları</h2>
            <ol className="mt-8 border-t border-ink/10">
              {service.steps.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4 border-b border-ink/10 py-4">
                  <span className="font-display text-accent">0{index + 1}</span>
                  <span>
                    <span className="block font-medium">{step.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink/70">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="display text-[clamp(2rem,4vw,3.4rem)]">Uygulama alanları</h2>
            <ul className="mt-8">
              {service.applications.map((item) => (
                <li key={item} className="border-b border-ink/10 py-4 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <FaqList faqs={service.faqs} title="Sorular" />
      <section className="bg-paper">
        <Container className="py-16">
          <h2 className="eyebrow text-ink/50">İlgili hizmetler</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/hizmetler/${item.slug}`} className="group block border border-ink/10 bg-white p-5 hover:border-accent">
                  <span className="text-xs tracking-[0.16em] text-metal">{item.number}</span>
                  <span className="mt-4 flex items-center justify-between font-display text-2xl uppercase">
                    {item.title}
                    <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <QuoteBand />
    </>
  );
}
