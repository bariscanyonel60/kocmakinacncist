import { ContactForm } from "@/components/contact/ContactForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedLinks } from "@/components/layout/RelatedLinks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { company, filled, phoneHref, whatsappHref } from "@/data/company";
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
    "İkitelli OSB — 0212 671 33 67. CNC torna ve freze teklifi için çizim, malzeme ve adet gönderin. WhatsApp ve e-posta: info@kocmakinacnc.com.",
  path: "/iletisim",
  image: "/images/cnc-torna-kesim.jpg",
  imageAlt: "Teklif değerlendirmesine esas CNC torna işleme görüntüsü",
});

export default function ContactPage() {
  const tel = phoneHref(company.phone);
  const mobile = phoneHref(company.phoneMobile);
  const whatsapp = whatsappHref();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="İletişim"
        title="CNC teklif ve iletişim"
        description="Parça resmi, malzeme ve adet teklifin hammaddesidir. Eksik kritik ölçü varsa işlemeye geçilmez."
        image="/images/cnc-torna-kesim.jpg"
        imageAlt="Teklif değerlendirmesine esas CNC torna işleme görüntüsü"
        showCta={false}
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
            {filled(company.founderName) ? (
              <p>
                <span className="font-medium text-ink">{company.founderName}</span>
                {filled(company.founderTitle) ? (
                  <span className="block text-ink/60">{company.founderTitle}</span>
                ) : null}
              </p>
            ) : null}
            {filled(company.address) ? <p>{company.address}</p> : null}
            {tel ? (
              <a href={tel} className="block font-medium text-ink hover:text-accent">
                {company.phone}
              </a>
            ) : null}
            {mobile ? (
              <a href={mobile} className="block hover:text-accent">
                {company.phoneMobile}
              </a>
            ) : null}
            {whatsapp ? (
              <a href={whatsapp} target="_blank" rel="noreferrer" className="block hover:text-accent">
                WhatsApp
              </a>
            ) : null}
            {filled(company.email) ? <a href={`mailto:${company.email}`}>{company.email}</a> : null}
            {filled(company.parkSummary) ? (
              <p className="pt-2 text-xs leading-relaxed text-ink/55">{company.parkSummary}</p>
            ) : null}
          </div>
          <div className="mt-8">
            <RelatedLinks
              title="İç linkler"
              links={[
                { href: "/hizmetler/cnc-torna", label: "CNC torna" },
                { href: "/hizmetler/cnc-isleme", label: "CNC freze" },
                { href: "/uretim", label: "Üretim süreci" },
                { href: "/gizlilik-politikasi", label: "Gizlilik politikası" },
              ]}
            />
          </div>
        </aside>
      </Container>
      <PageFaq faqs={contactFaqs} title="İletişim soruları" />
    </>
  );
}
