"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { galleryCategories, type GalleryCategory, type GalleryItem } from "@/data/gallery";
import { cloudinaryVideoUrl } from "@/lib/cloudinary";
import { cn } from "@/lib/cn";

function categoryLabel(category: GalleryItem["category"]) {
  switch (category) {
    case "cnc-torna":
      return "CNC Torna";
    case "cnc-freze":
      return "CNC Freze";
    case "parcalar":
      return "Parçalar";
    case "uretim":
      return "Üretim";
    case "kalite":
      return "Kalite";
    case "makine":
      return "Makine Parkuru";
    case "atolye":
      return "Atölye";
    default: {
      const unreachable: never = category;
      return unreachable;
    }
  }
}

const swipeThreshold = 48;

export function GalleryExplorer({
  items,
  showFilters = true,
}: {
  items: GalleryItem[];
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<GalleryCategory>("tumu");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const titleId = useId();
  const visible = filter === "tumu" ? items : items.filter((item) => item.category === filter);
  const filters = galleryCategories.filter(
    (category) => category.id === "tumu" || items.some((item) => item.category === category.id),
  );
  const active = activeIndex === null ? null : (visible[activeIndex] ?? null);

  const step = (direction: 1 | -1) =>
    setActiveIndex((current) =>
      current === null ? current : (current + direction + visible.length) % visible.length,
    );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
    if (event.key === "Escape") dialogRef.current?.close();
  };

  return (
    <div>
      {showFilters ? (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Galeri filtreleri">
          {filters.map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={filter === category.id}
              onClick={() => setFilter(category.id)}
              className={cn(
                "min-h-11 border px-4 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors",
                filter === category.id ? "border-ink bg-ink text-white" : "border-ink/15 text-ink hover:border-accent",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      ) : null}

      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((item, index) => (
          <li key={item.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              className="group relative block w-full overflow-hidden bg-ink text-left"
              onClick={() => setActiveIndex(index)}
              aria-label={`${item.title} görselini büyüt`}
            >
              <span className={cn("relative block", index % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/4]")}>
                {item.type === "video" ? (
                  <video
                    src={cloudinaryVideoUrl(item.src, { width: 800 })}
                    aria-label={item.alt}
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                )}
              </span>
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/90 to-transparent p-4 text-white">
                <span>
                  <span className="block text-[10px] tracking-[0.18em] text-metal uppercase">
                    {categoryLabel(item.category)}
                  </span>
                  <span className="mt-1 block font-display text-xl uppercase">{item.title}</span>
                </span>
                <span className="text-xs tracking-[0.16em] text-accent uppercase">Detay →</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="m-auto max-h-[92vh] w-[min(100%-1.5rem,1100px)] overflow-auto bg-ink p-0 text-white backdrop:bg-black/85"
        onClose={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        onKeyDown={onKeyDown}
      >
        {active ? (
          <div>
            <div
              className="relative aspect-[16/10] bg-black"
              onTouchStart={(event) => {
                touchStart.current = event.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                const start = touchStart.current;
                const end = event.changedTouches[0]?.clientX;
                touchStart.current = null;
                if (start === null || end === undefined) return;
                if (Math.abs(end - start) < swipeThreshold) return;
                step(end < start ? 1 : -1);
              }}
            >
              {active.type === "video" ? (
                <video
                  src={cloudinaryVideoUrl(active.src, { width: 1280 })}
                  aria-label={active.alt}
                  controls
                  autoPlay
                  playsInline
                  className="absolute inset-0 size-full object-contain"
                />
              ) : (
                <Image key={active.src} src={active.src} alt={active.alt} fill sizes="1100px" className="object-contain" />
              )}
              {visible.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className="absolute top-1/2 left-2 grid h-11 w-11 -translate-y-1/2 place-items-center bg-ink/70 hover:bg-accent"
                  >
                    <span className="sr-only">Önceki görsel</span>
                    <ChevronLeft size={20} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    className="absolute top-1/2 right-2 grid h-11 w-11 -translate-y-1/2 place-items-center bg-ink/70 hover:bg-accent"
                  >
                    <span className="sr-only">Sonraki görsel</span>
                    <ChevronRight size={20} aria-hidden="true" />
                  </button>
                </>
              ) : null}
            </div>
            <div className="flex items-center justify-between gap-4 p-4">
              <div>
                <p className="text-[10px] tracking-[0.18em] text-metal uppercase">
                  {categoryLabel(active.category)} · {(activeIndex ?? 0) + 1} / {visible.length}
                </p>
                <p id={titleId} className="mt-1 font-display text-xl uppercase">
                  {active.title}
                </p>
                <p className="mt-1 text-sm text-mist">{active.alt}</p>
              </div>
              <button
                type="button"
                className="grid h-11 w-11 shrink-0 place-items-center border border-white/20 hover:border-accent"
                onClick={() => dialogRef.current?.close()}
              >
                <span className="sr-only">Kapat</span>
                <X size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
