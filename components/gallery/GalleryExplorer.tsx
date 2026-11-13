"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { galleryFilters, type GalleryFilter, type GalleryItem } from "@/data/gallery";

export function GalleryExplorer({
  items,
  showFilters = true,
}: {
  items: GalleryItem[];
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<GalleryFilter>("tumu");
  const [activeId, setActiveId] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const visible = filter === "tumu" ? items : items.filter((item) => item.category === filter);
  const active = visible.find((item) => item.id === activeId) ?? null;
  const activeIndex = active ? visible.findIndex((item) => item.id === active.id) : -1;

  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
      if (event.key === "ArrowRight") {
        const next = visible[(activeIndex + 1) % visible.length];
        if (next) setActiveId(next.id);
      }
      if (event.key === "ArrowLeft") {
        const previousItem = visible[(activeIndex - 1 + visible.length) % visible.length];
        if (previousItem) setActiveId(previousItem.id);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, activeIndex, visible]);

  return (
    <div>
      {showFilters ? (
        <div className="mb-8 flex flex-wrap gap-2" role="toolbar" aria-label="Galeri filtreleri">
          {galleryFilters.map((item) => {
            const selected = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setFilter(item.id);
                  setActiveId(null);
                }}
                className={`min-h-11 px-4 text-[11px] tracking-[0.16em] uppercase ${
                  selected ? "bg-ink text-white" : "border border-ink/15 text-ink hover:border-accent"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      ) : null}

      {visible.length === 0 ? (
        <p className="text-muted">Bu filtrede görsel yok.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <li key={item.id} className="bg-paper">
              <button
                type="button"
                onClick={() => setActiveId(item.id)}
                className="group relative block w-full text-left"
              >
                <span className="relative block aspect-[4/5] overflow-hidden bg-ink sm:aspect-[5/4]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </span>
                <span className="flex items-center justify-between gap-4 px-1 py-4">
                  <span>
                    <span className="block font-display text-lg tracking-[-0.03em] text-ink uppercase">{item.title}</span>
                    <span className="mt-1 block text-xs tracking-[0.14em] text-metal uppercase">
                      {galleryFilters.find((entry) => entry.id === item.category)?.label}
                    </span>
                  </span>
                  <span className="text-[11px] tracking-[0.16em] text-ink uppercase">
                    Detay <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActiveId(null)}
        >
          <div
            className="grid w-full max-w-5xl gap-6 bg-ink md:grid-cols-[1.4fr_0.8fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[320px] md:min-h-[560px]">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col p-6 text-white md:py-8 md:pr-8 md:pl-0">
              <p className="text-[11px] tracking-[0.2em] text-accent uppercase">
                {galleryFilters.find((entry) => entry.id === active.category)?.label}
              </p>
              <h2 id={titleId} className="mt-3 font-display text-3xl tracking-[-0.03em] uppercase">
                {active.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-metal">{active.caption}</p>
              <p className="mt-6 text-xs text-metal">Temsili üretim görseli. Müşteri proje kaydı değildir.</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <button
                  type="button"
                  className="min-h-11 border border-white/20 px-4 text-[11px] tracking-[0.16em] uppercase"
                  onClick={() => {
                    const previousItem = visible[(activeIndex - 1 + visible.length) % visible.length];
                    if (previousItem) setActiveId(previousItem.id);
                  }}
                >
                  Önceki
                </button>
                <button
                  type="button"
                  className="min-h-11 border border-white/20 px-4 text-[11px] tracking-[0.16em] uppercase"
                  onClick={() => {
                    const next = visible[(activeIndex + 1) % visible.length];
                    if (next) setActiveId(next.id);
                  }}
                >
                  Sonraki
                </button>
                <button
                  ref={closeRef}
                  type="button"
                  className="min-h-11 bg-white px-4 text-[11px] tracking-[0.16em] text-ink uppercase"
                  onClick={() => setActiveId(null)}
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
