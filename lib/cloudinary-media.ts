import { createHash } from "node:crypto";
import type { AdminMediaItem, MediaPatchInput } from "@/lib/admin-media";
import { cloudinaryUploadConfigured } from "@/lib/cloudinary-upload";

type CloudinaryResource = {
  public_id: string;
  width?: number;
  height?: number;
  context?: { custom?: Record<string, string> };
  tags?: string[];
};

function cloudinaryAuth() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || "koc-makina";
  if (!cloudName || !apiKey || !apiSecret) return null;
  return { cloudName, apiKey, apiSecret, folder };
}

export function cloudinaryMediaConfigured() {
  return cloudinaryUploadConfigured();
}

function basicAuth(apiKey: string, apiSecret: string) {
  return `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`;
}

function escapeContextValue(value: string) {
  return value.replace(/[|=]/g, " ").trim();
}

function buildContext(fields: {
  title?: string;
  alt?: string;
  category?: string;
  sort_order?: number;
  published?: boolean;
  gallery?: boolean;
}) {
  const pairs: string[] = [`gallery=${fields.gallery === false ? "0" : "1"}`];
  if (fields.title !== undefined) pairs.push(`title=${escapeContextValue(fields.title)}`);
  if (fields.alt !== undefined) pairs.push(`alt=${escapeContextValue(fields.alt)}`);
  if (fields.category !== undefined) pairs.push(`category=${escapeContextValue(fields.category)}`);
  if (fields.sort_order !== undefined) pairs.push(`sort_order=${String(fields.sort_order)}`);
  if (fields.published !== undefined) pairs.push(`published=${fields.published ? "1" : "0"}`);
  return pairs.join("|");
}

export function publicIdToNumericId(publicId: string) {
  const digest = createHash("sha1").update(publicId).digest();
  return digest.readUInt32BE(0) || 1;
}

function toItem(resource: CloudinaryResource): AdminMediaItem {
  const custom = resource.context?.custom ?? {};
  const sortOrder = Number(custom.sort_order ?? 0);
  return {
    id: publicIdToNumericId(resource.public_id),
    type: "image",
    collection: "gallery",
    publicId: resource.public_id,
    title: custom.title ?? "",
    alt: custom.alt ?? "",
    category: custom.category || "atolye",
    width: resource.width ?? null,
    height: resource.height ?? null,
    sortOrder: Number.isFinite(sortOrder) ? sortOrder : 0,
    published: custom.published !== "0",
  };
}

async function listResources(includeUnpublished: boolean) {
  const config = cloudinaryAuth();
  if (!config) throw Object.assign(new Error("CLOUDINARY_NOT_CONFIGURED"), { status: 501, error: "CLOUDINARY_NOT_CONFIGURED" });

  const items: AdminMediaItem[] = [];
  let nextCursor: string | undefined;

  do {
    const params = new URLSearchParams({
      type: "upload",
      prefix: `${config.folder}/`,
      max_results: "100",
      context: "true",
    });
    if (nextCursor) params.set("next_cursor", nextCursor);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${config.cloudName}/resources/image?${params}`,
      {
        headers: { Authorization: basicAuth(config.apiKey, config.apiSecret) },
        cache: "no-store",
        signal: AbortSignal.timeout(15000),
      },
    );
    const payload = (await response.json()) as {
      resources?: CloudinaryResource[];
      next_cursor?: string;
      error?: { message?: string };
    };
    if (!response.ok) {
      throw Object.assign(new Error(payload.error?.message ?? "CLOUDINARY_LIST_FAILED"), {
        status: response.status,
        error: "CLOUDINARY_LIST_FAILED",
      });
    }

    for (const resource of payload.resources ?? []) {
      if (resource.public_id.includes("/_admin/")) continue;
      if (/logo/i.test(resource.public_id)) continue;
      const item = toItem(resource);
      const markedGallery = resource.context?.custom?.gallery === "1" || resource.context?.custom?.gallery === undefined;
      if (!markedGallery) continue;
      if (!includeUnpublished && !item.published) continue;
      items.push(item);
    }
    nextCursor = payload.next_cursor;
  } while (nextCursor);

  return items.sort((a, b) => a.sortOrder - b.sortOrder || a.publicId.localeCompare(b.publicId));
}

export async function listCloudinaryMedia(all = true) {
  return listResources(all);
}

export async function listPublishedCloudinaryGallery() {
  return listResources(false);
}

async function setContext(publicId: string, context: string) {
  const config = cloudinaryAuth();
  if (!config) throw Object.assign(new Error("CLOUDINARY_NOT_CONFIGURED"), { status: 501, error: "CLOUDINARY_NOT_CONFIGURED" });

  const body = new URLSearchParams({
    public_id: publicId,
    context,
  });
  const response = await fetch(`https://api.cloudinary.com/v1_1/${config.cloudName}/image/context`, {
    method: "POST",
    headers: {
      Authorization: basicAuth(config.apiKey, config.apiSecret),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) {
    const payload = (await response.json().catch(() => ({}))) as { error?: { message?: string } };
    throw Object.assign(new Error(payload.error?.message ?? "CLOUDINARY_CONTEXT_FAILED"), {
      status: response.status,
      error: "CLOUDINARY_CONTEXT_FAILED",
    });
  }
}

export async function patchCloudinaryMedia(publicId: string, input: MediaPatchInput) {
  const current = (await listResources(true)).find((item) => item.publicId === publicId);
  if (!current) {
    throw Object.assign(new Error("NOT_FOUND"), { status: 404, error: "NOT_FOUND" });
  }
  await setContext(
    publicId,
    buildContext({
      title: input.title ?? current.title,
      alt: input.alt ?? current.alt,
      category: input.category ?? current.category,
      sort_order: input.sort_order ?? current.sortOrder,
      published: input.published ?? current.published,
      gallery: true,
    }),
  );
}

export async function deleteCloudinaryMedia(publicId: string) {
  const config = cloudinaryAuth();
  if (!config) throw Object.assign(new Error("CLOUDINARY_NOT_CONFIGURED"), { status: 501, error: "CLOUDINARY_NOT_CONFIGURED" });

  const response = await fetch(`https://api.cloudinary.com/v1_1/${config.cloudName}/resources/image/upload`, {
    method: "DELETE",
    headers: {
      Authorization: basicAuth(config.apiKey, config.apiSecret),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ public_ids: [publicId] }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) {
    const payload = (await response.json().catch(() => ({}))) as { error?: { message?: string } };
    throw Object.assign(new Error(payload.error?.message ?? "CLOUDINARY_DELETE_FAILED"), {
      status: response.status,
      error: "CLOUDINARY_DELETE_FAILED",
    });
  }
}

export async function findPublicIdByNumericId(id: number) {
  const items = await listResources(true);
  return items.find((item) => item.id === id)?.publicId ?? null;
}
