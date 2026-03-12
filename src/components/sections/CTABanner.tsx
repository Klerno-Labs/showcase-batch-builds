import { Button } from "@/components/ui/Button";

interface CTABannerProps {
  heading: string;
  description: string;
  buttonText: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({ heading, description, buttonText }) => {
  return (
    <section className="py-16 bg-primary text-white text-center">
      <h2 className="text-3xl font-bold">{heading}</h2>
      <p className="mt-4">{description}</p>
      <Button label={buttonText} onClick={() => alert("Button Clicked!")} />
    </section>
  );
};