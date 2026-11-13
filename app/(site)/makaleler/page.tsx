import Link from "next/link";
import { articles } from "@/data/articles";
import { QuoteBand } from "@/components/home/QuoteBand";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Makaleler", path: "/makaleler" },
];

export const metadata = pageMeta({
  title: "CNC Makaleleri İstanbul",
  description:
    "İstanbul ve İkitelli odaklı CNC torna, freze, talaşlı imalat ve teklif rehberleri. Koç Makina makale arşivi.",
  path: "/makaleler",
  image: "/images/cnc-torna-kesim.jpg",
  imageAlt: "CNC tornada kesici uç ile işlenen çelik mil",
});

export default function ArticlesIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Makaleler"
        title="CNC makaleleri: İstanbul ve İkitelli"
        description="İstanbul ve İkitelli odaklı teknik rehberler: torna, freze, prototip, seri üretim ve teklif süreci."
        image="/images/cnc-torna-kesim.jpg"
        imageAlt="CNC tornada kesici uç ile işlenen çelik mil"
      />
      <Breadcrumbs items={crumbs} />
      <Container className="py-16 lg:py-24">
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/makaleler/${article.slug}`}
                className="group grid gap-3 py-8 md:grid-cols-12 md:items-end"
              >
                <span className="text-xs tracking-[0.14em] text-ink/45 uppercase md:col-span-2">
                  {new Date(article.publishedAt).toLocaleDateString("tr-TR")}
                </span>
                <span className="font-display text-2xl uppercase md:col-span-4 md:text-3xl">{article.title}</span>
                <span className="text-ink/70 md:col-span-5">{article.excerpt}</span>
                <span className="text-sm tracking-[0.16em] uppercase transition-transform group-hover:translate-x-1 md:col-span-1 md:text-right">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <QuoteBand />
    </>
  );
}
