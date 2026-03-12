import { ContactForm } from "@/components/forms/ContactForm";
import { images } from "@/config/images";

export const metadata = {
  title: "Contact Us | Aspen Dental Studio",
  description: "Get in touch with Aspen Dental Studio.",
  openGraph: {
    title: "Contact Us | Aspen Dental Studio",
    description: "Get in touch with Aspen Dental Studio.",
    image: images.hero.src,
  },
};

export default function Contact() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-center mb-8">Contact Us</h1>
        <p className="text-lg leading-relaxed text-center mb-12">
          We would love to hear from you! Please fill out the form below to get in touch.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}