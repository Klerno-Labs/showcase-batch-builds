import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Testimonials } from "@/components/sections/Testimonials";
import { images } from "@/config/images";

export const metadata = {
  title: "Home | Aspen Dental Studio",
  description: "Welcome to Aspen Dental Studio, where your smile is our priority.",
  openGraph: {
    title: "Home | Aspen Dental Studio",
    description: "Welcome to Aspen Dental Studio, where your smile is our priority.",
    image: images.hero.src,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection
        title="Gentle Family Dentistry"
        subtitle="Your smile is our top priority."
        ctaText="Book Now"
        imageUrl={images.hero.src}
      />
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="General Dentistry"
              description="Comprehensive dental care for the whole family."
              imageUrl={images.service-1.src}
            />
            <ServiceCard
              title="Cosmetic Dentistry"
              description="Enhance your smile with our cosmetic procedures."
              imageUrl={images.service-2.src}
            />
            <ServiceCard
              title="Emergency Dentistry"
              description="Immediate care for dental emergencies."
              imageUrl={images.service-3.src}
            />
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}