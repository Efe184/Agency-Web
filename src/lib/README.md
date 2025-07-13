# Lib Klasörü

Bu klasör, yardımcı fonksiyonları ve custom hook'ları içerir.

## Dosya Türleri

- **Utils**: Yardımcı fonksiyonlar
- **Hooks**: Custom React hook'ları
- **Validations**: Form validation fonksiyonları
- **Helpers**: Genel amaçlı yardımcı fonksiyonlar

## Örnek Dosyalar

- `utils.ts` - Genel yardımcı fonksiyonlar
- `cn.ts` - Tailwind class name birleştirici
- `hooks/` - Custom hook'lar
- `validations/` - Validation şemaları

## Kullanım

```typescript
// utils.ts
export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

// hooks/useLocalStorage.ts
export function useLocalStorage(key: string, initialValue: any) {
  // Custom hook logic
}
``` 