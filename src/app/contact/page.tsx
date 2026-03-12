import { ContactSection } from "@/components/sections/ContactSection";
import { images } from "@/config/images";

export const metadata = {
  title: "Contact Us | Wagmore Dog Grooming",
  description: "Get in touch with Wagmore Dog Grooming.",
  openGraph: {
    title: "Contact Us | Wagmore Dog Grooming",
    description: "Get in touch with Wagmore Dog Grooming.",
    image: images.hero.src,
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}