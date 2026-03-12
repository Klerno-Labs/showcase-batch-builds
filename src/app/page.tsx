import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { images } from '@/config/images';

export const metadata: Metadata = {
  title: 'Home | General Business',
  description: 'Welcome to our general business website, where we provide exceptional services to our clients.',
  openGraph: {
    title: 'Home | General Business',
    description: 'Welcome to our general business website, where we provide exceptional services to our clients.',
    images: [images.hero.src],
  },
};

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Welcome to Our Business</h1>
      <p className="text-lg">We offer a range of services to help you succeed.</p>
      <ContactForm />
    </section>
  );
}