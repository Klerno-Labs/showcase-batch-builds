"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { images } from "@/config/images";

export const metadata = {
  title: "Our Services | Core Strength CrossFit",
  description: "Explore the services offered at Core Strength CrossFit.",
  openGraph: {
    title: "Our Services | Core Strength CrossFit",
    description: "Explore the services offered at Core Strength CrossFit.",
    image: images.service-1.src,
  },
};

export default function Services() {
  return (
    <>
      <HeroSection
        heading="Our Services"
        subtext="Tailored fitness solutions to meet your needs."
        image={images.service-1.src}
      />
      <ServicesOverview />
    </>
  );
}