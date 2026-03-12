import { AboutSection } from "@/components/sections/AboutSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { images } from "@/config/images";

export const metadata = {
  title: "About Us | Wagmore Dog Grooming",
  description: "Learn more about Wagmore Dog Grooming and our dedicated team.",
  openGraph: {
    title: "About Us | Wagmore Dog Grooming",
    description: "Learn more about Wagmore Dog Grooming and our dedicated team.",
    image: images.hero.src,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <TeamSection />
    </>
  );
}