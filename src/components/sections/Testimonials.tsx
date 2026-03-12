import { cn } from "@/lib/utils";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Patients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example testimonial card */}
        <div className={cn("p-6 bg-white rounded-xl shadow-md")}>
          <p className="text-lg italic">"The staff at Aspen Dental Studio are amazing! They made me feel comfortable and cared for during my visit."</p>
          <p className="mt-4 font-bold">Maria L.</p>
        </div>
        <div className={cn("p-6 bg-white rounded-xl shadow-md")}>
          <p className="text-lg italic">"I had a great experience with my teeth cleaning. Highly recommend!"</p>
          <p className="mt-4 font-bold">James T.</p>
        </div>
        <div className={cn("p-6 bg-white rounded-xl shadow-md")}>
          <p className="text-lg italic">"The team is very professional and friendly. I love my new smile!"</p>
          <p className="mt-4 font-bold">Sarah M.</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;