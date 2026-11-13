import Link from "next/link";
import { mediaStoreConfigured } from "@/lib/admin-media";
import { admin } from "@/lib/admin-ui";
import { cloudinaryUploadConfigured } from "@/lib/cloudinary-upload";

export const instant = false;

const cards = [
  {
    href: "/admin/galeri",
    title: "Galeri",
    text: "Görsel ekle, başlık/açıklama düzenle, yayınla veya sil.",
  },
  {
    href: "/admin/hizmetler",
    title: "Hizmetlerimiz",
    text: "Hizmet kartları, SEO metinleri ve yayın durumunu yönet.",
  },
  {
    href: "/admin/makine-parkuru",
    title: "Makine parkuru",
    text: "Parkur kartlarını ekle, kapasite alanlarını güncelle.",
  },
  {
    href: "/admin/icerik",
    title: "İçerik",
    text: "Ticari unvan, hakkında ve footer metnini güncelle.",
  },
] as const;

export default function AdminHomePage() {
  const ready = mediaStoreConfigured() && cloudinaryUploadConfigured();

  return (
    <div className="space-y-8">
      <div>
        <h1 className={admin.pageTitle}>Genel bakış</h1>
        <p className={admin.pageLead}>
          Galeri, hizmetler, makine parkuru ve site metinlerini buradan yönetin.
        </p>
      </div>

      <div className={ready ? admin.cardMuted : admin.alertError}>
        {ready
          ? "Cloudinary bağlantısı hazır. Galeri, hizmet, makine ve içerik kayıtları Cloudinary üzerinden yönetilir."
          : "Cloudinary anahtarları eksik. ADMIN yükleme ve içerik kaydı çalışmaz."}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="border border-ink/10 bg-white p-6 shadow-sm transition-colors hover:border-ink/30"
          >
            <h2 className="font-display text-xl text-ink">{card.title}</h2>
            <p className="mt-2 text-sm text-ink/60">{card.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
