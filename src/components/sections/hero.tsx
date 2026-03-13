"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-20 min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Transforming Your Business
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Strategic Solutions for{" "}
              <span className="text-primary">Modern Growth</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              We help businesses navigate complexity with data-driven strategies
              and innovative technology. Unlock your potential today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <a href="#contact">Get a Consultation</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={images["hero"].src}
              alt={images["hero"].alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce cursor-pointer text-gray-400 hover:text-primary transition-colors" onClick={scrollToNext}>
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
}