// TODO(backend): Teklif ve teknik dosya burada saklanmıyor.
// Bağlanacak iş: e-posta veya depolama, dosya tipi ve boyutun sunucuda tekrar doğrulanması,
// KVKK aydınlatma kaydı. Şu an bilinçli olarak 501 dönülür.

export async function POST() {
  return Response.json(
    {
      ok: false,
      code: "NOT_CONFIGURED",
      message:
        "Form doğrulandı. Talep iletilmedi: gönderim altyapısı henüz bağlı değil. Backend entegrasyonu tamamlandığında bu uç kayıt alacak.",
    },
    { status: 501 },
  );
}
