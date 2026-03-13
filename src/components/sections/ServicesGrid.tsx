import { images } from "@/config/images";

export function ServicesGrid() {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care for the entire family.",
      icon: images["service-1"].src,
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our cosmetic services.",
      icon: images["service-2"].src,
    },
    {
      title: "Emergency Dentistry",
      description: "Immediate care for dental emergencies.",
      icon: images["service-3"].src,
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <img src={service.icon} alt={service.title} className="h-14 mb-4" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-muted">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}