import { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import ContactInformation from "@/components/ui/ContactInformation";

export const metadata: Metadata = {
  title: "Contact Us | Luxe Cuts Studio",
  description: "Get in touch with Luxe Cuts Studio for appointments and inquiries.",
  openGraph: {
    title: "Contact Us | Luxe Cuts Studio",
    description: "Get in touch with Luxe Cuts Studio for appointments and inquiries.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactInformation />
      <ContactForm />
    </>
  );
}