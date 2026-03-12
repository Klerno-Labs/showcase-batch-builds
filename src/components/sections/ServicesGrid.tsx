import { Card } from "@/components/ui/Card";

const services = [
  {
    title: "Electrical Installations",
    description: "Expert installations for all your electrical needs.",
    link: "/services/electrical-installations",
  },
  {
    title: "Home Renovations",
    description: "Transform your home with our renovation services.",
    link: "/services/home-renovations",
  },
  {
    title: "Emergency Repairs",
    description: "24/7 emergency repair services to keep you safe.",
    link: "/services/emergency-repairs",
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service) => (
          <Card key={service.title} title={service.title} description={service.description} link={service.link} />
        ))}
      </div>
    </section>
  );
};