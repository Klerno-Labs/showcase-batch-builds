import { HeroSection } from "@/components/sections/HeroSection";
import { CompanyHistory } from "@/components/sections/CompanyHistory";
import { TeamIntroduction } from "@/components/sections/TeamIntroduction";
import { images } from "@/config/images";

export const metadata = {
  title: "About Us | Summit Electric",
  description: "Learn more about Summit Electric and our commitment to quality workmanship.",
  openGraph: {
    title: "About Us | Summit Electric",
    description: "Learn more about Summit Electric and our commitment to quality workmanship.",
    image: images.hero.src,
  },
};

export default function AboutPage() {
  return (
    <div>
      <HeroSection
        heading="About Summit Electric"
        subtext="Your trusted partner in home improvement."
        image={images.hero-alt.src}
      />
      <CompanyHistory />
      <TeamIntroduction />
    </div>
  );
}