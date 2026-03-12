"use client";

import { cn } from "@/lib/cn";

const testimonials = [
  {
    quote: "This agency helped me find my dream home! The team was incredibly supportive throughout the entire process.",
    name: "Maria L.",
    role: "Client",
  },
  {
    quote: "Professional and attentive service throughout the buying process. I couldn't have asked for a better experience!",
    name: "James T.",
    role: "Client",
  },
  {
    quote: "Summit Real Estate made selling my home a breeze. Their expertise and guidance were invaluable.",
    name: "Sarah K.",
    role: "Client",
  },
];

export default function Testimonials() {
  return (
    <section className={cn("py-16 md:py-24 lg:py-32 bg-white")}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        <h2 className={cn("text-3xl sm:text-4xl font-bold text-center mb-8")}>What Our Clients Say</h2>
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6")}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className={cn("bg-gray-100 shadow-md rounded-lg p-6")}>
              <p className={cn("text-lg italic")}>“{testimonial.quote}”</p>
              <p className={cn("mt-4 font-semibold")}>{testimonial.name}</p>
              <p className={cn("text-gray-600")}>{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}