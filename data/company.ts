/**
 * Firma bilgileri tek kaynaktan yönetilir.
 * Doğrulanmamış telefon, adres, e-posta, sosyal hesap ve koordinat yazılmamalıdır.
 * Yayın öncesi NEXT_PUBLIC_SITE_URL gerçek alan adıyla tanımlanmalıdır.
 * Kaynak: firma kartviziti (Erkan Koç).
 */
export const company = {
  name: "KOC Makina CNC",
  shortName: "KOC Makina",
  contactName: "Erkan Koç",
  contactTitle: "Kurucu | Genel Müdür",
  phone: "0212 671 33 67",
  mobile: "0505 093 49 57",
  whatsapp: "0505 093 49 57",
  email: "info@kocmakinacnc.com",
  address: "İkitelli OSB Mah. Demirciler San. Sit. B2 Blok No:59/B Başakşehir / İstanbul",
  city: "İstanbul",
  country: "Türkiye",
  instagram: "",
  linkedin: "",
  maps: "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://kocmakinacnc.com",
} as const;

export const whatsappMessage =
  "Merhaba KOC Makina, CNC üretim hakkında bilgi ve fiyat teklifi almak istiyorum.";

export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

/** Türkiye yerel numarayı E.164 rakamlarına çevirir (örn. 0212… → 90212…). */
export function toIntlDigits(value: string) {
  let digits = digitsOnly(value);
  if (!digits) return "";
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = `90${digits.slice(1)}`;
  return digits;
}

export function phoneHref(value: string = company.phone) {
  const digits = toIntlDigits(value);
  return digits ? `tel:+${digits}` : null;
}

export function mobileHref() {
  return company.mobile ? phoneHref(company.mobile) : null;
}

export function whatsappHref() {
  const digits = toIntlDigits(company.whatsapp);
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(whatsappMessage)}`;
}

export function mailHref() {
  return company.email ? `mailto:${company.email}` : null;
}
