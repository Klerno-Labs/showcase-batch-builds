import { images } from "@/config/images";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-surface p-4 rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300">
      <img src={icon} alt={title} className="h-16 w-16" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted">{description}</p>
      <a href={link} className="text-accent mt-4 block">Learn More</a>
    </div>
  );
};

export default ServiceCard;