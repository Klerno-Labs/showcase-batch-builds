"use client";

import { cn } from "@/lib/cn";

interface CaseStudy {
  title: string;
  description: string;
  link: string;
}

interface CaseStudiesProps {
  studies: CaseStudy[];
}

export default function CaseStudies({ studies }: CaseStudiesProps) {
  return (
    <section className={cn("py-16 md:py-24 lg:py-32 bg-white")}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        <h2 className={cn("text-3xl sm:text-4xl font-bold text-center mb-8")}>Case Studies</h2>
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6")}>
          {studies.map((study) => (
            <div key={study.title} className={cn("bg-gray-100 shadow-md rounded-lg p-6")}>
              <h3 className={cn("text-xl font-semibold")}>{study.title}</h3>
              <p className={cn("text-gray-600")}>{study.description}</p>
              <a href={study.link} className={cn("text-primary mt-4 inline-block")}>Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}