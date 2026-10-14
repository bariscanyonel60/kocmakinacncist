import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { QuoteBand } from "@/components/home/QuoteBand";
import { PageFaq } from "@/components/layout/PageFaq";
import { aboutFaqs } from "@/data/faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Kurumsal", path: "/kurumsal" },
];

export const metadata = pageMeta({
  title: "Kurumsal",
  description:
    "Koç Makina, İstanbul'da CNC torna ve hassas talaşlı imalat yapan bir üretim firmasıdır. Yaklaşımımız teknik resim, plan ve ölçü kontrolüdür.",
  path: "/kurumsal",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Kurumsal"
        title="Teknik resimden üretime"
        description="Koç Makina, İstanbul'da CNC torna ve talaşlı imalat ile metal parça üretir. Anlatım, doğrulanmış işin sınırında kalır."
        image="/images/cnc-torna-mil.jpg"
        imageAlt="CNC tornada işlenen çelik mil"
      />
      <Breadcrumbs items={crumbs} />
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <article className="space-y-5 text-base leading-relaxed text-ink/80 lg:col-span-7">
          <p>
            Koç Makina, İstanbul&apos;da CNC torna ve hassas talaşlı imalat alanlarında üretim çözümleri sunan bir sanayi kuruluşudur. İşin merkezi gösterişli vaat değil, parçanın teknik resmidir.
          </p>
          <p>
            Gelen talep önce geometri, malzeme ve tolerans olarak okunur. Parça döner formdaysa CNC torna, prizmatikse CNC işleme, her ikisi gerekiyorsa birleşik rota yazılır. Prototip ile seri üretim aynı kapıdan girer; adet değişince bağlama ve kontrol planı değişir.
          </p>
          <p>
            Kuruluş yılı, tezgâh adedi, çalışan sayısı ve sertifika gibi rakamlar bu sayfada yoktur. Doğrulanmadan yayınlanan kapasite, güven vermez. Bu bilgiler netleştiğinde tek bir firma kaydından siteye işlenir.
          </p>
          <h2 className="pt-6 font-display text-3xl uppercase">Nasıl çalışırız</h2>
          <p>
            Çizim, STEP modeli veya numune ile başlarız. Eksik kritik ölçü varsa işlemeye geçmeyiz. Teklif; malzeme, operasyon, adet ve kontrol kapsamına göre çıkar. Onaydan sonra parça işlenir, resimdeki ölçülerle karşılaştırılır ve teslimata hazırlanır.
          </p>
          <p>
            Kaplama, kaynak ve ısıl işlem hizmet listesinde değildir. Bu işlemler gerekiyorsa kapsam baştan ayrılır, işleme fiyatının içine gizlenmez. Yöntemler{" "}
            <Link href="/hizmetler" className="border-b border-ink hover:border-accent hover:text-accent">
              hizmetler
            </Link>
            , sıra{" "}
            <Link href="/uretim" className="border-b border-ink hover:border-accent hover:text-accent">
              üretim süreci
            </Link>
            , çizim göndermek{" "}
            <Link href="/iletisim" className="border-b border-ink hover:border-accent hover:text-accent">
              teklif formu
            </Link>{" "}
            sayfasındadır.
          </p>
        </article>
        <aside className="h-fit border border-ink/10 bg-white p-6 lg:col-span-5">
          <p className="eyebrow text-accent">Çalışma ilkesi</p>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed">
            <li className="border-t border-ink/10 pt-4">Teknik resim esastır.</li>
            <li className="border-t border-ink/10 pt-4">Eksik tolerans varsayılmaz.</li>
            <li className="border-t border-ink/10 pt-4">Prototip, seri planın provasıdır.</li>
            <li className="border-t border-ink/10 pt-4">Ölçü tutmayan parça sevkiyata çıkmaz.</li>
          </ul>
        </aside>
      </Container>
      <PageFaq faqs={aboutFaqs} title="Kurumsal sorular" />
      <QuoteBand />
    </>
  );
}
