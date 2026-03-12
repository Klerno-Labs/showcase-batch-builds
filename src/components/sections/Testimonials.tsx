const testimonials = [
  { name: "Maria L.", text: "Sophia gave me the best haircut I've ever had! The atmosphere is so welcoming." },
  { name: "James T.", text: "The team is incredibly talented and professional. I always leave feeling fabulous." },
  { name: "Emma W.", text: "Luxe Cuts Studio is my go-to for all my hair needs. Highly recommend!" },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              <p className="text-gray-900 font-semibold mt-4">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;