import type { Article } from "@/data/articles";
import { ArticleRichText } from "@/components/articles/ArticleRichText";
import { QuoteBand } from "@/components/home/QuoteBand";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedLinks } from "@/components/layout/RelatedLinks";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, graphJsonLd } from "@/lib/jsonld";

export function ArticleView({ article }: { article: Article }) {
  const path = `/makaleler/${article.slug}`;
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Makaleler", path: "/makaleler" },
    { name: article.title, path },
  ];

  return (
    <>
      <JsonLd data={graphJsonLd([breadcrumbJsonLd(crumbs), articleJsonLd(article)])} />
      <PageHero
        eyebrow="Makale"
        title={article.h1}
        description={article.excerpt}
        image={article.image}
        imageAlt={article.imageAlt}
      />
      <Breadcrumbs items={crumbs} />
      <Container className="max-w-3xl py-16 lg:py-24">
        <p className="text-sm tracking-[0.08em] text-ink/45 uppercase">
          {new Date(article.publishedAt).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <article className="mt-8 space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading ?? section.paragraphs[0]?.slice(0, 24)} className="space-y-4">
              {section.heading ? (
                <h2 className="font-display text-2xl uppercase tracking-[-0.03em] text-ink">{section.heading}</h2>
              ) : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-ink/80">
                  <ArticleRichText text={paragraph} />
                </p>
              ))}
            </section>
          ))}
        </article>
        <div className="mt-14">
          <RelatedLinks title="İlgili sayfalar" links={article.related} />
        </div>
      </Container>
      <QuoteBand />
    </>
  );
}
