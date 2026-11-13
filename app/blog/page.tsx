import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { blogPosts } from "@/data/blog";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Blog", path: "/blog" },
];

export const metadata: Metadata = pageMeta({
  title: "Blog | Web Tasarım ve Üretim Notları | KOC Makina",
  description:
    "KOC Makina blog: sanayi firmaları için web tasarım, kurumsal site ve CNC üretimi üzerine kısa yazılar.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Blog"
        title="Üretim ve dijital notlar"
        text="Kısa yazılar: kurumsal web sitesi, web tasarım ve atölye iletişim dili. Abartısız, ölçülü anlatım."
        crumbs={crumbs}
      />
      <section className="bg-paper text-ink">
        <Container className="py-16 lg:py-24">
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group grid gap-3 py-8 md:grid-cols-[140px_1fr_auto] md:items-baseline">
                  <time dateTime={post.publishedAt} className="text-[11px] tracking-[0.16em] text-muted uppercase">
                    {post.publishedAt}
                  </time>
                  <span>
                    <span className="block font-display text-2xl tracking-[-0.03em] uppercase transition-colors group-hover:text-accent md:text-3xl">
                      {post.title}
                    </span>
                    <span className="mt-3 block max-w-2xl text-sm leading-relaxed text-muted">{post.excerpt}</span>
                  </span>
                  <span className="text-[11px] tracking-[0.16em] uppercase">
                    Oku <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
