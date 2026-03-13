"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Strategic Consulting",
    description: "Data-driven roadmaps to identify growth opportunities and operational bottlenecks. We help you see the forest and the trees.",
    image: "service-1",
    link: "#contact",
  },
  {
    title: "Financial Planning",
    description: "Rigorous financial modeling and forecasting to ensure your resources are allocated for maximum ROI and long-term stability.",
    image: "service-2",
    link: "#contact",
  },
  {
    title: "Digital Transformation",
    description: "Modernize your workflow with cutting-edge technology integration that empowers your team and delights your customers.",
    image: "service-3",
    link: "#contact",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Comprehensive Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From startups to established enterprises, we tailor our approach to fit your specific industry challenges and goals.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={images[service.image as keyof typeof images].src}
                  alt={images[service.image as keyof typeof images].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Learn More <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}