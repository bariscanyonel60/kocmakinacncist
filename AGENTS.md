# KOC Makina CNC

İstanbul’da CNC torna ve talaşlı imalat için kurumsal site. Next.js App Router, TypeScript, Tailwind CSS.

## Çalıştırma

```bash
npm install
npm run dev
npm run lint
npm run build
```

Geliştirme adresi `http://localhost:3000`.

## Ortam

`NEXT_PUBLIC_SITE_URL` yayın alan adıdır. Tanımlı değilse kanonik adres `https://kocmakinacnc.com` kabul edilir. Canlıya çıkmadan gerçek domain yazılmalıdır.

## Dokunulacak veri

- `data/company.ts` — telefon, WhatsApp, e-posta, adres, sosyal, harita. Boş alan uydurulmaz. WhatsApp butonu ve arama bağlantısı yalnızca değer doluysa görünür.
- `data/machines.ts` — marka, model, çap, boy, eksen, hassasiyet. Boş değer arayüzde “Bilgi eklenecek” olur.
- `data/services.ts` — hizmet ekleme veya çıkarma. Sayfalar slug’dan üretilir.
- `public/images` — temsili stok fotoğraflar. Firma çekimi gelince aynı dosya adıyla değiştirilir. Müşteri projesi gibi yazılmaz.

## Form

`app/api/teklif/route.ts` bilinçli olarak 501 döner. E-posta veya dosya saklama bağlanmadan başarı mesajı gösterilmez.

## Dokunma

Sahte sertifika, yorum, puan, çalışan sayısı, kuruluş yılı, tezgah adedi ve tolerans rakamı eklenmez.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
