"use client";

import { services } from "@/config/site";

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
              <p className="mt-4 font-bold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}