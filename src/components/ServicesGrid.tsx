```typescript
import ServiceCard from "./ServiceCard";

const services = [
  { icon: "service-1", title: "General Dentistry", description: "Comprehensive care for your family's dental needs." },
  { icon: "service-2", title: "Cosmetic Dentistry", description: "Enhance your smile with our cosmetic services." },
  { icon: "service-3", title: "Emergency Dentistry", description: "Immediate care for dental emergencies." },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
```