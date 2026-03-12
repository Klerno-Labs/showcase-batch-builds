"use client";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface AboutSectionProps {
  content: string;
  imageSrc: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ content, imageSrc }) => {
  return (
    <section className="py-16 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <Image src={imageSrc} alt="About Us" width={600} height={400} className="rounded-lg" />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4">{content}</p>
      </div>
    </section>
  );
};

export default AboutSection;