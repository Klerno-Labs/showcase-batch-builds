"use client";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface HeroSectionProps {
  heading: string;
  subtext: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  imageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heading, subtext, ctaPrimary, ctaSecondary, imageSrc }) => {
  return (
    <section className="relative min-h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white p-8">
        <h1 className="text-4xl font-bold">{heading}</h1>
        <p className="mt-4">{subtext}</p>
        <div className="mt-6">
          <button className="bg-accent text-white py-2 px-4 rounded">{ctaPrimary}</button>
          {ctaSecondary && <button className="ml-4 text-primary">{ctaSecondary}</button>}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;