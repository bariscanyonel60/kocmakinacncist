import type { Metadata } from "next";
import { LegalArticle } from "@/components/layout/LegalArticle";
import { company } from "@/data/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "KVKK Aydınlatma | KOC Makina",
  description: "KOC Makina KVKK aydınlatma taslağı. Veri sorumlusu iletişim bilgileri kartvizit kaydına göredir.",
  path: "/kvkk",
});

export default function KvkkPage() {
  return (
    <LegalArticle
      title="KVKK"
      description="6698 sayılı Kanun kapsamında aydınlatma metni taslağıdır; bağlayıcı metin firma hukukçusuyla kesinleşir."
      path="/kvkk"
    >
      <p>
        İşlenen veriler, teklif formundaki kimlik ve iletişim alanları ile paylaşılırsa teknik dosyadır. Amaç, üretim talebini değerlendirmektir. Hukuki sebep, bağlayıcı metin yayına alınırken açık rıza veya sözleşmenin kurulması başlıklarından firma hukukçusuyla seçilecektir.
      </p>
      <p>
        Veri sorumlusu iletişim bilgileri: {company.name}, {company.address}. Başvuru kanalı: {company.email}. Ticaret sicil numarası gibi doğrulanmamış kodlar yazılmaz.
      </p>
      <p>
        İlgili kişi hakları arasında öğrenme, düzeltme, silme ve şikayet bulunur. Form henüz veri saklamadığı için şu an işlenmiş bir kayıt oluşmaz.
      </p>
    </LegalArticle>
  );
}
