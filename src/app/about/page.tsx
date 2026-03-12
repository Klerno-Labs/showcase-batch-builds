"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { images } from "@/config/images";
import { team } from "@/config/site";

export const metadata = {
  title: "About Us | Core Strength CrossFit",
  description: "Learn more about Core Strength CrossFit and our dedicated team.",
  openGraph: {
    title: "About Us | Core Strength CrossFit",
    description: "Learn more about Core Strength CrossFit and our dedicated team.",
    image: images.hero-alt.src,
  },
};

export default function About() {
  return (
    <>
      <HeroSection
        heading="Our Story"
        subtext="Discover the passion behind Core Strength CrossFit."
        image={images.hero-alt.src}
      />
      <AboutSection team={team} />
    </>
  );
}