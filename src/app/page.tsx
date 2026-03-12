```typescript
import { images } from "@/config/images";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | General Business",
  description: "Welcome to our General Business website. We provide exceptional services to help you succeed.",
  openGraph: {
    title: "Home | General Business",
    description: "Welcome to our General Business website. We provide exceptional services to help you succeed.",
    images: [images.hero.src],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative flex items-center justify-center min-h-[80vh] bg-gray-50">
        <div className="absolute inset-0">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            width={images.hero.width}
            height={images.hero.height}
            priority={true}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10 text-center text-gray-900">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Empowering Your Business</h1>
          <p className="mt-4 text-lg leading-relaxed">We provide tailored solutions to help your business thrive in today's competitive landscape.</p>
          <div className="mt-8">
            <button className="px-6 py-3 text-white bg-primary rounded-lg hover:brightness-110 transition duration-150">Get Started</button>
            <button className="px-6 py-3 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition duration-150 ml-4">Learn More</button>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <span className="text-gray-900">↓</span>
        </div>
      </section>
    </main>
  );
}
```