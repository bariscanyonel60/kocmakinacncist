import { revalidateTag } from "next/cache";
import { galleryCategories, type GalleryCategory } from "@/data/gallery";
import {
  createAdminMediaId,
  deleteAdminMedia,
  isMediaApiError,
  listAdminMedia,
  mediaStoreConfigured,
  patchAdminMedia,
} from "@/lib/admin-media";
import {
  cloudinaryUploadConfigured,
  overwriteCloudinaryImage,
  uploadImageToCloudinary,
} from "@/lib/cloudinary-upload";

type GalleryMediaCategory = Exclude<GalleryCategory, "tumu">;

const allowedCategories = new Set<string>(
  galleryCategories.filter((category) => category.id !== "tumu").map((category) => category.id),
);

function isGalleryMediaCategory(value: string): value is GalleryMediaCategory {
  return allowedCategories.has(value);
}

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_BYTES = 10 * 1024 * 1024;

function revalidateGallery() {
  revalidateTag("media-gallery", "max");
}

function errorResponse(error: unknown) {
  if (isMediaApiError(error)) {
    return Response.json(
      { ok: false, error: error.error, fields: error.fields },
      { status: error.status || 500 },
    );
  }
  const message = error instanceof Error ? error.message : "UNKNOWN";
  return Response.json({ ok: false, error: message }, { status: 500 });
}

function storeReady() {
  if (!mediaStoreConfigured() || !cloudinaryUploadConfigured()) {
    return Response.json(
      {
        ok: false,
        error: "CLOUDINARY_NOT_CONFIGURED",
        message: "CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET ve cloud name gerekli.",
      },
      { status: 501 },
    );
  }
  return null;
}

export async function GET() {
  const blocked = storeReady();
  if (blocked) return blocked;
  try {
    const items = await listAdminMedia();
    return Response.json({ ok: true, items });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  const blocked = storeReady();
  if (blocked) return blocked;

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false, error: "INVALID_FORM" }, { status: 400 });
  }

  const file = form.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return Response.json({ ok: false, error: "FILE_REQUIRED" }, { status: 400 });
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return Response.json({ ok: false, error: "FILE_TYPE", message: "Yalnızca JPG, PNG veya WebP." }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return Response.json({ ok: false, error: "FILE_TOO_LARGE", message: "Dosya en fazla 10 MB olabilir." }, { status: 400 });
  }

  const title = String(form.get("title") ?? "").trim();
  const alt = String(form.get("alt") ?? "").trim();
  const category = String(form.get("category") ?? "").trim();
  const sortOrder = Number(form.get("sortOrder") ?? 0);
  const published = String(form.get("published") ?? "true") !== "false";

  if (!isGalleryMediaCategory(category)) {
    return Response.json({ ok: false, error: "VALIDATION", fields: ["category"] }, { status: 422 });
  }
  if (!Number.isFinite(sortOrder) || !Number.isInteger(sortOrder)) {
    return Response.json({ ok: false, error: "VALIDATION", fields: ["sortOrder"] }, { status: 422 });
  }

  try {
    const uploaded = await uploadImageToCloudinary(file, {
      title,
      alt,
      category,
      sortOrder,
      published,
    });
    revalidateGallery();
    return Response.json(
      { ok: true, id: createAdminMediaId(uploaded.publicId), publicId: uploaded.publicId },
      { status: 201 },
    );
  } catch (error) {
    return errorResponse(error);
  }
}

export async function PATCH(request: Request) {
  const blocked = storeReady();
  if (blocked) return blocked;

  const contentType = request.headers.get("content-type") ?? "";

  // Görsel dosyası ile değiştirme (multipart)
  if (contentType.includes("multipart/form-data")) {
    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      return Response.json({ ok: false, error: "INVALID_FORM" }, { status: 400 });
    }

    const publicId = String(form.get("publicId") ?? "").trim();
    const file = form.get("file");
    if (!publicId) {
      return Response.json({ ok: false, error: "ID_REQUIRED" }, { status: 400 });
    }
    if (!(file instanceof File) || file.size === 0) {
      return Response.json({ ok: false, error: "FILE_REQUIRED", message: "Bir görsel seçin." }, { status: 400 });
    }
    if (!ALLOWED_TYPES.has(file.type)) {
      return Response.json({ ok: false, error: "FILE_TYPE", message: "Yalnızca JPG, PNG veya WebP." }, { status: 400 });
    }
    if (file.size > MAX_BYTES) {
      return Response.json({ ok: false, error: "FILE_TOO_LARGE", message: "Dosya en fazla 10 MB olabilir." }, { status: 400 });
    }

    try {
      await overwriteCloudinaryImage(file, publicId, {
        title: String(form.get("title") ?? "").trim(),
        alt: String(form.get("alt") ?? "").trim(),
        category: String(form.get("category") ?? "").trim(),
        sortOrder: Number(form.get("sortOrder") ?? 0),
        published: String(form.get("published") ?? "true") !== "false",
      });
      revalidateGallery();
      return Response.json({ ok: true, publicId });
    } catch (error) {
      return errorResponse(error);
    }
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, error: "INVALID_JSON" }, { status: 400 });
  }

  const id = typeof body.id === "number" ? body.id : Number(body.id);
  const publicId = typeof body.publicId === "string" ? body.publicId : undefined;
  if ((!Number.isInteger(id) || id < 1) && !publicId) {
    return Response.json({ ok: false, error: "ID_REQUIRED" }, { status: 400 });
  }

  const patch: Record<string, unknown> = {};
  if (typeof body.title === "string") patch.title = body.title.trim();
  if (typeof body.alt === "string") patch.alt = body.alt.trim();
  if (typeof body.category === "string") {
    if (!isGalleryMediaCategory(body.category)) {
      return Response.json({ ok: false, error: "VALIDATION", fields: ["category"] }, { status: 422 });
    }
    patch.category = body.category;
  }
  if (typeof body.sortOrder === "number" && Number.isInteger(body.sortOrder)) {
    patch.sort_order = body.sortOrder;
  }
  if (typeof body.published === "boolean") patch.published = body.published;

  if (Object.keys(patch).length === 0) {
    return Response.json({ ok: false, error: "EMPTY_UPDATE" }, { status: 422 });
  }

  try {
    await patchAdminMedia(Number.isInteger(id) ? id : 0, patch, publicId);
    revalidateGallery();
    return Response.json({ ok: true });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(request: Request) {
  const blocked = storeReady();
  if (blocked) return blocked;

  const url = new URL(request.url);
  const id = Number(url.searchParams.get("id"));
  const publicId = url.searchParams.get("publicId") ?? undefined;
  if ((!Number.isInteger(id) || id < 1) && !publicId) {
    return Response.json({ ok: false, error: "ID_REQUIRED" }, { status: 400 });
  }

  try {
    await deleteAdminMedia(Number.isInteger(id) ? id : 0, publicId ?? undefined);
    revalidateGallery();
    return Response.json({ ok: true });
  } catch (error) {
    return errorResponse(error);
  }
}
