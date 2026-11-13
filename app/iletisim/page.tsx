import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { company, mailHref, mobileHref, phoneHref } from "@/data/company";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "İletişim", path: "/iletisim" },
];

export const metadata: Metadata = pageMeta({
  title: "İletişim | Teklif Talebi | KOC Makina CNC",
  description:
    "KOC Makina iletişim: 0212 671 33 67, info@kocmakinacnc.com, İkitelli OSB Başakşehir. CNC torna teklifi için çiziminizi gönderin.",
  path: "/iletisim",
});

export default function ContactPage() {
  const phone = phoneHref();
  const mobile = mobileHref();
  const email = mailHref();

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="İletişim"
        title={
          <>
            Projenizi
            <br />
            birlikte üretelim.
          </>
        }
        text="Çizim, malzeme ve adet yeter. Telefon, e-posta ve açık adres bu sayfada yer alır."
        crumbs={crumbs}
        showCta={false}
      />
      <section className="bg-paper text-ink">
        <Container className="grid gap-14 py-16 lg:grid-cols-[1.1fr_0.8fr] lg:py-24">
          <ContactForm />
          <aside className="border-t border-ink/15 pt-6 lg:border-t-0 lg:pt-0">
            <h2 className="font-display text-2xl tracking-[-0.03em] uppercase">Teklif için gerekenler</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
              <li>Teknik resim, DXF, DWG, STEP veya STP</li>
              <li>Malzeme tanımı</li>
              <li>Adet ve varsa kritik tolerans</li>
              <li>Numune varsa ölçülerin çizimle doğrulanması</li>
            </ul>
            <h2 className="mt-10 font-display text-2xl tracking-[-0.03em] uppercase">Firma</h2>
            <ul className="mt-5 space-y-3 text-sm text-ink">
              <li>{company.name}</li>
              {company.contactName ? (
                <li>
                  {company.contactName}
                  {company.contactTitle ? (
                    <span className="block text-muted">{company.contactTitle}</span>
                  ) : null}
                </li>
              ) : null}
              {company.address ? <li>{company.address}</li> : null}
              {phone ? (
                <li>
                  <a href={phone}>{company.phone}</a>
                </li>
              ) : null}
              {mobile ? (
                <li>
                  <a href={mobile}>{company.mobile}</a>
                </li>
              ) : null}
              {email ? (
                <li>
                  <a href={email}>{company.email}</a>
                </li>
              ) : null}
            </ul>
          </aside>
        </Container>
      </section>
    </>
  );
}
