```typescript
import { images } from '@/config/images';

export const metadata = {
  title: 'About Us | General Business',
  description: 'Learn more about our mission and values.',
  openGraph: {
    title: 'About Us | General Business',
    description: 'Learn more about our mission and values.',
    url: 'https://example.com/about',
    images: [
      images.about.src,
    ],
  },
};

export default function About() {
  return (
    <main>
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About Us</h1>
          <p className="text-lg leading-relaxed text-gray-600 mt-4">
            Our mission is to provide exceptional services that empower businesses to reach their full potential.
          </p>
          <img
            src={images.about.src}
            alt={images.about.alt}
            width={images.about.width}
            height={images.about.height}
            className="rounded-xl mt-8"
          />
        </div>
      </section>
    </main>
  );
}
```