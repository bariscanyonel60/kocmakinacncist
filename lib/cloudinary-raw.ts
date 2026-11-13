import { createHash } from "node:crypto";

function cloudinaryAuth() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloudName || !apiKey || !apiSecret) return null;
  return { cloudName, apiKey, apiSecret };
}

export function cloudinaryRawConfigured() {
  return Boolean(cloudinaryAuth());
}

export function adminRawPublicId(fileBase: string) {
  const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || "koc-makina";
  return `${folder}/_admin/${fileBase}`;
}

export async function fetchCloudinaryRawJson<T>(publicId: string): Promise<T | null> {
  const config = cloudinaryAuth();
  if (!config) return null;

  try {
    const url = `https://res.cloudinary.com/${config.cloudName}/raw/upload/${publicId}.json`;
    const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export async function uploadCloudinaryRawJson(publicId: string, payload: unknown, fileName: string) {
  const config = cloudinaryAuth();
  if (!config) {
    throw Object.assign(new Error("CLOUDINARY_NOT_CONFIGURED"), {
      status: 501,
      error: "CLOUDINARY_NOT_CONFIGURED",
    });
  }

  const bodyJson = JSON.stringify(payload, null, 2);
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const params: Record<string, string> = {
    overwrite: "true",
    public_id: publicId,
    timestamp,
  };
  const signature = createHash("sha1")
    .update(
      Object.keys(params)
        .sort()
        .map((name) => `${name}=${params[name]}`)
        .join("&") + config.apiSecret,
    )
    .digest("hex");

  const form = new FormData();
  form.set("file", new Blob([bodyJson], { type: "application/json" }), fileName);
  for (const [field, value] of Object.entries(params)) form.set(field, value);
  form.set("api_key", config.apiKey);
  form.set("signature", signature);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${config.cloudName}/raw/upload`, {
    method: "POST",
    body: form,
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as { error?: { message?: string } };
    throw Object.assign(new Error(body.error?.message ?? "RAW_JSON_SAVE_FAILED"), {
      status: response.status,
      error: "RAW_JSON_SAVE_FAILED",
    });
  }
}
