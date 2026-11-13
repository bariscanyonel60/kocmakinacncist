import {
  cloudinaryMediaConfigured,
  deleteCloudinaryMedia,
  findPublicIdByNumericId,
  listCloudinaryMedia,
  patchCloudinaryMedia,
  publicIdToNumericId,
} from "@/lib/cloudinary-media";

export type AdminMediaItem = {
  id: number;
  type: "image" | "video";
  collection: string;
  publicId: string;
  title: string;
  alt: string;
  category: string;
  width: number | null;
  height: number | null;
  sortOrder: number;
  published: boolean;
};

export type MediaCreateInput = {
  media_type?: "image" | "video";
  collection?: string;
  public_id: string;
  title: string;
  alt: string;
  category: string;
  width?: number | null;
  height?: number | null;
  sort_order?: number;
  published?: boolean;
};

export type MediaPatchInput = Partial<{
  media_type: "image" | "video";
  collection: string;
  public_id: string;
  title: string;
  alt: string;
  category: string;
  width: number | null;
  height: number | null;
  sort_order: number;
  published: boolean;
}>;

export type MediaApiError = {
  status: number;
  error: string;
  fields?: string[];
};

export function mediaStoreConfigured() {
  return cloudinaryMediaConfigured();
}

/** PHP medya API domain Vercel'de 403 verdiği için Cloudinary kullanılır. */
export function mediaApiConfigured() {
  return mediaStoreConfigured();
}

export function isMediaApiError(error: unknown): error is MediaApiError {
  return Boolean(error && typeof error === "object" && "status" in error && "error" in error);
}

export async function listAdminMedia() {
  return listCloudinaryMedia(true);
}

export function createAdminMediaId(publicId: string) {
  return publicIdToNumericId(publicId);
}

export async function patchAdminMedia(id: number, input: MediaPatchInput, publicId?: string) {
  const resolved = publicId ?? (await findPublicIdByNumericId(id));
  if (!resolved) {
    const err: MediaApiError = { status: 404, error: "NOT_FOUND" };
    throw err;
  }
  await patchCloudinaryMedia(resolved, input);
}

export async function deleteAdminMedia(id: number, publicId?: string) {
  const resolved = publicId ?? (await findPublicIdByNumericId(id));
  if (!resolved) {
    const err: MediaApiError = { status: 404, error: "NOT_FOUND" };
    throw err;
  }
  await deleteCloudinaryMedia(resolved);
}
