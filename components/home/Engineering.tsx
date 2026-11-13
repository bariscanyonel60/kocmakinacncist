import { Container } from "@/components/ui/Container";

export function Engineering() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-36" aria-labelledby="muhendislik-baslik">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]" aria-hidden="true">
        <defs>
          <pattern id="fine-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="white" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fine-grid)" />
        <g stroke="white" fill="none" strokeWidth="0.6">
          <path d="M8% 22% H34%" />
          <path d="M8% 22% v8" />
          <path d="M34% 22% v8" />
          <circle cx="62%" cy="68%" r="72" />
          <path d="M62% 68% H78%" />
        </g>
      </svg>
      <Container className="relative">
        <p className="text-[11px] font-semibold tracking-[0.28em] text-accent uppercase">06 / Ölçü</p>
        <h2
          id="muhendislik-baslik"
          className="mt-5 max-w-5xl font-display text-[clamp(2.5rem,6.5vw,5.6rem)] leading-[0.92] font-medium tracking-[-0.04em] uppercase"
        >
          Mikronların önemli
          <br />
          olduğu yerdeyiz.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-metal md:text-lg">
          Hassas üretim yaklaşımımızla teknik çizimleri yüksek kaliteli metal parçalara dönüştürüyoruz.
        </p>
      </Container>
    </section>
  );
}
