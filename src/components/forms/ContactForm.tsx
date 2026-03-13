"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary" />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Your Phone" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary" />
      <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary" />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <button type="submit" disabled={isSubmitting} className="bg-accent text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {isSuccess && <p className="text-green-500">Thank you! We&apos;ll be in touch within 24 hours.</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}