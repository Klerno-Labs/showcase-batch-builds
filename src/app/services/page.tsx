import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Our Services | " + siteConfig.name,
  description: "Explore the services offered by Pegrio Business Solutions.",
  openGraph: {
    title: "Our Services | " + siteConfig.name,
    description: "Explore the services offered by Pegrio Business Solutions.",
    url: siteConfig.url + "/services",
    images: [images.service-1.src],
  },
};

export default function Services() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Services</h2>
        <p className="mt-4 text-lg leading-relaxed">
          We offer a range of services tailored to meet the needs of your business, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <img
              src={images["service-1"].src}
              alt={images["service-1"].alt}
              width={images["service-1"].width}
              height={images["service-1"].height}
              className="rounded-xl"
            />
            <h3 className="mt-4 text-xl font-semibold">Consulting</h3>
            <p className="mt-2 text-base leading-relaxed">
              Expert consulting services to guide your business strategy. Starting at $150/hour.
            </p>
          </div>
          <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <img
              src={images["service-2"].src}
              alt={images["service-2"].alt}
              width={images["service-2"].width}
              height={images["service-2"].height}
              className="rounded-xl"
            />
            <h3 className="mt-4 text-xl font-semibold">Data Analysis</h3>
            <p className="mt-2 text-base leading-relaxed">
              Comprehensive data analysis services to help you make informed decisions. Packages starting at $500.
            </p>
          </div>
          <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <img
              src={images["service-3"].src}
              alt={images["service-3"].alt}
              width={images["service-3"].width}
              height={images["service-3"].height}
              className="rounded-xl"
            />
            <h3 className="mt-4 text-xl font-semibold">Workshops</h3>
            <p className="mt-2 text-base leading-relaxed">
              Interactive workshops designed to enhance your team&apos;s skills. Starting at $300 per session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}