import { Container } from "@/components/ui/Container";

export function EngineeringBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="datum-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-8 border border-white/10 md:inset-14" aria-hidden="true" />
      <span className="absolute top-10 left-10 font-mono text-[10px] tracking-[0.22em] text-metal" aria-hidden="true">
        DATUM A
      </span>
      <span className="absolute right-10 bottom-10 font-mono text-[10px] tracking-[0.22em] text-metal" aria-hidden="true">
        X — Y
      </span>
      <Container className="relative py-28 text-center md:py-36">
        <h2 className="display mx-auto max-w-5xl text-[clamp(2.4rem,6vw,5.6rem)]">
          Mikronların önemli
          <span className="block">olduğu yerdeyiz.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
          Hassas üretim yaklaşımımızla teknik çizimleri yüksek kaliteli metal parçalara dönüştürüyoruz.
        </p>
      </Container>
    </section>
  );
}
