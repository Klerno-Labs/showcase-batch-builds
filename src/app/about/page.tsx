import { images } from "@/config/images";
import CompanyHistory from "@/components/sections/CompanyHistory";
import TeamIntroduction from "@/components/sections/TeamIntroduction";

export default function AboutPage() {
  return (
    <main>
      <section className="py-16">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <p className="text-lg text-center mt-4">
          At Summit Electric, we pride ourselves on delivering top-notch electrical services with a focus on quality and customer satisfaction.
        </p>
        <img src={images.about.src} alt={images.about.alt} className="w-full h-auto mt-8" />
      </section>
      <CompanyHistory />
      <TeamIntroduction />
    </main>
  );
}