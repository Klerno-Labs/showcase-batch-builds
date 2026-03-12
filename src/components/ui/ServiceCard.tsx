"use client";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300")}>
      <Image src={image} alt={title} width={300} height={200} className="rounded-lg" />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;