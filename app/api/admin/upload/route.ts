import { cloudinaryUploadConfigured, uploadSiteImageToCloudinary } from "@/lib/cloudinary-upload";

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_BYTES = 10 * 1024 * 1024;

export async function POST(request: Request) {
  if (!cloudinaryUploadConfigured()) {
    return Response.json(
      {
        ok: false,
        error: "CLOUDINARY_NOT_CONFIGURED",
        message: "CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET ve cloud name gerekli.",
      },
      { status: 501 },
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false, error: "INVALID_FORM" }, { status: 400 });
  }

  const file = form.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return Response.json(
      { ok: false, error: "FILE_REQUIRED", message: "Bir görsel dosyası seçin." },
      { status: 400 },
    );
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return Response.json(
      { ok: false, error: "FILE_TYPE", message: "Yalnızca JPG, PNG veya WebP." },
      { status: 400 },
    );
  }
  if (file.size > MAX_BYTES) {
    return Response.json(
      { ok: false, error: "FILE_TOO_LARGE", message: "Dosya en fazla 10 MB olabilir." },
      { status: 400 },
    );
  }

  try {
    const uploaded = await uploadSiteImageToCloudinary(file);
    return Response.json(
      {
        ok: true,
        path: uploaded.path,
        publicId: uploaded.publicId,
        width: uploaded.width,
        height: uploaded.height,
      },
      { status: 201 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "UPLOAD_FAILED";
    return Response.json({ ok: false, error: message, message }, { status: 500 });
  }
}
