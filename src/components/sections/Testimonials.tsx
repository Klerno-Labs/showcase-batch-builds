import { testimonialsData } from "@/config/testimonials";

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg italic">"{testimonial.content}"</p>
              <p className="mt-4 font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};