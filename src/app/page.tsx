"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { images } from "@/config/images";
import { testimonials } from "@/config/site";

export const metadata = {
  title: "Home | Core Strength CrossFit",
  description: "Join Core Strength CrossFit for personalized training and group classes.",
  openGraph: {
    title: "Home | Core Strength CrossFit",
    description: "Join Core Strength CrossFit for personalized training and group classes.",
    image: images.hero.src,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection
        heading="Transform Your Fitness Journey"
        subtext="Join our community and achieve your goals with expert guidance."
        ctaPrimary={{ label: "Join Us Today", href: "/contact" }}
        ctaSecondary={{ label: "Learn More", href: "/about" }}
        image={images.hero.src}
      />
      <ServicesOverview />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection
        heading="Ready to Get Started?"
        description="Sign up today and take the first step towards a healthier you."
        button={{ label: "Get Started", href: "/contact" }}
      />
    </>
  );
}