```typescript
import Image from "next/image";
import { images } from "@/config/images";

interface HeroSectionProps {
  heading: string;
  subtext: string;
  ctaText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heading, subtext, ctaText }) => {
  return (
    <section className="min-h-[80vh] flex items-center justify-between bg-cover bg-center" style={{ backgroundImage: `url(${images.hero.src})` }}>
      <div className="max-w-lg p-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{heading}</h1>
        <p className="text-xl sm:text-2xl font-semibold">{subtext}</p>
        <button className="mt-4 bg-primary text-white py-2 px-4 rounded-lg">{ctaText}</button>
      </div>
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        width={images.hero.width}
        height={images.hero.height}
        priority={true}
      />
    </section>
  );
};

export default HeroSection;
```