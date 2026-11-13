import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { blogPosts, getBlogPost } from "@/data/blog";
import { mediaCredit } from "@/data/media-credit";
import { breadcrumbSchema } from "@/lib/schema";
import { getSiteUrl, pageMeta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "tr-TR",
    mainEntityOfPage: new URL(`/blog/${post.slug}`, getSiteUrl()).toString(),
    author: {
      "@type": "Organization",
      name: "KOC Makina CNC",
    },
    publisher: {
      "@type": "Organization",
      name: "KOC Makina CNC",
      url: getSiteUrl(),
    },
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), articleSchema]} />
      <PageHero
        eyebrow="Blog"
        title={post.title}
        text={post.excerpt}
        crumbs={crumbs}
        showCta={false}
      />
      <article className="bg-paper text-ink">
        <Container className="max-w-3xl py-16 lg:py-24">
          <p className="text-[11px] tracking-[0.16em] text-muted uppercase">
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            {" · "}
            {post.readingMinutes} dk okuma
          </p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Web tasarım ve dijital ajans çalışmaları için{" "}
              <a
                href={mediaCredit.href}
                target="_blank"
                rel="noopener"
                className="text-ink underline underline-offset-4 hover:text-accent"
              >
                {mediaCredit.company}
              </a>{" "}
              sitesini ziyaret edebilirsiniz:{" "}
              <a
                href={mediaCredit.href}
                target="_blank"
                rel="noopener"
                className="text-ink underline underline-offset-4 hover:text-accent"
              >
                bariscanyonel.com
              </a>
              .
            </p>
          </div>

          <aside className="mt-12 border border-ink/15 bg-white p-6">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">Medya / web tasarım</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Bu sitenin web tasarım ve dijital yayın sürecinde {mediaCredit.company} yer almıştır. Stüdyo sitesine geçmek için:
            </p>
            <a
              href={mediaCredit.href}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex text-sm font-medium text-ink underline underline-offset-4 hover:text-accent"
            >
              {mediaCredit.label} — {mediaCredit.href.replace("https://", "")}
            </a>
            <ul className="mt-4 space-y-2 text-sm">
              {post.externalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener" className="text-ink underline underline-offset-4 hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/blog" variant="ghost">
              Tüm yazılar
            </Button>
            <Button href="/iletisim">Teklif Al</Button>
          </div>

          <p className="mt-8 text-sm text-muted">
            Üretim tarafı için{" "}
            <Link href="/hizmetler" className="text-ink underline underline-offset-4">
              hizmetler
            </Link>{" "}
            ve{" "}
            <Link href="/kurumsal" className="text-ink underline underline-offset-4">
              kurumsal
            </Link>{" "}
            sayfalarına bakabilirsiniz.
          </p>
        </Container>
      </article>
      <CtaBand />
    </>
  );
}
