"use client";
import { images } from "@/config/images";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    id: "1",
    title: "Grooming",
    description: "Full grooming services including wash, cut, and styling.",
    image: images.service1.src,
  },
  {
    id: "2",
    title: "Boarding",
    description: "Safe and comfortable boarding for your pets while you're away.",
    image: images.service2.src,
  },
  {
    id: "3",
    title: "Daycare",
    description: "Fun and engaging daycare services for your furry friends.",
    image: images.service3.src,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map(service => (
          <ServiceCard key={service.id} title={service.title} description={service.description} image={service.image} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;