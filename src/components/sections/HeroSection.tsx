import { cn } from "@/lib/cn";

interface HeroSectionProps {
  heading: string;
  subtext: string;
  cta: { primary: string; secondary: string };
  image: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ heading, subtext, cta, image }) => {
  return (
    <section className="relative min-h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col justify-center items-start p-8 text-white">
        <h1 className="text-4xl font-bold">{heading}</h1>
        <p className="mt-4 text-lg">{subtext}</p>
        <div className="mt-6">
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80">{cta.primary}</button>
          <button className="ml-4 px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-primary">{cta.secondary}</button>
        </div>
      </div>
    </section>
  );
};