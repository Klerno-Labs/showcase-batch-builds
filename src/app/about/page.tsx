import { images } from "@/config/images";

export default function About() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img src={images.about.src} alt={images.about.alt} className="w-full h-64 object-cover rounded-xl mb-8" />
        <p className="text-lg text-muted">
          At Aspen Dental Studio, we believe in providing comprehensive family dentistry with a gentle, patient-first approach. Our team of experienced professionals is dedicated to ensuring your comfort and satisfaction during every visit.
        </p>
        <h2 className="text-3xl font-bold mt-8">Our Values</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Compassionate Care</li>
          <li>Advanced Technology</li>
          <li>Patient Education</li>
        </ul>
      </div>
    </section>
  );
}