/**
 * Firma bilgileri tek noktadan yönetilir.
 * Kaynak: kartvizit (Erkan Koç / Koç Makina). Logo görseli ayrı tutulur.
 * Dolu değerler header, footer, CTA ve WhatsApp düğmesinde kendiliğinden görünür.
 *
 * WhatsApp: ülke koduyla, yalnızca rakam. Örnek: 90555xxxxxxx
 * Sosyal alanlar tam URL olmalıdır.
 */
export const company = {
  name: "Koç Makina CNC",
  shortName: "Koç Makina",
  /** Ticari unvan — logo altında gösterilir. */
  legalName: "CNC Mühendislik Sanayi ve Ticaret Limited Şirketi",
  founderName: "Erkan Koç",
  founderTitle: "Kurucu | Genel Müdür",
  phone: "0212 671 33 67",
  phoneMobile: "0505 093 49 57",
  whatsapp: "905050934957",
  email: "info@kocmakinacnc.com",
  address: "İkitelli OSB Mah. Demirciler San. Sit. B2 Blok No:59/B Başakşehir / İstanbul",
  city: "İstanbul",
  country: "Türkiye",
  tags: ["Makina sanayi", "CNC yedek parça", "Talaşlı imalat"] as const,
  parkSummary: "15\" CNC Torna • 8\" CNC Torna • CNC İşleme • 4 Eksen CNC İşleme • Torna • Freze",
  instagram: "https://www.instagram.com/kocmakinacnc",
  linkedin: "",
  maps: "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kocmakinacnc.com",
} as const;

/**
 * Ana sayfa giriş bölümündeki rakamlar.
 * Kartvizitte sayı yok; tahmini değer yazılmaz. Boş kart yayınlanmaz.
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
