"use client";

import { images } from "@/config/images";

interface HeroSectionProps {
  heading: string;
  subtext?: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

const HeroSection: React.FC<HeroSectionProps> = ({ heading, subtext, ctaPrimary, ctaSecondary }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gray-50">
      <img
        src={images["hero"].src}
        alt={images["hero"].alt}
        width={images["hero"].width}
        height={images["hero"].height}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{heading}</h1>
        {subtext && <p className="mt-4 text-xl sm:text-2xl">{subtext}</p>}
        <div className="mt-6">
          <a href={ctaPrimary.href} className="bg-primary text-white py-3 px-6 rounded-lg">
            {ctaPrimary.label}
          </a>
          {ctaSecondary && (
            <a href={ctaSecondary.href} className="ml-4 border border-white text-white py-3 px-6 rounded-lg">
              {ctaSecondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;