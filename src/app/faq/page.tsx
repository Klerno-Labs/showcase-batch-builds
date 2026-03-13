import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "FAQ - " + siteConfig.name,
  description: "Frequently asked questions.",
  openGraph: {
    title: "FAQ - " + siteConfig.name,
    description: "Frequently asked questions.",
    url: siteConfig.url + "/faq",
    images: [images.hero.src],
  },
};

export default function FAQ() {
  return (
    <main>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg leading-relaxed">Here are some common questions we receive.</p>
          <ul className="mt-8 list-disc list-inside">
            <li>What services do you offer?</li>
            <li>How can I contact you?</li>
            <li>What are your business hours?</li>
          </ul>
        </div>
      </section>
    </main>
  );
}