"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Strategic Consulting",
    description: "Comprehensive business analysis to identify bottlenecks and unlock new revenue streams through actionable insights.",
    image: "service-1",
    icon: "lightbulb",
  },
  {
    title: "Digital Transformation",
    description: "Modernize your workflow with cutting-edge technology integrations that streamline operations and reduce costs.",
    image: "service-2",
    icon: "cpu",
  },
  {
    title: "Team Development",
    description: "Workshops and training programs designed to foster innovation and improve team collaboration across all levels.",
    image: "service-3",
    icon: "users",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-gray-600">
            We provide end-to-end solutions tailored to your specific industry challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={images[service.image as keyof typeof images].src}
                  alt={images[service.image as keyof typeof images].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}