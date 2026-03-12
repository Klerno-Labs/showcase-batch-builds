import { ServicesSection } from "@/components/sections/ServicesSection";
import { FAQsSection } from "@/components/sections/FAQsSection";
import { images } from "@/config/images";

export const metadata = {
  title: "Our Services | Wagmore Dog Grooming",
  description: "Explore the range of services we offer for your pets.",
  openGraph: {
    title: "Our Services | Wagmore Dog Grooming",
    description: "Explore the range of services we offer for your pets.",
    image: images.hero.src,
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
      <FAQsSection />
    </>
  );
}