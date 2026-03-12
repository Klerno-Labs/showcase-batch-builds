import Image from "next/image";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <Image src={icon} alt={title} width={64} height={64} className="mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <p className="mt-2 font-bold">{price}</p>
    </div>
  );
};