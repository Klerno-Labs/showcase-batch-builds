"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { images } from "@/config/images";

export const metadata = {
  title: "Contact Us | Core Strength CrossFit",
  description: "Get in touch with Core Strength CrossFit for inquiries and support.",
  openGraph: {
    title: "Contact Us | Core Strength CrossFit",
    description: "Get in touch with Core Strength CrossFit for inquiries and support.",
    image: images.hero.src,
  },
};

export default function Contact() {
  return (
    <>
      <HeroSection
        heading="Get in Touch"
        subtext="We'd love to hear from you!"
        image={images.hero.src}
      />
      <ContactForm />
    </>
  );
}