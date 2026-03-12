import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection
        heading="Welcome to Wagmore Dog Grooming"
        subtext="Your pet deserves the best care and love."
        ctaPrimary="Book Now"
        ctaSecondary="Learn More"
        imageSrc={images.hero.src}
      />
      <ServicesSection />
      <Testimonials />
      <CTASection
        heading="Join Our Community"
        description="Sign up for our newsletter to get the latest updates and offers."
        buttonLabel="Subscribe"
      />
    </main>
  );
}