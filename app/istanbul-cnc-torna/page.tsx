import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { FaqList } from "@/components/home/FaqList";
import { QuoteBand } from "@/components/home/QuoteBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import type { Faq } from "@/data/faq";
import { breadcrumbJsonLd, faqJsonLd, graphJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "İstanbul CNC Torna", path: "/istanbul-cnc-torna" },
];

const faqs: Faq[] = [
  {
    question: "İstanbul dışından çizim gönderebilir miyim?",
    answer:
      "Evet. Teknik resim ve model dijital iletilir, üretim İstanbul'da planlanır. Numune gerekiyorsa kargo ayrıca konuşulur. İlçe bazlı bir servis haritası yayınlanmaz.",
  },
  {
    question: "İstanbul CNC işleme ile torna aynı teklifte olur mu?",
    answer:
      "Parça hem döner hem prizmatik yüzey istiyorsa iki operasyon tek planda birleşir. Ayrı ayrı fiyat uydurulmaz; rota birlikte yazılır.",
  },
  {
    question: "Yerinde keşif yapıyor musunuz?",
    answer:
      "Standart iş akışı çizim ve numune üzerindedir. Yerinde keşif, adres ve kapsam netleşmeden vaat edilmez.",
  },
  {
    question: "İstanbul içi teslimat süresi sabit mi?",
    answer:
      "Sabit bir saat veya gün ilan edilmez. Süre malzeme, operasyon ve adede göre teklifte yazılır.",
  },
  {
    question: "Semt veya sanayi sitesi adı neden yok?",
    answer:
      "Açık adres doğrulanmadan yayınlanmaz. Adres firma kaydına girildiğinde iletişim sayfasında görünür.",
  },
];

export const metadata = pageMeta({
  title: "İstanbul CNC Torna",
  description:
    "Koç Makina CNC İstanbul'da CNC torna, CNC işleme ve talaşlı imalat taleplerini teknik çizim üzerinden değerlendirir.",
  path: "/istanbul-cnc-torna",
});

export default function IstanbulPage() {
  return (
    <>
      <JsonLd
        data={graphJsonLd([
          breadcrumbJsonLd(crumbs),
          faqJsonLd(faqs),
          serviceJsonLd({
            name: "İstanbul CNC Torna",
            description:
              "İstanbul'da teknik resme göre CNC torna ve tamamlayıcı CNC işleme planı.",
            path: "/istanbul-cnc-torna",
          }),
        ])}
      />
      <PageHero
        eyebrow="İstanbul"
        title="İstanbul CNC torna ve hassas işleme"
        description="Koç Makina'nın üretim odağı İstanbul'dur. Bu sayfa, şehirdeki bir alıcının çizimi nasıl ileteceğini ve teklifin nelere baktığını anlatır."
        image="/images/cnc-alin-freze.jpg"
        imageAlt="Metal parça üzerinde alın freze kafası"
      />
      <Breadcrumbs items={crumbs} />
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <article className="space-y-5 leading-relaxed text-ink/80 lg:col-span-7">
          <p>
            İstanbul CNC torna araması çoğu zaman hazır bir fiyat değil, belirli bir parçanın kim tarafından işleneceğini sorar. Koç Makina bu soruyu mil, burç, flanş ve benzeri döner parçalar için teknik resim üzerinden yanıtlar.
          </p>
          <p>
            Şehir içi olmanın ölçüsü, uydurma teslim süresi değildir. Çizim dijital gelir, malzeme ve adet netleşir, operasyon yazılır. Parçada cep veya konum toleranslı delik varsa İstanbul CNC işleme aynı değerlendirmeye eklenir. Talaşlı imalat kararı, sac kesim veya kaynakla karıştırılmaz.
          </p>
          <p>
            Hassas parça üretimi İstanbul taleplerinde de resimdeki toleransa bağlıdır. Genel bir mikron vaadi yoktur. Seri üretim, tekrar eden adet için rota sabitlenerek planlanır. Tek parça ise prototip gibi ele alınır.
          </p>
          <p>
            Atölye adresi, telefon ve çalışma saati firma kaydına girildiğinde sitede görünür. O bilgiler doğrulanmadan semt veya sanayi sitesi adı yazılmaz.
          </p>
          <p>
            Yöntemin ayrıntısı için{" "}
            <Link href="/hizmetler/cnc-torna" className="border-b border-ink hover:border-accent hover:text-accent">
              CNC torna
            </Link>{" "}
            sayfasına, çizim göndermek için{" "}
            <Link href="/iletisim" className="border-b border-ink hover:border-accent hover:text-accent">
              teklif formuna
            </Link>{" "}
            geçebilirsiniz.
          </p>
        </article>
        <aside className="border border-ink/10 p-6 lg:col-span-5">
          <h2 className="font-display text-2xl uppercase">Teklifte sorulanlar</h2>
          <ol className="mt-6 space-y-4 text-sm leading-relaxed">
            <li>1. Parça torna mı, işleme mi, ikisi birden mi?</li>
            <li>2. Malzeme resimde yazılı mı?</li>
            <li>3. Adet prototip mi, parti mi?</li>
            <li>4. Hangi ölçüler kritik?</li>
          </ol>
        </aside>
      </Container>
      <FaqList faqs={faqs} title="İstanbul üretimi" />
      <QuoteBand />
    </>
  );
}
