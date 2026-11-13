import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/media";
import { Container } from "@/components/ui/Container";

export function CncFeature() {
  return (
    <section className="bg-paper text-ink" aria-labelledby="cnc-torna-baslik">
      <div className="grid items-center lg:grid-cols-2">
        <Container className="py-16 lg:py-24">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-accent uppercase">03 / CNC Torna</p>
          <h2
            id="cnc-torna-baslik"
            className="mt-4 font-display text-[clamp(2rem,4.4vw,3.8rem)] leading-[0.96] font-medium tracking-[-0.035em] uppercase"
          >
            CNC torna ile hassas parça üretimi
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
            <p>
              CNC torna, iş parçasının döndüğü ve kesici takımın çap, alın, kanal ve diş üzerinden talaş kaldırdığı yöntemdir. Mil, burç, flanş ve pim gibi dönel parçalar bu yöntemle üretilir.
            </p>
            <p>
              KOC Makina, CNC torna İstanbul taleplerini teknik çizimdeki malzeme ve toleransa göre değerlendirir. Parça yalnızca dönel değilse CNC işleme aynı plana eklenir. Hassas parça üretimi, metal parça üretimi ve talaşlı imalat burada ayrı sloganlar değil, aynı işin adımlarıdır.
            </p>
            <p>
              Adet düşükse prototip, yüksekse seri üretim mantığı kurulur. Özel parça imalatında katalog kodu aranmaz. Fiyat, geometri ve çevrim süresine göre çıkar. Sabit liste yoktur.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/hizmetler/cnc-torna"
              className="inline-flex min-h-11 items-center text-[11px] font-semibold tracking-[0.18em] text-ink uppercase"
            >
              CNC torna sayfası <span className="ml-2" aria-hidden="true">→</span>
            </Link>
            <Link
              href="/istanbul-cnc-torna"
              className="inline-flex min-h-11 items-center text-[11px] font-semibold tracking-[0.18em] text-accent uppercase"
            >
              CNC torna İstanbul
            </Link>
          </div>
        </Container>
        <div className="relative min-h-[420px] lg:min-h-[680px]">
          <Image
            src={images.turningBrass}
            alt="Pirinç parçanın tornada kesici takım ve talaşla işlenmesi"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[center_30%]"
          />
        </div>
      </div>
    </section>
  );
}
