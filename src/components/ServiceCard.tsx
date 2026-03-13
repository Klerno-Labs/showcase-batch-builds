```typescript
import { images } from "@/config/images";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
      <img
        src={images[icon].src}
        alt={images[icon].alt}
        width={images[icon].width}
        height={images[icon].height}
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
```