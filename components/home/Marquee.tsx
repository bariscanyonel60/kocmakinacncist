const items = [
  "CNC Torna",
  "Hassas İşleme",
  "Seri Üretim",
  "Prototip Üretim",
  "Özel Parça İmalatı",
  "Kalite Kontrol",
];

function Row() {
  return (
    <ul className="flex items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 py-4 text-[12px] font-semibold tracking-[0.22em] uppercase md:px-8">{item}</span>
          <span className="text-accent" aria-hidden="true">
            •
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <section aria-label="Üretim yetenekleri" className="overflow-hidden border-y border-white/10 bg-ink-2 text-white">
      <div className="marquee-track flex">
        <Row />
        <div aria-hidden="true">
          <Row />
        </div>
      </div>
    </section>
  );
}
