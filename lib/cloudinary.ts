const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "";
const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || "koc-makina";

export const cloudinaryEnabled = cloudName.length > 0;

type MediaOptions = {
  width?: number;
  quality?: number;
};

function transformation({ width, quality }: MediaOptions) {
  return ["f_auto", quality ? `q_${quality}` : "q_auto", width ? `w_${width}` : "", "c_limit"]
    .filter(Boolean)
    .join(",");
}

/**
 * `/images/<ad>.jpg` yolunu `<klasör>/<ad>` public ID'sine çevirir.
 * Tam Cloudinary adresleri ve public ID'ler olduğu gibi kabul edilir.
 */
export function cloudinaryPublicId(src: string) {
  if (src.startsWith("/images/")) {
    return `${folder}/${src.slice("/images/".length).replace(/\.[^.]+$/, "")}`;
  }
  return src.replace(/^\//, "");
}

function deliveryUrl(resource: "image" | "video", src: string, options: MediaOptions) {
  if (/^https?:\/\//.test(src)) return src;
  return `https://res.cloudinary.com/${cloudName}/${resource}/upload/${transformation(options)}/${cloudinaryPublicId(src)}`;
}

export function cloudinaryImageUrl(src: string, options: MediaOptions = {}) {
  if (!cloudinaryEnabled) return src;
  return deliveryUrl("image", src, options);
}

export function cloudinaryVideoUrl(src: string, options: MediaOptions = {}) {
  if (!cloudinaryEnabled) return src;
  return deliveryUrl("video", src, options);
}
