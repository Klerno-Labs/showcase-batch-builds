"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

interface HeroSectionProps {
  heading: string;
  subtext?: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  image: string;
}

export function HeroSection({ heading, subtext, ctaPrimary, ctaSecondary, image }: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{heading}</h1>
        {subtext && <p className="mt-4 text-xl sm:text-2xl">{subtext}</p>}
        <div className="mt-6">
          <a href={ctaPrimary.href} className="bg-primary text-white py-2 px-4 rounded-lg">{ctaPrimary.label}</a>
          {ctaSecondary && (
            <a href={ctaSecondary.href} className="ml-4 border border-white text-white py-2 px-4 rounded-lg">{ctaSecondary.label}</a>
          )}
        </div>
      </div>
    </section>
  );
}