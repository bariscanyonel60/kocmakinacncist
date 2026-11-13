import { cacheLife, cacheTag } from "next/cache";
import { galleryCategories, galleryItems, type GalleryItem } from "@/data/gallery";
import { cloudinaryEnabled } from "@/lib/cloudinary";
import { cloudinaryMediaConfigured, listPublishedCloudinaryGallery } from "@/lib/cloudinary-media";

const categoryIds = new Set<string>(galleryCategories.map((category) => category.id));

function isGalleryCategory(value: string): value is GalleryItem["category"] {
  return value !== "tumu" && categoryIds.has(value);
}

/**
 * Galeri kayıtlarını Cloudinary context metadata üzerinden okur.
 * Cloudinary yoksa veya kayıt yoksa `data/gallery.ts` yedektir.
 */
export async function getGalleryItems(): Promise<GalleryItem[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("media-gallery");

  if (!cloudinaryEnabled || !cloudinaryMediaConfigured()) return galleryItems;

  try {
    const records = await listPublishedCloudinaryGallery();
    const items: GalleryItem[] = [];
    for (const record of records) {
      if (!isGalleryCategory(record.category)) continue;
      items.push({
        src: record.publicId,
        alt: record.alt || record.title || "Galeri görseli",
        title: record.title || record.alt || "Galeri",
        category: record.category,
        type: record.type,
      });
    }
    return items.length > 0 ? items : galleryItems;
  } catch {
    return galleryItems;
  }
}
