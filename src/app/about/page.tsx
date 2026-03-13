import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About Us - " + siteConfig.name,
  description: "Learn more about General Business Solutions.",
  openGraph: {
    title: "About Us - " + siteConfig.name,
    description: "Learn more about General Business Solutions.",
    url: siteConfig.url + "/about",
    images: [images.hero.src],
  },
};

export default function About() {
  return (
    <main>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">About Us</h1>
          <p className="mt-4 text-lg leading-relaxed">
            At General Business Solutions, we believe in delivering exceptional services that cater to the unique needs of our clients. Our team of experts is committed to helping businesses grow and succeed.
          </p>
          <img src={images.about.src} alt={images.about.alt} className="mt-8 rounded-xl" />
        </div>
      </section>
    </main>
  );
}