"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Bot detected

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

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
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Let's Talk Business
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to take the next step? Fill out the form below or reach out directly. We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Office</h3>
                    <p className="text-gray-600">{siteConfig.links.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href={`tel:${siteConfig.links.phone}`} className="text-gray-600 hover:text-primary">
                      {siteConfig.links.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href={`mailto:${siteConfig.links.email}`} className="text-gray-600 hover:text-primary">
                      {siteConfig.links.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 8am - 6pm</p>
                    <p className="text-gray-600">Sat: 9am - 2pm</p>
                    <p className="text-gray-600">Sun: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Map Image */}
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                 <Image 
                   src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=1200&h=800"
                   alt="Map location"
                   fill
                   className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                 />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-slate-50 p-8 rounded-xl shadow-sm"
            >
              {isSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="hidden">
                    <label htmlFor="gotcha">Don't fill this out if you're human:</label>
                    <input
                      type="text"
                      name="_gotcha"
                      id="gotcha"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        maxLength={150}
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-shadow"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        maxLength={20}
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-shadow"
                        placeholder="(512) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-shadow"
                    >
                      <option value="">Select a service...</option>
                      <option value="Strategic Planning">Strategic Planning</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Process Optimization">Process Optimization</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Change Management">Change Management</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      maxLength={1000}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-shadow resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:brightness-110 transition-all",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}