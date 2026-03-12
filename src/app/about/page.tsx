import { images } from "@/config/images";

export const metadata = {
  title: "About Us | Aspen Dental Studio",
  description: "Learn more about Aspen Dental Studio and our dedicated team.",
  openGraph: {
    title: "About Us | Aspen Dental Studio",
    description: "Learn more about Aspen Dental Studio and our dedicated team.",
    image: images.hero.src,
  },
};

export default function About() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-center mb-8">About Aspen Dental Studio</h1>
        <p className="text-lg leading-relaxed text-center mb-12">
          At Aspen Dental Studio, we believe in providing comprehensive family dentistry with a gentle, patient-first approach. Our team is dedicated to ensuring that every visit is comfortable and stress-free.
        </p>
        <img
          src={images.about.src}
          alt="Business professionals in modern meeting room"
          className="w-full rounded-xl mb-8"
          width={1200}
          height={800}
        />
        <h2 className="text-3xl font-bold tracking-tight text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold">Dr. Emily R.</h3>
            <p className="text-muted-foreground">Dentist</p>
            <p className="mt-2">Dr. Emily has over 10 years of experience in family dentistry and is passionate about creating beautiful smiles.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold">Dr. Michael T.</h3>
            <p className="text-muted-foreground">Orthodontist</p>
            <p className="mt-2">Dr. Michael specializes in orthodontics and is dedicated to providing personalized care to each patient.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold">Dr. Sarah L.</h3>
            <p className="text-muted-foreground">Hygienist</p>
            <p className="mt-2">Dr. Sarah is committed to educating patients about oral health and ensuring a comfortable cleaning experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}