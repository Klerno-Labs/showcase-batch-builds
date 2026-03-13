import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Maria L.",
    role: "CEO, TechFlow",
    content:
      "Pegrio transformed our internal processes. We've seen a 40% increase in efficiency within just three months of implementing their strategies.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Director of Ops, Solaris",
    content:
      "The data analytics dashboard provided clarity we never had before. Decisions are now faster and backed by real evidence, not gut feeling.",
    rating: 5,
  },
  {
    name: "Sarah J.",
    role: "Founder, Urban Retail",
    content:
      "Professional, insightful, and incredibly responsive. The team at Pegrio truly understands what it takes to scale a business in today's market.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Don't just take our word for it. Here is what our partners have to say about the impact we've made.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 md:p-8 relative hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100"
            >
              <div className="flex text-blue-600 mb-4 space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-700 italic mb-6 relative">
                <span className="absolute -top-4 -left-2 text-6xl text-blue-100 font-serif leading-none">
                  &ldquo;
                </span>
                <p className="relative z-10 pt-4">{testimonial.content}</p>
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}