"use client";
import React from 'react';
import { cn } from '@/lib/cn';

const services = [
  { title: "Residential Sales", description: "Helping you buy or sell your home with ease." },
  { title: "Commercial Real Estate", description: "Expertise in commercial property transactions." },
  { title: "Investment Consulting", description: "Guidance on real estate investments for maximum returns." },
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;