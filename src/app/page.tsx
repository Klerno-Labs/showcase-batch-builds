"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Loader2, Star, Mail, Phone, MapPin, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import images from "@/config/images";
import { cn } from "@/lib/utils";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1 },
};

export default function Home() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Basic Client Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Accelerate Your Business Growth
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                Pegrio provides the strategic insights and technical expertise you need to scale efficiently in a competitive market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="#services" className="flex items-center justify-center px-8 py-3 border border-gray-300 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors w-full sm:w-auto">
                  View Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={images.hero.src}
                  alt={images.hero.alt}
                  width={images.hero.width}
                  height={images.hero.height}
                  priority
                  className="object-cover w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Expert Solutions
            </h2>
            <p className="text-lg text-gray-600">
              We offer a comprehensive suite of services designed to modernize your operations and boost profitability.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Strategic Consulting",
                desc: "Data-driven roadmaps to navigate market shifts and seize new opportunities with confidence.",
                img: "service-1",
                icon: "Chart",
              },
              {
                title: "Digital Transformation",
                desc: "Modernize your legacy systems and workflows to stay ahead in the digital age.",
                img: "service-2",
                icon: "Cpu",
              },
              {
                title: "Team Optimization",
                desc: "Enhance productivity and collaboration through tailored organizational design.",
                img: "service-3",
                icon: "Users",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={images[service.img as keyof typeof images].src}
                    alt={images[service.img as keyof typeof images].alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={images.about.src}
                  alt={images.about.alt}
                  width={images.about.width}
                  height={images.about.height}
                  className="object-cover w-full h-auto"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Building the Future of Business
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in Houston, Pegrio has helped over 200 businesses transform their operations. Our philosophy is simple: combine human expertise with powerful data to unlock sustainable growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We don't just give advice; we work alongside your team to implement real change that sticks.
              </p>
              <ul className="space-y-4 mb-8">
                {["Proven track record across industries", "Dedicated senior consultants", "Results-focused methodology"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check size={14} className="text-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="text-primary font-semibold hover:underline inline-flex items-center">
                Learn more about our process <ArrowRight size={18} className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Trusted by Leaders
            </h2>
            <p className="text-lg text-gray-600">
              See what our clients have to say about partnering with Pegrio.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Maria L.",
                role: "CEO, Vertex Logistics",
                text: "Pegrio completely reshaped our distribution strategy. We saw a 30% efficiency increase within the first quarter. Their team is exceptional.",
              },
              {
                name: "James T.",
                role: "Director, Nexus Tech",
                text: "The digital transformation roadmap they provided was clear, actionable, and perfectly aligned with our budget. Highly recommended.",
              },
              {
                name: "Sarah J.",
                role: "Founder, GreenLeaf Co.",
                text: "I was skeptical at first, but their data-driven approach won me over. They identified blind spots we never knew existed.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-8 shadow-sm relative"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Let's Discuss Your Project
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Ready to take your business to the next level? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">(713) 555-0123</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8am-6pm CST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@pegrio.com</p>
                    <p className="text-sm text-gray-500">We reply within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office</h4>
                    <p className="text-gray-600">4521 Westheimer Rd, Suite 200</p>
                    <p className="text-gray-600">Houston, TX 77027</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We'll be in touch shortly.</p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 text-primary font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot for spam */}
                    <input
                      type="text"
                      name="_gotcha"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-gray-700">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        className="flex h-12 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base ring-offset-white focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="">Select a service...</option>
                        <option value="consulting">Strategic Consulting</option>
                        <option value="transformation">Digital Transformation</option>
                        <option value="optimization">Team Optimization</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    {error && (
                      <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={images.cta.src}
            alt={images.cta.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have accelerated their growth with Pegrio.
          </p>
          <a href="#contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 border-none">
              Get a Free Consultation
            </Button>
          </a>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Pegrio",
            image: images.hero.src,
            telephone: "(713) 555-0123",
            email: "info@pegrio.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4521 Westheimer Rd, Suite 200",
              addressLocality: "Houston",
              addressRegion: "TX",
              postalCode: "77027",
              addressCountry: "US",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
            priceRange: "$$$",
          }),
        }}
      />
    </>
  );
}