import { LegalArticle } from "@/components/layout/LegalArticle";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Gizlilik Politikası",
  description:
    "Koç Makina sitesinde teklif formuna yazılan ad, telefon, e-posta ve teknik dosyanın amacı, saklanmaması ve haklarınız.",
  path: "/gizlilik-politikasi",
});

export default function PrivacyPage() {
  return (
    <LegalArticle
      eyebrow="Yasal"
      title="Gizlilik Politikası"
      description="Bu metin, sitede bırakılan bilginin sınırını anlatır. Adres ve telefon doğrulanmadan veri sorumlusu kartına yazılmaz."
      path="/gizlilik-politikasi"
      sections={[
        {
          heading: "Veri sorumlusu",
          paragraphs: [
            "Site, Koç Makina CNC adına yayınlanır. Telefon, e-posta ve açık adres firma kaydında doluysa sitede görünür ve o kanallar da geçerlidir. Tanımlı değilse tek iletişim yolu formdur.",
          ],
        },
        {
          heading: "Hangi bilgi",
          paragraphs: [
            "Teklif formunda ad soyad, firma, telefon, e-posta, talep türü, mesaj ve seçilen teknik dosya istenir. Tarayıcı, sayfayı göstermek dışında bir ziyaretçi profili tutmaz.",
            "Zorunlu alanlar üretim talebini okumak içindir. Firma adı isteğe bağlıdır.",
          ],
        },
        {
          heading: "Amaç ve hukuki sebep",
          paragraphs: [
            "Bilgi, CNC torna veya talaşlı imalat talebini değerlendirmek ve size dönüş yapmak için işlenir. Sebep, bir sözleşmenin kurulmasına yönelik başvurudur. Pazarlama listesi tutulmaz.",
          ],
        },
        {
          heading: "Saklama",
          paragraphs: [
            "Form şu an bir kayıt sistemine bağlı değildir. Sunucu, doğrulama sonrası talebi saklamadan geri çevirir. Başarılı gönderim ancak kayıt ve bildirim hattı kurulunca söylenir.",
            "Hattın kurulmasından sonra saklama, teklif yazışması ve varsa yasal zamanaşımı ile sınırlı olur. Süre uydurulmaz.",
          ],
        },
        {
          heading: "Aktarım",
          paragraphs: [
            "Bilgiler satılmaz. Barındırma hizmeti dışında bir reklam veya analiz şirketine gönderilmez. Böyle bir araç eklenirse çerez politikası güncellenir.",
          ],
        },
        {
          heading: "Haklar",
          paragraphs: [
            "Veriniz işlenmeye başladığında erişim, düzeltme, silme ve itiraz talebini iletişim formundan iletebilirsiniz. KVKK aydınlatması ayrı sayfadadır. VERBİS numarası doğrulanmadan yazılmaz.",
          ],
        },
      ]}
    />
  );
}
