import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/features/contact/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Testimonials />
      <ContactForm />
    </>
  );
}
