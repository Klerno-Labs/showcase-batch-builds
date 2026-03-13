import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [images.hero.src],
  },
};

export default function Home() {
  return (
    <main>
      <section className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Welcome to General Business Solutions
          </h1>
          <p className="mt-4 text-lg leading-relaxed">
            Your partner for innovative business solutions that drive success.
          </p>
          <div className="mt-8">
            <a href="#contact" className="bg-primary text-white py-3 px-6 rounded-lg">
              Get Started
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Us</h2>
          <p className="mt-4 text-lg leading-relaxed">
            We are dedicated to providing top-notch business solutions tailored to your needs.
          </p>
        </div>
      </section>
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Services</h2>
          <p className="mt-4 text-lg leading-relaxed">
            Explore our range of services designed to help your business thrive.
          </p>
        </div>
      </section>
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact Us</h2>
          <p className="mt-4 text-lg leading-relaxed">
            Get in touch with us for personalized business solutions.
          </p>
        </div>
      </section>
    </main>
  );
}