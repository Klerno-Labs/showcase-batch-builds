import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FAQs } from "@/components/sections/FAQs";
import { images } from "@/config/images";

export const metadata = {
  title: "Our Services | Summit Electric",
  description: "Explore the range of services offered by Summit Electric.",
  openGraph: {
    title: "Our Services | Summit Electric",
    description: "Explore the range of services offered by Summit Electric.",
    image: images.hero.src,
  },
};

export default function ServicesPage() {
  return (
    <div>
      <HeroSection
        heading="Our Services"
        subtext="Professional home improvement services tailored to your needs."
        image={images.hero-alt.src}
      />
      <ServicesGrid />
      <TrustSignals />
      <FAQs />
    </div>
  );
}