import { images } from "@/config/images";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Wagmore Dog Grooming - Home",
  description: "Quality pet grooming services in your area.",
  openGraph: {
    title: "Wagmore Dog Grooming - Home",
    description: "Quality pet grooming services in your area.",
    image: images["hero"].src,
  },
};

const HomePage = () => {
  return (
    <main>
      <HeroSection
        heading="Welcome to Wagmore Dog Grooming"
        subtext="Your pet deserves the best care."
        ctaPrimary="Book Now"
        ctaSecondary="Learn More"
        imageSrc={images["hero"].src}
      />
      <section className="pt-20">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <ContactForm />
      </section>
    </main>
  );
};

export default HomePage;