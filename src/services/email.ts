import emailjs from '@emailjs/browser';
import { TContactForm, TEmailResponse } from '@/types/contact';

// EmailJS yapılandırma sabitleri
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

/**
 * EmailJS servisini başlatır
 */
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

/**
 * İletişim formu verilerini e-posta olarak gönderir
 */
export const sendContactForm = async (formData: TContactForm): Promise<TEmailResponse> => {
  try {
    // EmailJS'i başlat
    initEmailJS();

    // Form verilerini template parametrelerine dönüştür
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'OzanTasarım Ekibi',
      reply_to: formData.email,
    };

    // E-posta gönder
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return {
      status: response.status,
      text: response.text,
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    
    // Hata durumunda standart hata döndür
    return {
      status: 500,
      text: 'Email sending failed',
    };
  }
};

/**
 * E-posta adresini doğrular
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Form verilerini doğrular
 */
export const validateContactForm = (formData: TContactForm): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('İsim alanı zorunludur.');
  }

  if (!formData.email.trim()) {
    errors.push('E-posta alanı zorunludur.');
  } else if (!validateEmail(formData.email)) {
    errors.push('Geçerli bir e-posta adresi giriniz.');
  }

  if (!formData.message.trim()) {
    errors.push('Mesaj alanı zorunludur.');
  } else if (formData.message.trim().length < 10) {
    errors.push('Mesaj en az 10 karakter olmalıdır.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}; 