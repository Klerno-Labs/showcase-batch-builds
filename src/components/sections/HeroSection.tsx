import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  imageUrl: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, imageUrl }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg">{ctaText}</button>
      </div>
    </section>
  );
};