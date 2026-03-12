"use client";
import Image from 'next/image';
import { images } from '@/config/images';

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-between bg-cover" style={{ backgroundImage: `url(${images["hero"].src})` }}>
      <div className="p-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{images["hero"].alt}</h1>
        <p className="text-xl sm:text-2xl font-semibold">Your smile is our priority.</p>
        <button className="bg-primary text-white py-2 px-4 rounded-lg">Book Now</button>
      </div>
      <Image
        src={images["hero"].src}
        alt={images["hero"].alt}
        width={images["hero"].width}
        height={images["hero"].height}
        priority={true}
      />
    </section>
  );
};

export default HeroSection;