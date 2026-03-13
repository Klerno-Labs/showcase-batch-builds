"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={images["about"].src}
                alt={images["about"].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden md:block max-w-xs">
              <p className="font-bold text-3xl text-primary mb-1">10+</p>
              <p className="text-sm text-gray-600 font-medium">Years of Excellence in Business Strategy</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Driving Innovation Since 2014
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Pegrio Solutions was founded on a simple premise: businesses deserve partners who understand the nuance of modern markets. We don't just offer advice; we embed ourselves in your operations to ensure sustainable growth.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team combines decades of experience in technology, finance, and operations to deliver holistic strategies. Whether you are a startup looking to scale or an established firm seeking efficiency, we have the tools to help you succeed.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Data-driven decision making",
                "Customized growth strategies",
                "End-to-end project management",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}