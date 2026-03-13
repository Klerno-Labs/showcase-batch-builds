```typescript
import { images } from '@/config/images';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Home | General Business',
  description: 'Professional services for your business needs.',
  openGraph: {
    title: 'Home | General Business',
    description: 'Professional services for your business needs.',
    url: 'https://example.com',
    images: [
      images.hero.src,
    ],
  },
};

export default function Home() {
  return (
    <main>
      <section className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Elevate Your Business
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 mt-4">
            We provide tailored solutions to help your business thrive in today's competitive landscape.
          </p>
          <div className="mt-8">
            <button className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:brightness-110 transition">
              Get Started
            </button>
            <button className="border border-primary text-primary py-3 px-6 rounded-lg ml-4">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-8 border-2 border-gray-600 rounded-full animate-bounce"></div>
        </div>
      </section>
    </main>
  );
}
```