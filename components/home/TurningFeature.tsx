import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function TurningFeature() {
  return (
    <section className="bg-white text-ink">
      <Container className="grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-6">
          <p className="eyebrow text-accent">CNC Torna İstanbul</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.4vw,4.4rem)]">CNC torna ile hassas parça üretimi</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75">
            <p>
              CNC torna, iş parçasını döndürüp kesici takımla talaş kaldırarak mil, burç, flanş ve benzeri döner parçaları üretir. KOC Makina bu yöntemi İstanbul&apos;da, teknik resme bağlı metal parça üretimi için kullanır.
            </p>
            <p>
              Parça yalnızca silindirik değilse CNC işleme aynı plana eklenir. Prototipte geometri doğrulanır, seri üretimde operasyon sırası sabitlenir. Özel parça imalatı da katalogdan seçilmez; çizim veya numune ile yürür. Talaşlı imalatın fiyatı malzeme, ölçü, tolerans ve adede göre hesaplanır.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/hizmetler/cnc-torna"
              className="inline-flex min-h-12 items-center bg-ink px-6 py-4 text-xs font-semibold tracking-[0.18em] text-white uppercase hover:bg-accent"
            >
              CNC torna sayfası →
            </Link>
            <Link href="/istanbul-cnc-torna" className="text-xs font-semibold tracking-[0.16em] uppercase hover:text-accent">
              İstanbul CNC torna
            </Link>
          </div>
        </div>
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/images/cnc-taret-talas.jpg"
              alt="Talaş sıçratan CNC torna tareti ve kesici takımlar"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <span className="absolute top-3 left-3 h-6 w-6 border-t border-l border-white" />
            <span className="absolute right-3 bottom-3 h-6 w-6 border-r border-b border-white" />
          </div>
        </div>
      </Container>
    </section>
  );
}
