import { ContactForm } from "@/components/contact/ContactForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { company, filled, phoneHref } from "@/data/company";
import { PageFaq } from "@/components/layout/PageFaq";
import { contactFaqs } from "@/data/faq";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "İletişim", path: "/iletisim" },
];

export const metadata = pageMeta({
  title: "Teklif ve İletişim",
  description:
    "CNC torna ve talaşlı imalat teklifi için teknik çiziminizi Koç Makina'ya iletin. Malzeme, adet ve termin bilgisiyle parça özelinde teklif hazırlanır.",
  path: "/iletisim",
});

export default function ContactPage() {
  const tel = phoneHref(company.phone);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="İletişim"
        title="Projenizi birlikte üretelim."
        description="Parça resmi, malzeme ve adet teklifin hammaddesidir. Eksik kritik ölçü varsa işlemeye geçilmez."
        image="/images/cnc-torna-kesim.jpg"
        imageAlt="Teklif değerlendirmesine esas CNC torna işleme görüntüsü"
      />
      <Breadcrumbs items={crumbs} />
      <Container className="grid gap-14 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <aside className="h-fit border border-ink/10 bg-white p-6 lg:col-span-5">
          <p className="eyebrow text-accent">Teklif için</p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink/75">
            <li>Teknik resim (PDF, DXF, DWG), STEP/STP modeli veya numune</li>
            <li>Malzeme</li>
            <li>Adet ve termin</li>
            <li>Kritik tolerans ve yüzey notu</li>
            <li>Varsa kaplama veya ısıl işlem beklentisi — işleme kapsamı dışında ayrıca belirtilir</li>
          </ul>
          <div className="mt-8 space-y-2 border-t border-ink/10 pt-6 text-sm">
            <p>{company.city}</p>
            {filled(company.address) ? <p>{company.address}</p> : null}
            {tel ? <a href={tel}>{company.phone}</a> : null}
            {filled(company.email) ? <a href={`mailto:${company.email}`}>{company.email}</a> : null}
          </div>
        </aside>
      </Container>
      <PageFaq faqs={contactFaqs} title="İletişim soruları" />
    </>
  );
}
