import type { Metadata } from "next";
import Link from "next/link";
import { LegalArticle } from "@/components/layout/LegalArticle";
import { company, mailHref } from "@/data/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Gizlilik Politikası | KOC Makina CNC",
  description:
    "KOC Makina gizlilik politikası: iletişim formu verileri, saklama durumu, çerezler ve başvuru kanalı. Başakşehir / İstanbul.",
  path: "/gizlilik-politikasi",
});

export default function PrivacyPage() {
  const email = mailHref();

  return (
    <LegalArticle
      title="Gizlilik Politikası"
      description="Bu metin, teklif formu ve site ziyareti kapsamında kişisel verilerin nasıl ele alındığını açıklar. Bağlayıcı hukuk metni firma hukukçusuyla kesinleşir."
      path="/gizlilik-politikasi"
    >
      <p>
        Veri sorumlusu iletişim bilgileri: {company.name}, {company.address}. Başvuru için{" "}
        {email ? (
          <a href={email} className="text-ink underline underline-offset-4">
            {company.email}
          </a>
        ) : (
          "iletişim e-postası"
        )}{" "}
        kullanılır. Ticaret sicil numarası gibi doğrulanmamış kodlar yazılmaz.
      </p>
      <p>
        İletişim formunda ad, firma, telefon, e-posta, talep türü, mesaj ve isteğe bağlı teknik dosya istenir. Amaç, CNC üretim talebini değerlendirmektir.
      </p>
      <p>
        Form şu an bir kayıt sistemine bağlanmamıştır. Gönderim uç noktası talebi saklamaz ve başarılı kayıt döndürmez. Backend bağlandığında saklama süresi, aktarım ve silme hakkı bu sayfada güncellenir.
      </p>
      <p>
        Sitede analitik veya reklam çerezi tanımlı değildir. Ayrıntı için{" "}
        <Link href="/cerez-politikasi" className="text-ink underline underline-offset-4">
          çerez politikası
        </Link>{" "}
        ve{" "}
        <Link href="/kvkk" className="text-ink underline underline-offset-4">
          KVKK
        </Link>{" "}
        sayfalarına bakın.
      </p>
      <p>
        Haklarınız arasında öğrenme, düzeltme, silme ve şikayet bulunur. Taleplerinizi yukarıdaki e-posta kanalından iletebilirsiniz.
      </p>
    </LegalArticle>
  );
}
