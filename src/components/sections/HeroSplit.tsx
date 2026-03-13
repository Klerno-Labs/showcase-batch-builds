"use client";

import { cn } from "@/lib/utils";
import { images } from "@/config/images";

interface HeroSplitProps {
  headline: string;
  subtext: string;
  ctaText: string;
}

export function HeroSplit({ headline, subtext, ctaText }: HeroSplitProps) {
  return (
    <section className={cn("min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center")}>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-dark">{headline}</h1>
        <p className="mt-4 text-lg text-muted">{subtext}</p>
        <a href="#contact" className="mt-6 inline-block bg-accent text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
          {ctaText}
        </a>
      </div>
      <div className="relative h-full w-full">
        <img src={images.hero.src} alt={images.hero.alt} className="object-cover w-full h-full rounded-xl" priority={true} />
      </div>
    </section>
  );
}