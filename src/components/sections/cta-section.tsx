import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTASection({
  title = "Ready to Discuss Your Case?",
  description = "Schedule a confidential consultation with our top-rated attorneys today.",
  buttonText = "Schedule Consultation",
  buttonLink = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">{description}</p>
        <Button asChild size="lg" variant="primary" className="bg-white text-primary hover:bg-gray-100">
          <Link href={buttonLink} className="flex items-center gap-2">
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}