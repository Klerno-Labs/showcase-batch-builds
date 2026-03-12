import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const honeypotValue = ""; // Implement honeypot logic here

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotValue) return; // Bot detected
    setIsSubmitting(true);
    setError("");

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
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4")}>
      <input type="text" name="name" placeholder="Your Name" required
        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" name="email" placeholder="Your Email" required
        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <textarea name="message" placeholder="Your Message" required
        value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {isSuccess && <p className="text-green-500">Thank you! We'll be in touch within 24 hours.</p>}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
    </form>
  );
}