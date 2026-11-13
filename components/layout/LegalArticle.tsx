import type { ReactNode } from "react";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export function LegalArticle({
  title,
  description,
  path,
  children,
}: {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
}) {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: title, path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="Yasal" title={title} text={description} crumbs={crumbs} />
      <article className="bg-paper text-ink">
        <Container className="space-y-5 py-16 text-base leading-relaxed text-muted lg:max-w-3xl">{children}</Container>
      </article>
      <CtaBand />
    </>
  );
}
