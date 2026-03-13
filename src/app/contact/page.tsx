"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact Us | Pegrio Business Solutions",
  description: "Get in touch with Pegrio Business Solutions.",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _gotcha: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // Bot detected
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      if (res.ok) setIsSuccess(true);
      else setError("Something went wrong. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact Us</h2>
          <p className="mt-4 text-lg leading-relaxed">
            We would love to hear from you! Please fill out the form below.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-left">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={cn("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50", { "border-red-500": error })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={cn("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50", { "border-red-500": error })}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-left">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={cn("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50", { "border-red-500": error })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-left">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                className={cn("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50", { "border-red-500": error })}
              />
            </div>
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-3 rounded-lg shadow-lg hover:brightness-110 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {isSuccess && <p className="text-green-500">Thank you! We'll be in touch within 24 hours.</p>}
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}