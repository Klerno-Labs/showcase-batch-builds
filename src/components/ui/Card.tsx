import { cn } from "@/lib/cn";

interface CardProps {
  title: string;
  description: string;
  link: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, className }) => {
  return (
    <div className={cn("border rounded-lg p-4 shadow-md", className)}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <a href={link} className="text-blue-600 hover:underline">Learn More</a>
    </div>
  );
};

export default Card;