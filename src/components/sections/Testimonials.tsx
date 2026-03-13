import { images } from "@/config/images";

const testimonials = [
  {
    name: "Maria L.",
    text: "I had a fantastic experience at Aspen Dental Studio! The staff was friendly and made me feel comfortable during my cleaning.",
  },
  {
    name: "James T.",
    text: "The cosmetic work I had done was life-changing. I can't stop smiling! Highly recommend their services.",
  },
  {
    name: "Linda R.",
    text: "Emergency care was prompt and professional. I felt reassured and well taken care of.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Patients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="bg-white p-6 rounded-xl shadow-md">
            <p className="italic">"{testimonial.text}"</p>
            <p className="mt-4 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}