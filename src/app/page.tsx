```typescript
import { images } from '../config/images';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Core Strength CrossFit - Home',
  description: 'Join Core Strength CrossFit for personalized training and group classes in Houston, TX.',
  openGraph: {
    title: 'Core Strength CrossFit - Home',
    description: 'Join Core Strength CrossFit for personalized training and group classes in Houston, TX.',
    image: images.hero.src,
  },
};

export default function Home() {
  return (
    <main>
      <section className="min-h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${images.hero.src})` }}>
        <div className="flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Transform Your Fitness Journey</h1>
          <p className="mt-4 text-xl sm:text-2xl">Join our community for personalized training and group classes.</p>
          <div className="mt-8">
            <a href="#services" className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg">Get Started</a>
            <a href="#contact" className="border border-white text-white py-3 px-6 rounded-lg ml-4">Contact Us</a>
          </div>
        </div>
      </section>
      {/* Other sections go here */}
    </main>
  );
}
```