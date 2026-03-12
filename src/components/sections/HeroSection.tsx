"use client";

import Image from "next/image";
import { images } from "@/config/images";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-white">
      <div className="absolute inset-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Experience the Art of Hair</h1>
        <p className="text-xl mb-8">Upscale beauty services in a luxurious setting.</p>
        <div>
          <a href="#services" className="bg-gray-900 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 transition">
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;