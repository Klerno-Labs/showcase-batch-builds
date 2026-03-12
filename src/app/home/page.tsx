```typescript
import HeroSection from '@/components/HeroSection';
import { images } from '@/config/images';
import { metadata } from './metadata';

export const metadata = {
  title: 'Wagmore Dog Grooming | Quality Pet Care Services',
  description: 'Wagmore Dog Grooming offers grooming, boarding, daycare, and veterinary wellness services.',
  openGraph: {
    title: 'Wagmore Dog Grooming | Quality Pet Care Services',
    description: 'Wagmore Dog Grooming offers grooming, boarding, daycare, and veterinary wellness services.',
    image: images.hero.src,
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection
        heading="Welcome to Wagmore Dog Grooming"
        subtext="Your pet's home away from home."
        ctaPrimary="Book Now"
        ctaSecondary="Learn More"
        imageSrc={images.hero.src}
      />
    </main>
  );
}
```