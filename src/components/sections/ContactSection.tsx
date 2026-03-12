"use client";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
        <Input label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />
        <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
        <Textarea label="Message" name="message" value={formData.message} onChange={handleChange} />
        <Button label={isSubmitting ? "Sending..." : "Send Message"} onClick={handleSubmit} />
        {isSuccess && <p className="text-green-500 mt-4">Thank you! We'll be in touch within 24 hours.</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </section>
  );
};

export default ContactSection;