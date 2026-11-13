import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { InternalLinks } from "@/components/ui/InternalLinks";
import { JsonLd } from "@/components/ui/JsonLd";
import { company, mailHref, phoneHref } from "@/data/company";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Teşekkür", path: "/tesekkur" },
];

export const metadata: Metadata = pageMeta({
  title: "Teşekkürler | KOC Makina",
  description:
    "KOC Makina ile iletişime geçtiğiniz için teşekkürler. Teklif ve üretim süreci hakkında sonraki adımlar.",
  path: "/tesekkur",
  noIndex: true,
});

export default function ThanksPage() {
  const phone = phoneHref();
  const email = mailHref();

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Teşekkürler"
        title="Mesajınızı aldık."
        text="Bu sayfa, iletişim sonrası yönlendirme içindir. Form altyapısı bağlanana kadar otomatik kayıt oluşmaz; telefon veya e-posta ile de ulaşabilirsiniz."
        crumbs={crumbs}
        showCta={false}
      />
      <section className="bg-paper text-ink">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_0.9fr] lg:py-24">
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              Teklif değerlendirmesi teknik çizim, malzeme ve adet üzerinden yapılır. Dosyanızı henüz göndermediyseniz{" "}
              <Link href="/iletisim" className="text-ink underline underline-offset-4">
                iletişim
              </Link>{" "}
              sayfasından veya e-posta ile paylaşabilirsiniz.
            </p>
            <ul className="space-y-3 text-sm text-ink">
              <li>{company.name}</li>
              {company.address ? <li>{company.address}</li> : null}
              {phone ? (
                <li>
                  <a href={phone}>{company.phone}</a>
                </li>
              ) : null}
              {email ? (
                <li>
                  <a href={email}>{company.email}</a>
                </li>
              ) : null}
            </ul>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="/">Ana sayfaya dön</Button>
              <Button href="/hizmetler" variant="ghost">
                Hizmetleri incele
              </Button>
            </div>
          </div>
          <InternalLinks title="Üretime dair sayfalar" />
        </Container>
      </section>
    </>
  );
}
