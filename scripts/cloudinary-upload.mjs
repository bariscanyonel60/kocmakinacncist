import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const cloud = process.env.CLOUDINARY_CLOUD_NAME;
const key = process.env.CLOUDINARY_API_KEY;
const secret = process.env.CLOUDINARY_API_SECRET;
const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || "koc-makina";
const sourceDir = path.resolve(process.argv[2] ?? "public/images");

if (!cloud || !key || !secret) {
  console.error("CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY ve CLOUDINARY_API_SECRET gerekli.");
  process.exit(1);
}

function sign(params) {
  const payload = Object.keys(params)
    .sort()
    .map((name) => `${name}=${params[name]}`)
    .join("&");
  return createHash("sha1").update(payload + secret).digest("hex");
}

const files = (await readdir(sourceDir)).filter((name) => /\.(jpe?g|png|webp|avif)$/i.test(name));
let failed = 0;

for (const name of files) {
  const publicId = `${folder}/${name.replace(/\.[^.]+$/, "")}`;
  const params = {
    overwrite: "true",
    public_id: publicId,
    timestamp: Math.floor(Date.now() / 1000).toString(),
  };
  const body = new FormData();
  body.set("file", new Blob([await readFile(path.join(sourceDir, name))]), name);
  for (const [field, value] of Object.entries(params)) body.set(field, value);
  body.set("api_key", key);
  body.set("signature", sign(params));

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, {
    method: "POST",
    body,
  });
  const result = await response.json();
  if (!response.ok) {
    failed += 1;
    console.error(`HATA ${name}: ${result.error?.message ?? response.status}`);
    continue;
  }
  console.log(`${name} -> ${result.public_id} (${result.width}x${result.height})`);
}

process.exit(failed ? 1 : 0);
