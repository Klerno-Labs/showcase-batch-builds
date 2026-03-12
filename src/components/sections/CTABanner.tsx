import Button from "@/components/ui/Button";

interface CTABannerProps {
  heading: string;
  description: string;
  buttonText: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ heading, description, buttonText }) => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold">{heading}</h2>
      <p className="mt-4">{description}</p>
      <Button label={buttonText} className="mt-6" />
    </section>
  );
};

export default CTABanner;