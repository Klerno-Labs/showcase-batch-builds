import { useState } from "react";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact Us - " + siteConfig.name,
  description: "Get in touch with us.",
  openGraph: {
    title: "Contact Us - " + siteConfig.name,
    description: "Get in touch with us.",
    url: siteConfig.url + "/contact",
    images: [images.hero.src],
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-4 text-lg leading-relaxed">We'd love to hear from you!</p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div>
              <label htmlFor="name" className="block text-left">Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="border rounded-md p-2 w-full" />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-left">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="border rounded-md p-2 w-full" />
            </div>
            <div className="mt-4">
              <label htmlFor="phone" className="block text-left">Phone</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="border rounded-md p-2 w-full" />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-left">Message</label>
              <textarea name="message" id="message" value={formData.message} onChange={handleChange} required className="border rounded-md p-2 w-full" />
            </div>
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            <button type="submit" disabled={isSubmitting} className="mt-4 bg-primary text-white py-2 px-4 rounded-lg">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {isSuccess && <p className="mt-4 text-green-600">Thank you! We'll be in touch within 24 hours.</p>}
            {error && <p className="mt-4 text-red-600">{error}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}