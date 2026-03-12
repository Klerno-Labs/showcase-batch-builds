import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <main>
      <HeroSection
        heading="Quality Electrical Services You Can Trust"
        subtext="Providing reliable and professional electrical solutions for your home."
        cta={{ primary: "Schedule Service", secondary: "Call Now" }}
        image={images.hero.src}
      />
      <ServicesGrid />
      <TestimonialsSection />
      <CTABanner
        heading="Ready to Get Started?"
        description="Contact us today for a free consultation!"
        buttonText="Get a Quote"
      />
    </main>
  );
}