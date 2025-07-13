# Features Klasörü

Bu klasör, UI ve iş mantığını birleştiren özellik modüllerini içerir.

## Kullanım Kuralları

- **Self-contained**: Her özellik kendi dosyasında
- **Business Logic**: Component'ten daha karmaşık mantık
- **State Management**: Hook'lar ve state yönetimi içerebilir

## Örnek Özellikler

- `ContactForm/` - İletişim formu (validation + submission)
- `Testimonials/` - Müşteri yorumları
- `Portfolio/` - Proje galerisi
- `ServiceCards/` - Hizmet kartları

## Klasör Yapısı

```
features/
├── ContactForm/
│   ├── ContactForm.tsx
│   ├── useContactForm.ts
│   └── index.ts
``` 