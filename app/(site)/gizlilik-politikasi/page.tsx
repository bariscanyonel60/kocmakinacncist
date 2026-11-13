import { LegalArticle } from "@/components/layout/LegalArticle";
import { company } from "@/data/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Gizlilik Politikası",
  description:
    "Koç Makina gizlilik politikası: teklif formundaki ad, telefon, e-posta ve teknik dosyanın amacı, e-posta ile iletimi ve haklarınız.",
  path: "/gizlilik-politikasi",
});

export default function PrivacyPage() {
  return (
    <LegalArticle
      eyebrow="Yasal"
      title="Gizlilik Politikası"
      description={`${company.legalName} adına yayınlanan sitede bırakılan bilginin sınırı. İletişim: ${company.email}, ${company.phone}.`}
      path="/gizlilik-politikasi"
      sections={[
        {
          heading: "Veri sorumlusu",
          paragraphs: [
            `Site, ${company.name} / ${company.legalName} adına yayınlanır. Veri sorumlusu iletişim kanalları: ${company.phone}, ${company.phoneMobile}, ${company.email}. Adres: ${company.address}.`,
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
          heading: "Saklama ve iletim",
          paragraphs: [
            "Doğrulanan talep, e-posta hizmeti üzerinden ekibimize iletilir. Site kendi veritabanına teklif kaydı yazmaz. Başarılı gönderimde teşekkür sayfası açılır; gönderim başarısızsa başarı mesajı gösterilmez.",
            "E-posta kutusu ve yazışma saklama süresi, teklif süreci ve varsa yasal zamanaşımı ile sınırlıdır. Süre uydurulmaz.",
          ],
        },
        {
          heading: "Aktarım",
          paragraphs: [
            "Bilgiler satılmaz. Barındırma ve e-posta hizmeti dışında bir reklam veya analiz şirketine gönderilmez. Böyle bir araç eklenirse çerez politikası güncellenir.",
          ],
        },
        {
          heading: "Haklar",
          paragraphs: [
            `Veriniz işlenmeye başladığında erişim, düzeltme, silme ve itiraz talebini ${company.email} adresine veya iletişim formundan iletebilirsiniz. KVKK aydınlatması ayrı sayfadadır. VERBİS numarası doğrulanmadan yazılmaz.`,
          ],
        },
      ]}
    />
  );
}
