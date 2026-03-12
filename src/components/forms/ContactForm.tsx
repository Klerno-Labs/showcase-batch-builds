"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [honeypotValue, setHoneypotValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotValue) return; // Bot detected
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
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
    <section className={cn("py-16 md:py-24 lg:py-32 bg-gray-50")}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        <h2 className={cn("text-3xl sm:text-4xl font-bold text-center mb-8")}>Contact Us</h2>
        <form onSubmit={handleSubmit} className={cn("space-y-4")}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className={cn("border border-gray-300 rounded-lg p-2 w-full")} />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className={cn("border border-gray-300 rounded-lg p-2 w-full")} />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required className={cn("border border-gray-300 rounded-lg p-2 w-full")} />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" onChange={(e) => setHoneypotValue(e.target.value)} />
          <button type="submit" disabled={isSubmitting} className={cn("bg-primary text-white px-6 py-3 rounded-lg")}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {isSuccess && <p className={cn("text-green-600")}>Thank you! We'll be in touch within 24 hours.</p>}
          {error && <p className={cn("text-red-600")}>{error}</p>}
        </form>
      </div>
    </section>
  );
}