import { HeroSection } from "@/components/sections/HeroSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { images } from "@/config/images";

export const metadata = {
  title: "Contact Us | Summit Electric",
  description: "Get in touch with Summit Electric for your home improvement needs.",
  openGraph: {
    title: "Contact Us | Summit Electric",
    description: "Get in touch with Summit Electric for your home improvement needs.",
    image: images.hero.src,
  },
};

export default function ContactPage() {
  return (
    <div>
      <HeroSection
        heading="Contact Summit Electric"
        subtext="We're here to help you with your home improvement projects."
        image={images.hero-alt.src}
      />
      <ContactForm />
    </div>
  );
}