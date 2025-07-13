# Styles Klasörü

Bu klasör, proje genelinde kullanılan CSS dosyalarını ve stilleri içerir.

## Dosya Yapısı

- `globals.css` - Ana CSS dosyası (app/globals.css'den import ediliyor)
- Bu klasörde component-specific CSS modülleri saklanabilir
- Tailwind'in custom component'leri buraya eklenebilir

## Kullanım

```css
/* Örnek: custom component stili */
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
  }
}
``` 