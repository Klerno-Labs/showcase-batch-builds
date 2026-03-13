import { images } from "@/config/images";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About Us | Pegrio Business Solutions",
  description: "Learn more about Pegrio Business Solutions and our mission.",
};

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Us</h2>
          <p className="mt-4 text-lg leading-relaxed">
            At Pegrio Business Solutions, we are dedicated to helping businesses thrive in a competitive landscape. Our team of experts brings years of experience and a passion for innovation to every project.
          </p>
          <img
            src={images.about.src}
            alt={images.about.alt}
            width={images.about.width}
            height={images.about.height}
            className="mt-8 rounded-xl"
          />
        </div>
      </section>
    </main>
  );
}