```typescript
import { images } from '@/config/images';
import { metadata } from './metadata';

export const metadata = {
  title: 'About Us | Wagmore Dog Grooming',
  description: 'Learn more about Wagmore Dog Grooming and our dedicated team.',
  openGraph: {
    title: 'About Us | Wagmore Dog Grooming',
    description: 'Learn more about Wagmore Dog Grooming and our dedicated team.',
    image: images.hero.src,
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <p className="text-lg text-center">At Wagmore Dog Grooming, we are passionate about providing the best care for your pets.</p>
        <img src={images.about.src} alt={images.about.alt} width={images.about.width} height={images.about.height} />
      </section>
    </main>
  );
}
```