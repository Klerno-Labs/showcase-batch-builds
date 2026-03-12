import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { images } from "@/config/images";

export const metadata = {
  title: "Home | Summit Electric",
  description: "Welcome to Summit Electric, your trusted local service provider for home improvement solutions.",
  openGraph: {
    title: "Home | Summit Electric",
    description: "Welcome to Summit Electric, your trusted local service provider for home improvement solutions.",
    image: images.hero.src,
  },
};

export default function HomePage() {
  return (
    <div>
      <HeroSection
        heading="Quality Home Improvement Solutions"
        subtext="Delivering reliable and professional services to enhance your home."
        cta={{ primary: "Schedule Service", secondary: "Call Now" }}
        image={images.hero.src}
      />
      <ServicesGrid />
      <TestimonialsSection />
      <CTABanner
        heading="Ready to Transform Your Home?"
        description="Contact us today for a free consultation."
        buttonText="Get a Quote"
      />
    </div>
  );
}