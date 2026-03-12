import { cn } from "@/lib/utils";

export const metadata = {
  title: "Contact Us - Summit Electric",
  description: "Get in touch with Summit Electric for reliable home improvement services.",
};

export default function ContactPage() {
  return (
    <main id="main" className={cn("pt-20")}>
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4">We’re here to help with all your home improvement needs.</p>
      {/* Contact form component goes here */}
    </main>
  );
}