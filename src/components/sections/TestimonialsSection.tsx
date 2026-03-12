const testimonials = [
  {
    quote: "Summit Electric transformed my kitchen with their amazing renovation service. Highly recommend!",
    name: "Maria L.",
    role: "Homeowner",
  },
  {
    quote: "Their team was professional and efficient. I couldn't be happier with the electrical installations.",
    name: "James T.",
    role: "Business Owner",
  },
  {
    quote: "I called them for an emergency repair, and they arrived within 30 minutes. Lifesavers!",
    name: "Sarah K.",
    role: "Homeowner",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="p-6 bg-white shadow-md rounded-lg">
            <p className="text-lg italic">"{testimonial.quote}"</p>
            <p className="mt-4 font-semibold">{testimonial.name}</p>
            <p className="text-gray-600">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};