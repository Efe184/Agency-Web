import { Linkedin, Instagram, Palette } from 'lucide-react';

export const SOCIAL_LINKS = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/dijitalajans',
    icon: Linkedin,
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/dijitalajans',
    icon: Instagram,
  },
  {
    platform: 'Behance',
    url: 'https://behance.net/dijitalajans',
    icon: Palette,
  },
] as const;

export const FOOTER_CONTENT = {
  brandName: 'Dijital Ajans',
  description: 'Modern web tasarım ve geliştirme hizmetleri ile dijital dünyadaki yerinizi alın. Markanızı güçlendiren çözümler sunuyoruz.',
  copyright: '© 2024 Dijital Ajans. Tüm hakları saklıdır.',
  address: 'İstanbul, Türkiye',
  phone: '+90 555 123 4567',
  email: 'info@dijitalajans.com',
} as const; 