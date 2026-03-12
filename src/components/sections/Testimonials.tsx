import { images } from "@/config/images";

const testimonials = [
  { name: "Maria L.", feedback: "I had a great experience! The staff was incredibly friendly and made me feel comfortable." },
  { name: "James T.", feedback: "Excellent service and a very clean office. Highly recommend!" },
  { name: "Sarah P.", feedback: "The dental care I received was top-notch. I appreciate their patient-first approach." },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6">
              <p className="italic">"{testimonial.feedback}"</p>
              <p className="mt-4 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};