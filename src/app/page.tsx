import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Strategic Growth for Modern Businesses
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We transform ambitious companies into market leaders through data-driven strategies and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:brightness-110 transition-all hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Why Leaders Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              We don't just advise—we partner with you to implement sustainable change that drives real revenue.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Data-Driven Decisions",
                desc: "Every strategy we recommend is backed by rigorous market analysis and performance metrics.",
              },
              {
                title: "Tailored Solutions",
                desc: "No cookie-cutter approaches. We customize our methodology to fit your unique culture and goals.",
              },
              {
                title: "Proven Results",
                desc: "Our clients see an average of 40% revenue growth within the first 18 months of partnership.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-slate-50 hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions designed to scale with your business.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                key: "service-1",
                title: "Strategic Planning",
                desc: "Define your vision and map the path to achieving it with clarity and precision.",
              },
              {
                key: "service-2",
                title: "Digital Transformation",
                desc: "Modernize your operations with cutting-edge technology and workflow optimization.",
              },
              {
                key: "service-3",
                title: "Growth Marketing",
                desc: "Acquire and retain customers through targeted, high-ROI marketing campaigns.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={images[service.key as keyof typeof images].src}
                    alt={images[service.key as keyof typeof images].alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <Link
                    href="/services"
                    className="text-primary font-semibold inline-flex items-center hover:underline"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src={images.cta.src}
            alt={images.cta.alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/90" />
        </div>
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Schedule a free consultation to discuss your goals and discover how we can help you achieve them.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:brightness-110 transition-all hover:scale-105"
            >
              Book Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}