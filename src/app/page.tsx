```typescript
import { images } from "@/config/images";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summit Electric - Trusted Home Improvement Services",
  description: "Summit Electric provides quality home improvement solutions with a focus on reliability and professionalism.",
  openGraph: {
    title: "Summit Electric - Trusted Home Improvement Services",
    description: "Summit Electric provides quality home improvement solutions with a focus on reliability and professionalism.",
    images: [images.hero.src],
  },
};

export default function Home() {
  return (
    <main>
      <section className="min-h-[80vh] flex items-center justify-between bg-cover" style={{ backgroundImage: `url(${images.hero.src})` }}>
        <div className="max-w-lg p-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">Quality Home Improvement Services</h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-white">Reliable solutions for your home, delivered with professionalism.</p>
          <div className="mt-8">
            <a href="#contact" className="bg-primary text-white py-3 px-6 rounded-lg">Schedule Service</a>
            <a href="tel:(512) 555-1234" className="ml-4 border border-white text-white py-3 px-6 rounded-lg">Call Now</a>
          </div>
        </div>
      </section>
      {/* Additional sections go here */}
    </main>
  );
}
```