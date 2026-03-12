"use client";

import { cn } from "@/lib/cn";

interface AboutSectionProps {
  history: string;
  values: string[];
}

export default function AboutSection({ history, values }: AboutSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 lg:py-32 bg-gray-50")}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        <h2 className={cn("text-3xl sm:text-4xl font-bold text-center mb-8")}>About Us</h2>
        <p className={cn("text-lg text-gray-700 text-center mb-6")}>{history}</p>
        <h3 className={cn("text-2xl font-semibold text-center mb-4")}>Our Values</h3>
        <ul className={cn("list-disc list-inside text-gray-700")}>
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}