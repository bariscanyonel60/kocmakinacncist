import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import type { FaqItem } from "@/data/faq";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "CNC Torna İstanbul", path: "/istanbul-cnc-torna" },
];

const faqs: FaqItem[] = [
  {
    question: "KOC Makina yalnızca İstanbul içinden iş mi alır?",
    answer:
      "Atölye Başakşehir İkitelli OSB’dedir. Çizimi net olan talepler şehre göre değil, üretilebilirliğe göre değerlendirilir. Açık adres iletişim sayfasındadır.",
  },
  {
    question: "İstanbul CNC işleme ile CNC torna aynı teklifte olur mu?",
    answer:
      "Parça hem dönel hem prizmatikse evet. Torna ve işleme ayrı sayfalarda anlatılır, tek bir teknik talepte birleşebilir.",
  },
  {
    question: "Yerinde keşif veya aynı gün teslim vaadi var mı?",
    answer:
      "Hayır. Termin, malzeme ve operasyon süresi netleşince konuşulur. Uydurma teslim süresi yayınlanmaz.",
  },
];

export const metadata: Metadata = pageMeta({
  title: "CNC Torna İstanbul | İstanbul CNC İşleme | KOC Makina",
  description:
    "Başakşehir İkitelli’de CNC torna İstanbul talepleri: teknik çizimle teklif, talaşlı imalat ve hassas parça. KOC Makina iletişim bilgileri.",
  path: "/istanbul-cnc-torna",
});

export default function IstanbulPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
          serviceSchema({
            name: "CNC Torna İstanbul",
            description:
              "İstanbul’da CNC torna ve talaşlı imalat taleplerinin teknik çizim üzerinden değerlendirilmesi.",
            path: "/istanbul-cnc-torna",
          }),
        ]}
      />
      <PageHero
        eyebrow="İstanbul"
        title="İstanbul’da CNC torna"
        text="Bu sayfa torna tezgahının teknik anlatımı değildir. İstanbul’dan gelen bir üretim talebinin nasıl okunduğunu anlatır."
        crumbs={crumbs}
      />
      <article className="bg-paper text-ink">
        <Container className="space-y-5 py-16 text-base leading-relaxed text-muted md:text-lg lg:max-w-3xl lg:py-24">
          <p>
            KOC Makina CNC İstanbul’da CNC torna, CNC işleme ve talaşlı imalat taleplerini teknik resim üzerinden alır. Arayan kişinin ihtiyacı çoğu zaman “şehirdeki bir atölye” değil, ölçüsü belli metal parçadır. Şehir bilgisi, parçanın üretilebilirliğinin yerine geçmez.
          </p>
          <p>
            İstanbul CNC işleme ve hassas parça üretimi İstanbul aramaları da aynı kapıya çıkar: malzeme, tolerans, adet. Dosya PDF, DXF, DWG, STEP veya STP olabilir. Fotoğraf tek başına iş emri değildir.
          </p>
          <p>
            Atölye İkitelli OSB, Başakşehir / İstanbul’dadır. Açık adres, telefon ve e-posta iletişim sayfasında yer alır. Bu sayfada çalışma saati veya koordinat uydurulmaz. Teklif kanalı iletişim formudur.
          </p>
          <p>
            Yöntemin kendisi{" "}
            <Link href="/hizmetler/cnc-torna" className="text-ink underline underline-offset-4">
              CNC torna
            </Link>{" "}
            ve{" "}
            <Link href="/hizmetler/talasli-imalat" className="text-ink underline underline-offset-4">
              talaşlı imalat
            </Link>{" "}
            sayfalarında, tekrar edilmeden anlatılır.
          </p>
        </Container>
        <Container className="pb-16">
          <h2 className="mb-6 font-display text-3xl tracking-[-0.03em] uppercase">Yerel sorular</h2>
          <FaqList items={faqs} />
        </Container>
      </article>
      <CtaBand />
    </>
  );
}
