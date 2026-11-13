import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageCtaBar } from "@/components/layout/PageCtaBar";
import { RelatedLinks } from "@/components/layout/RelatedLinks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { company, filled, phoneHref, whatsappHref } from "@/data/company";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Teşekkürler", path: "/tesekkurler" },
];

const steps = [
  "Talebiniz e-posta ile teknik ekibe iletildi.",
  "Çizim, malzeme ve adet okunur; eksik tolerans varsa size sorulur.",
  "Dönüş, formda yazdığınız telefon veya e-posta üzerinden yapılır.",
];

export const metadata = pageMeta({
  title: "Teklif talebi için teşekkürler",
  description:
    "Koç Makina teklif talebiniz iletildi. Teknik resminiz incelenip telefon veya e-posta ile dönüş yapılır.",
  path: "/tesekkurler",
  index: false,
});

export default function ThanksPage() {
  const tel = phoneHref(company.phone);
  const whatsapp = whatsappHref();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageCtaBar
        message="Başka bir parça için yeni çizim gönderebilir veya bizi arayabilirsiniz."
        tone="ink"
        className="pt-[92px]"
      />
      <Breadcrumbs items={crumbs} />
      <Container className="max-w-3xl py-16 lg:py-24">
        <p className="eyebrow text-accent">Teşekkürler</p>
        <h1 className="display mt-4 text-[clamp(2.6rem,6vw,4.8rem)]">Talebiniz alındı.</h1>
        <div className="mt-8 space-y-4 leading-relaxed text-ink/75">
          <p>
            Talebiniz ve eklediğiniz dosyalar teknik değerlendirme için iletildi. Bu sayfa yalnızca
            gönderim başarılı olduğunda açılır.
          </p>
          <ol className="list-decimal space-y-3 border-y border-ink/10 py-6 pl-5">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {tel ? (
            <a
              href={tel}
              className="inline-flex min-h-12 items-center justify-center border border-ink/15 px-5 text-xs font-semibold tracking-[0.16em] uppercase hover:border-ink hover:bg-ink hover:text-white"
            >
              Ara · {company.phone}
            </a>
          ) : null}
          {whatsapp ? (
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center bg-[#128C7E] px-5 text-xs font-semibold tracking-[0.16em] text-white uppercase"
            >
              WhatsApp
            </a>
          ) : null}
          {filled(company.email) ? (
            <a
              href={`mailto:${company.email}`}
              className="inline-flex min-h-12 items-center justify-center border border-ink/15 px-5 text-xs font-semibold tracking-[0.16em] uppercase hover:border-ink"
            >
              {company.email}
            </a>
          ) : null}
          <Link
            href="/iletisim#teklif"
            className="inline-flex min-h-12 items-center justify-center bg-accent px-5 text-xs font-semibold tracking-[0.16em] text-white uppercase hover:bg-ink"
          >
            Yeni teklif →
          </Link>
        </div>
        <div className="mt-14">
          <RelatedLinks
            title="İç linkler"
            links={[
              { href: "/hizmetler/cnc-torna", label: "CNC torna" },
              { href: "/hizmetler/cnc-isleme", label: "CNC freze" },
              { href: "/uretim", label: "Üretim süreci" },
              { href: "/galeri", label: "Üretimden detaylar" },
              { href: "/makine-parkuru", label: "Makine parkuru" },
              { href: "/kurumsal", label: "Firma yaklaşımı" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
