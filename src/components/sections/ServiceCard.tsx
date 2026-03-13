interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <img src={imageUrl} alt={title} className="rounded-xl mb-4" width={400} height={300} />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
};