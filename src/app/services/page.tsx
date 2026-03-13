import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Our Services - " + siteConfig.name,
  description: "Discover our range of services.",
  openGraph: {
    title: "Our Services - " + siteConfig.name,
    description: "Discover our range of services.",
    url: siteConfig.url + "/services",
    images: [images.hero.src],
  },
};

export default function Services() {
  return (
    <main>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Our Services</h1>
          <p className="mt-4 text-lg leading-relaxed">
            We offer a variety of services to help your business thrive, including:
          </p>
          <ul className="mt-8 list-disc list-inside">
            <li>Business Consulting</li>
            <li>Market Analysis</li>
            <li>Financial Planning</li>
          </ul>
        </div>
      </section>
    </main>
  );
}