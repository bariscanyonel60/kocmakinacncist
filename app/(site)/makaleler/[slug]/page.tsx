import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/articles";
import { ArticleView } from "@/components/articles/ArticleView";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMeta({
    title: article.seoTitle,
    description: article.seoDescription,
    path: `/makaleler/${article.slug}`,
    image: article.image,
    imageAlt: article.imageAlt,
    absolute: true,
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleView article={article} />;
}
