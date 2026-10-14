"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { galleryCategories, type GalleryCategory, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/cn";

function categoryLabel(category: GalleryItem["category"]) {
  switch (category) {
    case "cnc-torna":
      return "CNC Torna";
    case "uretim":
      return "Üretim";
    case "parcalar":
      return "Parçalar";
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

export function GalleryExplorer({
  items,
  showFilters = true,
}: {
  items: GalleryItem[];
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<GalleryCategory>("tumu");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const visible = filter === "tumu" ? items : items.filter((item) => item.category === filter);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  return (
    <div>
      {showFilters ? (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Galeri filtreleri">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={filter === category.id}
              onClick={() => setFilter(category.id)}
              className={cn(
                "min-h-11 border px-4 text-[11px] font-semibold tracking-[0.16em] uppercase",
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
              onClick={() => setActive(item)}
            >
              <span className={cn("relative block", index % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/4]")}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </span>
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/90 to-transparent p-4 text-white">
                <span>
                  <span className="block text-[10px] tracking-[0.18em] text-metal uppercase">{categoryLabel(item.category)}</span>
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
        className="m-auto w-[min(100%-1.5rem,960px)] max-h-[90vh] overflow-auto bg-ink p-0 text-white backdrop:bg-black/75"
        onClose={() => setActive(null)}
      >
        {active ? (
          <div>
            <div className="relative aspect-[16/10] bg-black">
              <Image src={active.src} alt={active.alt} fill sizes="960px" className="object-contain" />
            </div>
            <div className="flex items-center justify-between gap-4 p-4">
              <div>
                <p id={titleId} className="font-display text-xl uppercase">
                  {active.title}
                </p>
                <p className="mt-1 text-sm text-mist">{active.alt}</p>
              </div>
              <button
                type="button"
                className="min-h-11 border border-white/20 px-4 text-xs tracking-[0.16em] uppercase"
                onClick={() => dialogRef.current?.close()}
              >
                Kapat
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
