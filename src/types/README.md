# Types Klasörü

Bu klasör, TypeScript tip tanımlarını içerir.

## Adlandırma Kuralları

- **T prefix**: Tip tanımları `T` ile başlamalı
- **PascalCase**: Tip isimleri PascalCase olmalı
- **Descriptive**: Açıklayıcı isimler kullanın

## Örnek Tipler

- `TTeamMember` - Ekip üyesi tipi
- `TService` - Hizmet tipi
- `TTestimonial` - Müşteri yorumu tipi
- `TContactForm` - İletişim formu tipi

## Kullanım

```typescript
// team.ts
export interface TTeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

// services.ts
export interface TService {
  id: string;
  title: string;
  description: string;
  icon: string;
}
``` 