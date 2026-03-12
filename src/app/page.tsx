import { images } from '@/config/images';
import { siteConfig } from '@/config/site';
import HeroSection from '@/components/sections/HeroSection';
import ServicesOverview from '@/components/sections/ServicesOverview';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection
        heading="Welcome to Summit Real Estate"
        subtext="Your trusted partner in buying, selling, and investing in real estate."
        ctaPrimary="Get Started"
        ctaSecondary="Learn More"
        image={images.hero.src}
      />
      <ServicesOverview />
      <Testimonials />
      <CTASection
        heading="Ready to find your dream home?"
        description="Contact us today to get started on your real estate journey."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
}