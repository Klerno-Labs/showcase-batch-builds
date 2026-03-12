"use client";
import Button from "@/components/ui/Button";

interface CTASectionProps {
  heading: string;
  description: string;
  buttonLabel: string;
}

const CTASection: React.FC<CTASectionProps> = ({ heading, description, buttonLabel }) => {
  return (
    <section className="py-16 bg-primary text-white text-center">
      <h2 className="text-3xl font-bold">{heading}</h2>
      <p className="mt-4">{description}</p>
      <div className="mt-6">
        <Button label={buttonLabel} />
      </div>
    </section>
  );
};

export default CTASection;