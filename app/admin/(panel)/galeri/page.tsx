import { Suspense } from "react";
import { GalleryAdmin } from "@/components/admin/GalleryAdmin";
import { isMediaApiError, listAdminMedia, mediaStoreConfigured } from "@/lib/admin-media";
import { admin } from "@/lib/admin-ui";
import { cloudinaryUploadConfigured } from "@/lib/cloudinary-upload";

export const instant = false;

async function GalleryAdminLoader() {
  const ready = mediaStoreConfigured() && cloudinaryUploadConfigured();

  let items: Awaited<ReturnType<typeof listAdminMedia>> = [];
  let loadError: string | null = null;

  if (!ready) {
    loadError = "Cloudinary yapılandırması eksik. Liste ve yükleme çalışmaz.";
  } else {
    try {
      items = await listAdminMedia();
    } catch (error) {
      if (isMediaApiError(error)) {
        loadError = `Medya hatası: ${error.error} (${error.status})`;
      } else {
        loadError = "Cloudinary listesine ulaşılamadı.";
      }
    }
  }

  return <GalleryAdmin initialItems={items} loadError={loadError} />;
}

export default function AdminGalleryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className={admin.pageTitle}>Galeri</h1>
        <p className={admin.pageLead}>
          Başlık ve açıklama isteğe bağlıdır. Kategori zorunludur. Değişiklikler sitedeki galeri önbelleğini yeniler.
        </p>
      </div>
      <Suspense fallback={<p className="text-sm text-ink/60">Galeri yükleniyor…</p>}>
        <GalleryAdminLoader />
      </Suspense>
    </div>
  );
}
