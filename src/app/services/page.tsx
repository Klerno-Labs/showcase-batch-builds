import { images } from "@/config/images";

export const metadata = {
  title: "Services | Aspen Dental Studio",
  description: "Explore the dental services we offer at Aspen Dental Studio.",
  openGraph: {
    title: "Services | Aspen Dental Studio",
    description: "Explore the dental services we offer at Aspen Dental Studio.",
    image: images.hero.src,
  },
};

export default function Services() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-center mb-8">Our Services</h1>
        <p className="text-lg leading-relaxed text-center mb-12">
          At Aspen Dental Studio, we offer a wide range of dental services to meet the needs of your family.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold">General Dentistry</h2>
            <p className="mt-2">Comprehensive dental care for the whole family.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold">Cosmetic Dentistry</h2>
            <p className="mt-2">Enhance your smile with our cosmetic procedures.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold">Emergency Dentistry</h2>
            <p className="mt-2">Immediate care for dental emergencies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}