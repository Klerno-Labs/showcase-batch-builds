"use client";
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';

interface HeroSectionProps {
  heading: string;
  subtext: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  image: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heading, subtext, ctaPrimary, ctaSecondary, image }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center bg-gray-50">
      <Image
        src={image}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        priority={true}
      />
      <div className="relative z-10 text-white">
        <h1 className="text-6xl font-bold">{heading}</h1>
        <p className="mt-4 text-xl">{subtext}</p>
        <div className="mt-6">
          <button className="bg-accent text-white px-6 py-3 rounded-lg">{ctaPrimary}</button>
          {ctaSecondary && (
            <button className="ml-4 border border-white text-white px-6 py-3 rounded-lg">{ctaSecondary}</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;