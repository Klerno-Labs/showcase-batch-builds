import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesTeaser from "@/components/sections/ServicesTeaser";
import TeamHighlight from "@/components/sections/TeamHighlight";
import Testimonials from "@/components/sections/Testimonials";
import ConversionCTA from "@/components/sections/ConversionCTA";

export const metadata: Metadata = {
  title: "Home | Luxe Cuts Studio",
  description: "Experience the art of hair at Luxe Cuts Studio. Upscale beauty services in a luxurious setting.",
  openGraph: {
    title: "Home | Luxe Cuts Studio",
    description: "Experience the art of hair at Luxe Cuts Studio. Upscale beauty services in a luxurious setting.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesTeaser />
      <TeamHighlight />
      <Testimonials />
      <ConversionCTA />
    </>
  );
}