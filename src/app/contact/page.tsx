import { ContactForm } from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
    </section>
  );
}