import Card from "@/components/ui/Card";

const services = [
  {
    title: "Residential Electrical Services",
    description: "Expert electrical installations and repairs for your home.",
    link: "/services/residential",
  },
  {
    title: "Commercial Electrical Solutions",
    description: "Reliable electrical services for businesses and commercial properties.",
    link: "/services/commercial",
  },
  {
    title: "Emergency Electrical Repairs",
    description: "24/7 emergency services to address your urgent electrical needs.",
    link: "/services/emergency",
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <Card key={index} title={service.title} description={service.description} link={service.link} />
      ))}
    </div>
  );
};

export default ServicesGrid;