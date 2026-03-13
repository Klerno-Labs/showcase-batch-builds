import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Star, Quote, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Pegrio. We deliver innovative business solutions tailored to drive growth and efficiency for modern enterprises.",
};

import type { Metadata } from "next"; // Re-import necessary for top-level usage if not global, though defined in layout.

// Re-defining metadata for this specific page
export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Pegrio. We deliver innovative business solutions tailored to drive growth and efficiency for modern enterprises.",
  openGraph: {
    title: "Home | Pegrio",
    description: "Welcome to Pegrio. We deliver innovative business solutions tailored to drive growth and efficiency for modern enterprises.",
    images: [images["hero"].src],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={images["about"].src}
                  alt={images["about"].alt}
                  width={images["about"].width}
                  height={images["about"].height}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-primary">10+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Driving Growth Through Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Pegrio, we believe that every challenge is an opportunity in disguise. Founded in Houston, TX, we have helped hundreds of businesses streamline operations and unlock new revenue streams.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of experts combines industry knowledge with cutting-edge technology to deliver results that matter. We don't just provide solutions; we build partnerships that last.
              </p>
              <ul className="space-y-4 mb-8">
                {["Customized Strategies", "Data-Driven Decisions", "24/7 Expert Support"].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={siteConfig.links.about}>
                <Button variant="outline" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions designed to scale with your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                key: "service-1",
                title: "Strategic Consulting",
                description: "Navigate complex markets with our expert guidance. We analyze trends and position your brand for maximum impact.",
                price: "Starting at $2,500/mo"
              },
              {
                key: "service-2",
                title: "Data Analytics",
                description: "Turn raw data into actionable insights. Our dashboards provide real-time visibility into your key performance indicators.",
                price: "Starting at $1,800/mo"
              },
              {
                key: "service-3",
                title: "Team Workshops",
                description: "Foster innovation and collaboration within your teams. Our customized workshops boost morale and productivity.",
                price: "Starting at $3,000/session"
              }
            ].map((service) => (
              <div 
                key={service.key} 
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-gray-100">
                  <Image
                    src={images[service.key as keyof typeof images].src}
                    alt={images[service.key as keyof typeof images].alt}
                    width={images[service.key as keyof typeof images].width}
                    height={images[service.key as keyof typeof images].height}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 min-h-[3rem]">{service.description}</p>
                <div className="flex items-center justify-between border-t pt-6">
                  <span className="text-sm font-semibold text-primary">{service.price}</span>
                  <Link href={siteConfig.links.contact} className="text-sm font-medium text-gray-900 hover:text-primary flex items-center group-hover:underline">
                    Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Image
              src={images["testimonial-bg"].src}
              alt=""
              fill
              className="object-cover"
              priority={false}
            />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-400">
              Trusted by industry leaders to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria L.",
                role: "CEO, TechFlow",
                quote: "Pegrio transformed our operational workflow completely. We've seen a 40% increase in efficiency within just three months.",
                rating: 5
              },
              {
                name: "James T.",
                role: "Director, Nexus Solutions",
                quote: "The data analytics team at Pegrio uncovered insights we completely missed. It completely changed our Q4 strategy.",
                rating: 5
              },
              {
                name: "Sarah C.",
                role: "Founder, Urban Launch",
                quote: "Professional, responsive, and incredibly knowledgeable. The strategic consulting provided was worth every penny.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to take your business to the next level? Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">{siteConfig.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

import { useState } from "react"; // Import for Client Component Form
import { MapPin, Phone, Mail } from "lucide-react"; // Import for icons

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _gotcha: "" // Honeypot
  });
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
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSuccess(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
      {isSuccess ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
          <p className="text-gray-600">Thank you! We'll be in touch within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
              placeholder="(512) 555-0123"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
              placeholder="How can we help you?"
            />
          </div>

          {/* Honeypot */}
          <input
            type="text"
            name="_gotcha"
            value={formData._gotcha}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {error && (
            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md">
              {error}
            </div>
          )}

          <Button 
            type="submit" 
            size="xl" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}