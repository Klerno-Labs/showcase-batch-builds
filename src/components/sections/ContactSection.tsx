"use client";

import { useState } from "react";

export const ContactSection = () => {
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="border p-2 rounded w-full" />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="border p-2 rounded w-full" />
          </div>
          <div>
            <label htmlFor="phone" className="block font-semibold">Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="border p-2 rounded w-full" />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required className="border p-2 rounded w-full" />
          </div>
          <button type="submit" disabled={isSubmitting} className="bg-primary text-white py-2 px-4 rounded">
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {isSuccess && <p className="text-green-600">Thank you! We'll be in touch within 24 hours.</p>}
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </div>
    </section>
  );
};