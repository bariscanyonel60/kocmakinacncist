import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export function LegalArticle({
  eyebrow,
  title,
  description,
  path,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  sections: { heading: string; paragraphs: string[] }[];
}) {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: title, path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        image="/images/cnc-torna-taret.jpg"
        imageAlt="CNC torna takım taretinin yakından görünümü"
      />
      <Breadcrumbs items={crumbs} />
      <Container className="max-w-3xl py-16 lg:py-24">
        <article className="space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl uppercase">{section.heading}</h2>
              <div className="mt-4 space-y-3 leading-relaxed text-ink/75">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
          <nav aria-label="İlgili yasal sayfalar" className="border-t border-ink/10 pt-8">
            <p className="eyebrow text-accent">İlgili sayfalar</p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { href: "/gizlilik-politikasi", label: "Gizlilik politikası" },
                { href: "/kvkk", label: "KVKK aydınlatma" },
                { href: "/cerez-politikasi", label: "Çerez politikası" },
                { href: "/iletisim", label: "İletişim formu" },
              ]
                .filter((item) => item.href !== path)
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-accent">
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </article>
      </Container>
    </>
  );
}
