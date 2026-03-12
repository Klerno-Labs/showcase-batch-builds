"use client";
import React from 'react';
import { cn } from '@/lib/cn';

const testimonials = [
  { quote: "Summit Real Estate helped me find my dream home! Their team was professional and attentive.", name: "Maria L.", role: "Client" },
  { quote: "I was impressed with their knowledge of the market and their dedication to finding the right property for me.", name: "James T.", role: "Client" },
  { quote: "The process was seamless, and I felt supported every step of the way. Highly recommend!", name: "Sarah K.", role: "Client" },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md">
            <blockquote className="italic">"{testimonial.quote}"</blockquote>
            <p className="mt-4 font-semibold">{testimonial.name}, {testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;