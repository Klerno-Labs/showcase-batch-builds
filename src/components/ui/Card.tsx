import { cn } from "@/lib/cn";

interface CardProps {
  title: string;
  description: string;
  link: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, link, className }) => {
  return (
    <div className={cn("p-6 bg-white shadow-md rounded-xl", className)}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">Learn More</a>
    </div>
  );
};