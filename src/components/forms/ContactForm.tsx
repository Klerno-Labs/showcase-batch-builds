"use client";

import { useState } from "react";

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [honeypotValue, setHoneypotValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotValue) return; // Bot detected
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      if (res.ok) {
        setIsSuccess(true);
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
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" value={formData.message} onChange={handleChange} required />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {isSuccess && <p className="text-green-500">Thank you! We'll be in touch within 24 hours.</p>}
    </form>
  );
};

export default ContactForm;