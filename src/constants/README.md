# Constants Klasörü

Bu klasör, uygulamada kullanılan statik verileri ve sabitleri içerir.

## Dosya Türleri

- **Navigation**: Menü linkleri
- **Content**: Sabit metinler
- **Config**: Yapılandırma sabitleri
- **Meta**: SEO meta verileri

## Örnek Dosyalar

- `navigation.ts` - Navigasyon menüsü
- `services.ts` - Hizmet listesi
- `team.ts` - Ekip bilgileri
- `contact.ts` - İletişim bilgileri

## Kullanım

```typescript
// navigation.ts
export const NAV_LINKS = [
  { href: '/', label: 'Anasayfa' },
  { href: '/about', label: 'Hakkımızda' },
  { href: '/services', label: 'Hizmetler' },
  { href: '/contact', label: 'İletişim' },
];
``` 