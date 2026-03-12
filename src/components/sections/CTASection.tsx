"use client";

import { cn } from "@/lib/cn";

interface CTASectionProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ heading, description, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className={cn("py-16 md:py-24 lg:py-32 bg-primary text-white text-center")}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        <h2 className={cn("text-3xl sm:text-4xl font-bold mb-4")}>{heading}</h2>
        <p className={cn("mb-6")}>{description}</p>
        <a href={buttonLink} className={cn("bg-white text-primary px-6 py-3 rounded-lg")}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}