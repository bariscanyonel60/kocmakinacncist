import { capabilityStrip } from "@/data/navigation";

function Strip({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex items-center" aria-hidden={hidden || undefined}>
      {capabilityStrip.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 font-display text-sm tracking-[0.22em] uppercase md:text-base">{item}</span>
          <span className="text-accent" aria-hidden="true">
            /
          </span>
        </li>
      ))}
    </ul>
  );
}

export function CapabilityMarquee() {
  return (
    <section className="border-y border-ink/10 bg-paper text-ink" aria-label="Üretim başlıkları">
      <div className="overflow-hidden py-4">
        <div className="marquee-track flex w-max items-center">
          <Strip />
          <Strip hidden />
        </div>
      </div>
    </section>
  );
}
