"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What industries do you specialize in?",
    a: "While we have deep experience in technology, healthcare, and manufacturing, our methodologies are industry-agnostic. We focus on business fundamentals that apply regardless of your specific market.",
  },
  {
    q: "How long does a typical engagement last?",
    a: "It varies by project scope. Strategy workshops can be completed in 2-4 weeks, while full digital transformations typically span 6-12 months. We offer flexible engagements tailored to your needs.",
  },
  {
    q: "Do you work with startups or only established businesses?",
    a: "We work with both! For startups, we focus on go-to-market strategy and operational setup. For established businesses, we focus on optimization and scaling.",
  },
  {
    q: "What is your pricing structure?",
    a: "We offer both project-based fixed pricing and monthly retainers for ongoing advisory services. Every engagement starts with a free scoping call to provide an accurate quote.",
  },
  {
    q: "Will we work with a single consultant or a team?",
    a: "You get a dedicated point of contact, but behind them is our full team of specialists. If your project requires specific expertise in data, marketing, or tech, we pull in the right people.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="relative pt-32 pb-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about working with Summit Strategy Group.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:bg-slate-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-gray-500 transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index ? "max-h-40 pb-6" : "max-h-0"
                  )}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}