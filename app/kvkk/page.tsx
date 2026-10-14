import { LegalArticle } from "@/components/layout/LegalArticle";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "KVKK Aydınlatma",
  description:
    "Koç Makina teklif formundaki ad, telefon ve e-posta neden istenir, nereye aktarılmaz ve silme talebi nereye yazılır.",
  path: "/kvkk",
});

export default function KvkkPage() {
  return (
    <LegalArticle
      eyebrow="Yasal"
      title="KVKK"
      description="6698 sayılı kanun kapsamında, teklif formundaki kişisel verilerin işlenme amacı."
      path="/kvkk"
      sections={[
        {
          heading: "Amaç",
          paragraphs: [
            "Ad, telefon, e-posta ve mesaj; CNC torna veya talaşlı imalat talebini yanıtlamak için işlenir. Hukuki sebep, bir sözleşmenin kurulmasına yönelik talep sürecidir.",
          ],
        },
        {
          heading: "Aktarım ve süre",
          paragraphs: [
            "Form verisi ve ekli dosyalar sunucuda tutulmaz; e-posta hizmet sağlayıcısı (Resend) üzerinden firma e-posta adresine iletilir. Veriler yalnızca teklif ve üretim yazışması için kullanılır, saklama süresi işin kapanmasına ve yasal zamanaşımına bağlıdır.",
            "VERBİS numarası ve açık adres, doğrulanmadan bu sayfaya yazılmaz.",
          ],
        },
        {
          heading: "Haklar",
          paragraphs: [
            "Kişisel veriniz işlenmeye başladığında erişim, düzeltme ve silme taleplerinizi iletişim formu üzerinden iletebilirsiniz. Tanımlı bir e-posta varsa o adres de kullanılabilir.",
          ],
        },
      ]}
    />
  );
}
