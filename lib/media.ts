import { cacheLife, cacheTag } from "next/cache";
import { galleryCategories, galleryItems, type GalleryItem } from "@/data/gallery";
import { cloudinaryEnabled } from "@/lib/cloudinary";

type MediaRecord = {
  type: "image" | "video";
  publicId: string;
  title: string;
  alt: string;
  category: string;
};

const categoryIds = new Set<string>(galleryCategories.map((category) => category.id));

function isGalleryCategory(value: string): value is GalleryItem["category"] {
  return value !== "tumu" && categoryIds.has(value);
}

function toGalleryItem(record: MediaRecord): GalleryItem | null {
  if (!isGalleryCategory(record.category)) return null;
  return {
    src: record.publicId,
    alt: record.alt,
    title: record.title,
    category: record.category,
    type: record.type,
  };
}

/**
 * Galeri kayıtlarını hosting üzerindeki PHP API'den okur.
 * API veya Cloudinary tanımlı değilse ya da yanıt alınamazsa `data/gallery.ts` kullanılır.
 */
export async function getGalleryItems(): Promise<GalleryItem[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("media-gallery");

  const url = process.env.MEDIA_API_URL;
  const token = process.env.MEDIA_API_TOKEN;
  if (!url || !token || !cloudinaryEnabled) return galleryItems;

  try {
    const response = await fetch(`${url}?collection=gallery`, {
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return galleryItems;
    const payload = (await response.json()) as { ok?: boolean; items?: MediaRecord[] };
    const items = (payload.items ?? []).map(toGalleryItem).filter((item) => item !== null);
    return payload.ok && items.length > 0 ? items : galleryItems;
  } catch {
    return galleryItems;
  }
}
