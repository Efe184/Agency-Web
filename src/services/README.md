# Services Klasörü

Bu klasör, API çağrıları ve dış servis entegrasyonlarını içerir.

## Dosya Türleri

- **API**: Rest API çağrıları
- **Email**: E-posta servisleri (EmailJS)
- **Analytics**: Google Analytics, Hotjar
- **External**: Dış servis entegrasyonları

## Örnek Servisler

- `email.ts` - EmailJS entegrasyonu
- `analytics.ts` - Google Analytics
- `api.ts` - Genel API fonksiyonları

## Kullanım

```typescript
// email.ts
export async function sendContactForm(data: TContactForm) {
  return await emailjs.send(
    'service_id',
    'template_id',
    data,
    'public_key'
  );
}
``` 