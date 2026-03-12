"use client";
import { cn } from "@/lib/cn";

const testimonials = [
  {
    id: "1",
    name: "Maria L.",
    content: "Wagmore Dog Grooming did an amazing job with my golden retriever! He looked so handsome after his grooming session.",
  },
  {
    id: "2",
    name: "James T.",
    content: "The staff is incredibly friendly and my dog loves going there for daycare. Highly recommend!",
  },
  {
    id: "3",
    name: "Sarah K.",
    content: "I trust Wagmore with my pets. Their boarding services are top-notch and my pets always come home happy.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className={cn("bg-gray-50 p-6 rounded-lg shadow-md")}>
            <p className="text-gray-600 italic">"{testimonial.content}"</p>
            <p className="mt-4 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;