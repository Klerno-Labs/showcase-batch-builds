"use client";

import { cn } from "@/lib/cn";

const services = [
  { title: "Residential Sales", description: "Helping you buy or sell your home." },
  { title: "Commercial Real Estate", description: "Expert guidance for commercial property transactions." },
  { title: "Investment Properties", description: "Maximize your investment potential with our services." },
];

export default function ServicesOverview() {
  return (
    <section className={cn("py-16 md:py-24 lg:py-32 bg-gray-50")}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        <h2 className={cn("text-3xl sm:text-4xl font-bold text-center mb-8")}>Our Services</h2>
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6")}>
          {services.map((service) => (
            <div key={service.title} className={cn("bg-white shadow-md rounded-lg p-6")}>
              <h3 className={cn("text-xl font-semibold")}>{service.title}</h3>
              <p className={cn("text-gray-600")}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}