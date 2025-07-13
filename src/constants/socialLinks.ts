import { Linkedin, Instagram, Palette } from 'lucide-react';

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/ozantasarim',
    icon: Linkedin,
    color: 'hover:text-blue-600',
    bgColor: 'hover:bg-blue-50'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/ozantasarim',
    icon: Instagram,
    color: 'hover:text-pink-600',
    bgColor: 'hover:bg-pink-50'
  },
  {
    name: 'Behance',
    href: 'https://behance.net/ozantasarim',
    icon: Palette,
    color: 'hover:text-purple-600',
    bgColor: 'hover:bg-purple-50'
  }
] as const;

export const FOOTER_CONTENT = {
  brandName: 'OzanTasarım',
  description: 'Dijitalde fark yaratmak için buradayız. Modern tasarım ve geliştirme çözümleri sunuyoruz.',
  copyright: '© 2024 OzanTasarım. Tüm hakları saklıdır.',
  address: 'İstanbul, Türkiye',
  phone: '+90 (555) 123-4567',
  email: 'info@ozantasarim.com'
} as const; 