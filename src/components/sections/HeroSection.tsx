import { cn } from "@/lib/cn";
import Image from "next/image";

interface HeroSectionProps {
  heading: string;
  subtext: string;
  cta: { primary: string; secondary: string };
  image: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heading, subtext, cta, image }) => {
  return (
    <section className={cn("flex flex-col items-center justify-center min-h-[80vh] bg-cover")} style={{ backgroundImage: `url(${image})` }}>
      <h1 className="text-4xl font-bold text-white">{heading}</h1>
      <p className="text-lg text-white mt-4">{subtext}</p>
      <div className="mt-8">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">{cta.primary}</button>
        <button className="bg-transparent border border-white text-white px-4 py-2 rounded-lg ml-4">{cta.secondary}</button>
      </div>
    </section>
  );
};

export default HeroSection;