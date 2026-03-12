import { Metadata } from "next";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import AddOnsSection from "@/components/sections/AddOnsSection";

export const metadata: Metadata = {
  title: "Services | Luxe Cuts Studio",
  description: "Explore our range of upscale beauty services and pricing.",
  openGraph: {
    title: "Services | Luxe Cuts Studio",
    description: "Explore our range of upscale beauty services and pricing.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesAccordion />
      <AddOnsSection />
    </>
  );
}