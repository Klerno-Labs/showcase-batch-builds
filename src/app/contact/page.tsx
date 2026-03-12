"use client";

import ContactForm from "@/components/forms/ContactForm";
import { images } from "@/config/images";

export const metadata = {
  title: "Contact Us | Summit Real Estate",
  description: "Get in touch with Summit Real Estate for any inquiries.",
  openGraph: {
    title: "Contact Us | Summit Real Estate",
    description: "Get in touch with Summit Real Estate for any inquiries.",
    image: images.hero.src,
  },
};

export default function Contact() {
  const handleSubmit = async (data: { name: string; email: string; message: string }) => {
    // Implement your form submission logic here
  };

  return (
    <>
      <ContactForm onSubmit={handleSubmit} />
    </>
  );
}