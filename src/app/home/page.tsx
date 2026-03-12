import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { images } from "@/config/images";

export const metadata = {
  title: "Home | Wagmore Dog Grooming",
  description: "Welcome to Wagmore Dog Grooming, your local pet care experts.",
  openGraph: {
    title: "Home | Wagmore Dog Grooming",
    description: "Welcome to Wagmore Dog Grooming, your local pet care experts.",
    image: images.hero.src,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection
        heading="Your Pet Deserves the Best"
        subtext="Providing loving care for your furry friends."
        ctaPrimary="Book Now"
        ctaSecondary="Learn More"
        imageSrc={images.hero.src}
      />
      <ServicesSection />
      <Testimonials />
      <CTASection
        heading="Join Our Family"
        description="Sign up for our newsletter to stay updated."
        buttonLabel="Subscribe"
      />
    </>
  );
}