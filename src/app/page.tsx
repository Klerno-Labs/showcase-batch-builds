import { images } from "@/config/images";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Summit Real Estate | Your Trusted Brokerage",
  description: "Summit Real Estate offers expert services for buying, selling, and investing in properties.",
  openGraph: {
    title: "Summit Real Estate | Your Trusted Brokerage",
    description: "Summit Real Estate offers expert services for buying, selling, and investing in properties.",
    image: images.hero.src,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection
        heading="Find Your Dream Home"
        subtext="Expert guidance for buyers and sellers."
        ctaPrimary="Get Started"
        ctaSecondary="Learn More"
        image={images.hero.src}
      />
      <ServicesOverview />
      <Testimonials />
      <CTASection
        heading="Ready to Make a Move?"
        description="Contact us today to get started on your real estate journey."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
}