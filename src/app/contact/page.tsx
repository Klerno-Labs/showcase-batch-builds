import { useState } from "react";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
    <main className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input type="text" name="name" id="name" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email" name="email" id="email" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
            <input type="tel" name="phone" id="phone" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea name="message" id="message" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50" />
          </div>
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white py-2 rounded-lg">
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {isSuccess && <p className="text-green-600">Thank you! We'll be in touch within 24 hours.</p>}
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </div>
    </main>
  );
};

export default ContactPage;