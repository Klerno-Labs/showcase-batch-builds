const testimonials = [
  {
    quote: "Summit Electric transformed my home with their amazing service! Highly recommend!",
    name: "Maria L.",
    role: "Homeowner",
  },
  {
    quote: "Professional and efficient! They fixed my electrical issues in no time.",
    name: "James T.",
    role: "Business Owner",
  },
  {
    quote: "Great experience from start to finish. Will definitely use them again!",
    name: "Sarah K.",
    role: "Property Manager",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <p className="italic">"{testimonial.quote}"</p>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-gray-600">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;