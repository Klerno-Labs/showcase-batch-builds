"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface HeroSectionProps {
  heading: string;
  subtext: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  image: string;
}

export default function HeroSection({ heading, subtext, ctaPrimary, ctaSecondary, image }: HeroSectionProps) {
  return (
    <section className={cn("relative min-h-[80vh] flex items-center justify-center bg-gray-900 text-white")}>
      <Image
        src={image}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        priority={true}
        className={cn("absolute inset-0 z-0")}
      />
      <div className={cn("relative z-10 text-center p-4")}>
        <motion.h1
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
          className={cn("text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight")}
        >
          {heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn("text-xl sm:text-2xl font-semibold")}
        >
          {subtext}
        </motion.p>
        <div className={cn("mt-6 space-x-4")}>
          <button className={cn("bg-primary text-white px-6 py-3 rounded-lg")}>{ctaPrimary}</button>
          {ctaSecondary && (
            <button className={cn("border border-white text-white px-6 py-3 rounded-lg")}>{ctaSecondary}</button>
          )}
        </div>
      </div>
    </section>
  );
}