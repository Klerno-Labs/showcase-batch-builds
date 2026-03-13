"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images["cta"].src}
          alt={images["cta"].alt}
          fill
          className="object-cover"
          priority={false}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gray-900/85" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have accelerated their growth with Pegrio Solutions. Your future starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-gray-900 hover:bg-gray-100">
              <a href="#contact">Schedule a Call</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}