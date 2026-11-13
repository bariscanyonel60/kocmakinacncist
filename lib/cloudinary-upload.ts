import { createHash } from "node:crypto";

export type CloudinaryUploadResult = {
  publicId: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
};

export type CloudinaryUploadMeta = {
  title?: string;
  alt?: string;
  category?: string;
  sortOrder?: number;
  published?: boolean;
};

function cloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || "koc-makina";
  if (!cloudName || !apiKey || !apiSecret) {
    return null;
  }
  return { cloudName, apiKey, apiSecret, folder };
}

export function cloudinaryUploadConfigured() {
  return cloudinaryConfig() !== null;
}

function sign(params: Record<string, string>, apiSecret: string) {
  const payload = Object.keys(params)
    .sort()
    .map((name) => `${name}=${params[name]}`)
    .join("&");
  return createHash("sha1").update(payload + apiSecret).digest("hex");
}

function slugifyFilename(name: string) {
  const base = name.replace(/\.[^.]+$/, "").toLowerCase();
  const slug = base
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return slug || "gorsel";
}

function escapeContextValue(value: string) {
  return value.replace(/[|=]/g, " ").trim();
}

function buildContext(meta: CloudinaryUploadMeta) {
  return [
    "gallery=1",
    `title=${escapeContextValue(meta.title ?? "")}`,
    `alt=${escapeContextValue(meta.alt ?? "")}`,
    `category=${escapeContextValue(meta.category ?? "atolye")}`,
    `sort_order=${String(meta.sortOrder ?? 0)}`,
    `published=${meta.published === false ? "0" : "1"}`,
  ].join("|");
}

async function postCloudinaryUpload(
  file: File,
  publicId: string,
  extraParams: Record<string, string> = {},
): Promise<CloudinaryUploadResult> {
  const config = cloudinaryConfig();
  if (!config) {
    throw new Error("CLOUDINARY_NOT_CONFIGURED");
  }

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const params: Record<string, string> = {
    ...extraParams,
    overwrite: "false",
    public_id: publicId,
    timestamp,
  };

  const body = new FormData();
  body.set("file", file, file.name);
  for (const [field, value] of Object.entries(params)) body.set(field, value);
  body.set("api_key", config.apiKey);
  body.set("signature", sign(params, config.apiSecret));

  const response = await fetch(`https://api.cloudinary.com/v1_1/${config.cloudName}/image/upload`, {
    method: "POST",
    body,
  });
  const result = (await response.json()) as {
    public_id?: string;
    width?: number;
    height?: number;
    format?: string;
    bytes?: number;
    error?: { message?: string };
  };

  if (!response.ok || !result.public_id) {
    throw new Error(result.error?.message ?? `Cloudinary upload failed (${response.status})`);
  }

  return {
    publicId: result.public_id,
    width: result.width ?? 0,
    height: result.height ?? 0,
    format: result.format ?? "",
    bytes: result.bytes ?? 0,
  };
}

export async function uploadImageToCloudinary(
  file: File,
  meta: CloudinaryUploadMeta = {},
): Promise<CloudinaryUploadResult> {
  const config = cloudinaryConfig();
  if (!config) {
    throw new Error("CLOUDINARY_NOT_CONFIGURED");
  }

  const publicId = `${config.folder}/${slugifyFilename(file.name)}-${Date.now().toString(36)}`;
  return postCloudinaryUpload(file, publicId, { context: buildContext(meta) });
}

export type SiteImageUploadResult = CloudinaryUploadResult & {
  /** Site yolu — next/image + Cloudinary loader ile `/images/<ad>.<ext>` */
  path: string;
};

/** Hizmet / makine kartları için galeri dışı görsel yükleme. */
export async function uploadSiteImageToCloudinary(file: File): Promise<SiteImageUploadResult> {
  const config = cloudinaryConfig();
  if (!config) {
    throw new Error("CLOUDINARY_NOT_CONFIGURED");
  }

  const leaf = `${slugifyFilename(file.name)}-${Date.now().toString(36)}`;
  const publicId = `${config.folder}/${leaf}`;
  const uploaded = await postCloudinaryUpload(file, publicId);
  const ext = (uploaded.format || "jpg").toLowerCase().replace("jpeg", "jpg");
  return {
    ...uploaded,
    path: `/images/${leaf}.${ext}`,
  };
}

/** Mevcut galeri public ID üzerine yeni dosya yaz (aynı kayıt). */
export async function overwriteCloudinaryImage(
  file: File,
  publicId: string,
  meta: CloudinaryUploadMeta = {},
): Promise<CloudinaryUploadResult> {
  const config = cloudinaryConfig();
  if (!config) {
    throw new Error("CLOUDINARY_NOT_CONFIGURED");
  }

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const context = buildContext(meta);
  const params: Record<string, string> = {
    context,
    invalidate: "true",
    overwrite: "true",
    public_id: publicId,
    timestamp,
  };

  const body = new FormData();
  body.set("file", file, file.name);
  for (const [field, value] of Object.entries(params)) body.set(field, value);
  body.set("api_key", config.apiKey);
  body.set("signature", sign(params, config.apiSecret));

  const response = await fetch(`https://api.cloudinary.com/v1_1/${config.cloudName}/image/upload`, {
    method: "POST",
    body,
  });
  const result = (await response.json()) as {
    public_id?: string;
    width?: number;
    height?: number;
    format?: string;
    bytes?: number;
    error?: { message?: string };
  };

  if (!response.ok || !result.public_id) {
    throw new Error(result.error?.message ?? `Cloudinary overwrite failed (${response.status})`);
  }

  return {
    publicId: result.public_id,
    width: result.width ?? 0,
    height: result.height ?? 0,
    format: result.format ?? "",
    bytes: result.bytes ?? 0,
  };
}
