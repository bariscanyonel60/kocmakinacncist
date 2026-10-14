/**
 * Firma bilgileri tek noktadan yönetilir.
 * Doğrulanmamış telefon, adres, e-posta, sosyal hesap ve koordinat boş bırakılır.
 * Dolu değerler header, footer, CTA ve WhatsApp düğmesinde kendiliğinden görünür.
 *
 * WhatsApp: ülke koduyla, yalnızca rakam. Örnek: 90555xxxxxxx
 * Sosyal alanlar tam URL olmalıdır.
 */
export const company = {
  name: "Koç Makina CNC",
  shortName: "Koç Makina",
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  city: "İstanbul",
  country: "Türkiye",
  instagram: "",
  linkedin: "",
  maps: "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

/**
 * Ana sayfa giriş bölümündeki rakamlar.
 * TODO: Replace with verified company data.
 * Değer boş kaldıkça kart yayınlanmaz; tahmini sayı yazılmaz.
 */
export const companyStats: { value: string; label: string }[] = [
  { value: "", label: "Yıllık deneyim" },
  { value: "", label: "Tamamlanan proje" },
  { value: "", label: "CNC tezgâh" },
  { value: "", label: "Hizmet verilen sektör" },
];

export function filled(value: string) {
  return value.trim().length > 0;
}

export function phoneHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : null;
}

export function whatsappHref() {
  const digits = company.whatsapp.replace(/\D/g, "");
  if (!digits) return null;
  const text = encodeURIComponent(
    "Merhaba Koç Makina, CNC üretim hakkında bilgi ve fiyat teklifi almak istiyorum.",
  );
  return `https://wa.me/${digits}?text=${text}`;
}
