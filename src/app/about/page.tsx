import { images } from "@/config/images";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";

export default function AboutPage() {
  return (
    <main>
      <AboutSection
        content="At Wagmore Dog Grooming, we believe in providing the best care for your pets. Our team is dedicated to ensuring that every pet feels loved and pampered."
        imageSrc={images.about.src}
      />
      <TeamSection />
    </main>
  );
}