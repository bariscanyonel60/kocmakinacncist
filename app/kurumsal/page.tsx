import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { images } from "@/data/media";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Kurumsal", path: "/kurumsal" },
];

export const metadata: Metadata = pageMeta({
  title: "Kurumsal | KOC Makina CNC İstanbul",
  description:
    "KOC Makina kurumsal: İkitelli’de CNC torna ve talaşlı imalat. Çizim, yöntem seçimi ve ölçü disipliniyle çalışan üretim atölyesi.",
  path: "/kurumsal",
});

const principles = [
  {
    title: "Çizim konuşur",
    text: "Parça; malzeme, tolerans ve geometri yazılmadan tezgaha alınmaz. Eksik ölçü tahminle kapatılmaz.",
  },
  {
    title: "Yöntem parçaya göre seçilir",
    text: "Dönel form CNC tornada, prizmatik yüzey CNC işlemede planlanır. İkisi gerekirse aynı iş emrinde sıralanır.",
  },
  {
    title: "Tekrar aynı şartnamedir",
    text: "Prototip ile seri arasındaki fark adettir. Kabul ölçüsü değişmez.",
  },
  {
    title: "Söylenmeyen rakam yazılmaz",
    text: "Kuruluş yılı, tezgah adedi ve sertifika yalnızca doğrulanmış kayıt olduğunda yayınlanır. Kapasite özeti kartvizitteki tezgah tanımlarıyla sınırlıdır.",
  },
];

export default function CorporatePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Kurumsal"
        title="Üretimi teknik dille anlatan bir atölye"
        text="KOC Makina, İstanbul’da CNC torna ve hassas talaşlı imalat alanında çalışan bir sanayi kuruluşudur."
        crumbs={crumbs}
      />
      <section className="bg-paper text-ink">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              İşin merkezi parçadır. Müşteri teknik resim, model veya numune getirir. Biz malzeme, tolerans ve bağlama açısından okuruz. Uygun yöntem CNC torna, CNC işleme veya ikisinin sırasıdır.
            </p>
            <p>
              Kurumsal duruş, büyük vaat cümlesi kurmak değildir. Ölçüsü net parçayı kararlı biçimde üretmek, revizyonu karıştırmamak ve kontrol edilmemiş parçayı sevk etmemektir.
            </p>
            <p>
              Farklı sektörlerden gelen talepler aynı tezgah diline iner: çap, boy, yüzey, delik ve adet. Sektör adı, parçanın çiziminden daha belirleyici değildir.
            </p>
          </div>
          <div className="relative min-h-[360px]">
            <Image
              src={images.shaftTurning}
              alt="Torna tezgahında çelik milin işlenmesi"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
        <Container className="pb-20">
          <h2 className="font-display text-3xl tracking-[-0.03em] uppercase">Çalışma ilkeleri</h2>
          <ul className="mt-8 grid gap-px bg-ink/10 md:grid-cols-2">
            {principles.map((item) => (
              <li key={item.title} className="bg-paper p-6">
                <h3 className="font-display text-2xl tracking-[-0.03em] uppercase">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
