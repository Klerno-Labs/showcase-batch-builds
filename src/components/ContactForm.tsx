```typescript
import { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {isSuccess && <p>Thank you! We'll be in touch within 24 hours.</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default ContactForm;
```