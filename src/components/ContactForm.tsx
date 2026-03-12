"use client";
import { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [honeypotValue, setHoneypotValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotValue) return; // Bot detected
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('All fields are required.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
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
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" onChange={(e) => setHoneypotValue(e.target.value)} />
      <button type="submit" disabled={isSubmitting} className="bg-primary text-white py-2 px-4 rounded">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {isSuccess && <p className="text-green-500">Thank you! We'll be in touch within 24 hours.</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default ContactForm;