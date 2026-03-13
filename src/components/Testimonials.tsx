"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { images } from "@/config/images";

const testimonials = [
  {
    name: "Maria L.",
    role: "COO, Nexus Logistics",
    content: "Pegrio didn't just give us a plan; they gave us a new culture. Our operational efficiency has increased by 40% in six months.",
  },
  {
    name: "James T.",
    role: "Founder, SolarTech Startups",
    content: "Their financial modeling saved us from a costly pivot. The team at Pegrio is sharp, honest, and incredibly dedicated to our success.",
  },
  {
    name: "Sarah B.",
    role: "Director, GreenWave Energy",
    content: "We've worked with many consultants, but Pegrio stands out for their practical, no-nonsense approach to complex market entry strategies.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
            Our reputation is built on measurable results and long-term partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                &quot;{testimonial.content}&quot;
              </blockquote>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                  {/* Using a generic avatar logic or one of the images if specific ones existed, using team-1 for variation */}
                  <Image
                    src={index === 0 ? images["team-1"].src : images["gallery-1"].src}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              {/* Decorative Quote Mark */}
              <div className="absolute top-4 right-6 text-6xl text-gray-100 font-serif leading-none">
                &ldquo;
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}