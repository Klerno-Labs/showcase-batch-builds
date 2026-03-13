import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import { ContactForm } from "@/components/contact-form";
import { cn } from "@/lib/utils";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const staggerContainer = {
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1, duration: 0.7 },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] items-center bg-white pt-20 lg:min-h-[80vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Elevate Your Business Vision
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We help organizations in Houston and beyond streamline operations, optimize financial performance, and implement cutting-edge digital strategies.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative lg:ml-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={images["hero"].src}
                  alt={images["hero"].alt}
                  width={images["hero"].width}
                  height={images["hero"].height}
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowRight className="h-6 w-6 rotate-90 text-gray-400" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={images["about"].src}
                  alt={images["about"].alt}
                  width={images["about"].width}
                  height={images["about"].height}
                  className="object-cover w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-6 shadow-xl hidden sm:block">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Partners in Your Success
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Founded in Houston, Summit Ridge Consulting started with a simple mission: to provide enterprise-level strategic guidance to growing businesses. We believe that every company, regardless of size, deserves access to top-tier operational expertise.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Our team of seasoned analysts, strategists, and technologists work side-by-side with your leadership to identify bottlenecks, uncover opportunities, and execute sustainable growth strategies.
              </p>
              
              <ul className="mt-8 space-y-4">
                {["Data-driven decision making", "Customized growth roadmaps", "End-to-end implementation support"].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-3xl text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From initial audit to full-scale deployment, we cover every aspect of modern business optimization.
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
                title: "Strategic Planning",
                description: "Long-term roadmapping and competitive analysis to position your business for market dominance.",
                image: "service-1",
                price: "$5,000 - $25,000",
              },
              {
                title: "Digital Transformation",
                description: "Modernizing legacy systems and integrating cloud solutions for maximum efficiency.",
                image: "service-2",
                price: "$10,000 - $50,000+",
              },
              {
                title: "Financial Advisory",
                description: "Cash flow optimization, fundraising preparation, and ROI analysis for better decisions.",
                image: "service-3",
                price: "$3,000 - $15,000",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-lg mb-6">
                  <Image
                    src={images[service.image as keyof typeof images].src}
                    alt={images[service.image as keyof typeof images].alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-gray-600">{service.description}</p>
                <p className="mt-4 text-sm font-semibold text-accent">{service.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src={images["testimonial-bg"].src} alt="" fill className="object-cover" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client Success Stories
            </h2>
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
                role: "CEO, Logistics Co.",
                content: "Summit Ridge completely overhauled our supply chain logic. We saved 20% in operational costs within the first quarter.",
                rating: 5,
              },
              {
                name: "James T.",
                role: "Director, TechStart Inc.",
                content: "Their digital transformation team didn't just install software; they trained our staff to own the process. Invaluable partnership.",
                rating: 5,
              },
              {
                name: "Elena R.",
                role: "Founder, GreenLeaf",
                content: "The financial advisory services helped us secure Series A funding. Their projections were accurate and the pitch deck was flawless.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="rounded-xl bg-white p-8 shadow-sm relative"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "What does the initial consultation involve?",
                a: "Our initial consultation is a complimentary 30-minute discovery call. We discuss your current challenges, future goals, and determine if our expertise aligns with your needs.",
              },
              {
                q: "Do you work with startups or only established companies?",
                a: "We work with both! For startups, we focus on fundraising decks and market entry strategies. For established firms, we focus on optimization and scaling.",
              },
              {
                q: "How long does a typical project last?",
                a: "Project timelines vary significantly based on scope. A basic financial audit might take 2-3 weeks, while a full digital transformation can span 6-12 months.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="border-b border-gray-200 pb-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.q}</h3>
                <p className="mt-2 text-gray-600">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images["cta"].src} alt="" fill className="object-cover opacity-10 mix-blend-overlay" />
        </div>
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Scale Your Business?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Schedule a free consultation today and let's discuss your future.
            </p>
            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-sm transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                Book Your Free Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Have a question or ready to start a project? Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <div className="mt-10 space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Our Office</h3>
                    <p className="mt-1 text-gray-600">
                      4521 Westheimer Rd<br />
                      Suite 200, Houston, TX 77027
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+17135550123" className="hover:text-primary transition-colors">(713) 555-0123</a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8am-6pm CST</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="whileInView" 
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}