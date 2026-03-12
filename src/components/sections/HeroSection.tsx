"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  heading: string;
  subtext: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  imageSrc: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ heading, subtext, ctaPrimary, ctaSecondary, imageSrc }) => {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white p-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{heading}</h1>
        <p className="mt-4">{subtext}</p>
        <div className="mt-6">
          <button className="bg-accent text-white py-2 px-4 rounded">{ctaPrimary}</button>
          {ctaSecondary && <button className="ml-4 text-primary">{ctaSecondary}</button>}
        </div>
      </div>
    </motion.section>
  );
};