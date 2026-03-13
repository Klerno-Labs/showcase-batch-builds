import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria L.",
    role: "CEO, Nexus Logistics",
    content: "Pegrio didn't just give us a plan; they worked alongside us to execute it. Our operational efficiency increased by 40% within six months.",
    rating: 5
  },
  {
    name: "James T.",
    role: "Director, FinServe Corp",
    content: "The depth of market insight provided by the Pegrio team was unparalleled. They identified opportunities we had completely overlooked.",
    rating: 5
  },
  {
    name: "Sarah J.",
    role: "Founder, GreenTech Solutions",
    content: "Professional, responsive, and incredibly knowledgeable. They guided us through a complex merger with absolute precision.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 skew-x-12 origin-top transform translate-x-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our success is measured by the success of our clients. Here is what business leaders are saying about their partnership with Pegrio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-card hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}