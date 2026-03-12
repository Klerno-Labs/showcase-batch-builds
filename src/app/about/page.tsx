import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import TeamGrid from "@/components/sections/TeamGrid";
import Gallery from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "About Us | Luxe Cuts Studio",
  description: "Learn more about Luxe Cuts Studio, our philosophy, and our talented team.",
  openGraph: {
    title: "About Us | Luxe Cuts Studio",
    description: "Learn more about Luxe Cuts Studio, our philosophy, and our talented team.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
  },
};

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <TeamGrid />
      <Gallery />
    </>
  );
}