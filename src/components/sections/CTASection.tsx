interface CTASectionProps {
  heading: string;
  description: string;
  buttonLabel: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ heading, description, buttonLabel }) => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary text-white text-center">
      <h2 className="text-3xl font-bold">{heading}</h2>
      <p className="mt-4">{description}</p>
      <button className="mt-6 bg-accent text-white py-2 px-4 rounded">{buttonLabel}</button>
    </section>
  );
};