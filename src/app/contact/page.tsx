```typescript
import ContactForm from '@/components/ContactForm';
import { metadata } from './metadata';

export const metadata = {
  title: 'Contact Us | Wagmore Dog Grooming',
  description: 'Get in touch with Wagmore Dog Grooming for all your pet care needs.',
  openGraph: {
    title: 'Contact Us | Wagmore Dog Grooming',
    description: 'Get in touch with Wagmore Dog Grooming for all your pet care needs.',
    image: '/images/hero.jpg',
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <p className="text-lg text-center">We'd love to hear from you! Fill out the form below.</p>
        <ContactForm />
      </section>
    </main>
  );
}
```