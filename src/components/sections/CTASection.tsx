"use client";

interface CTASectionProps {
  heading: string;
  description: string;
  button: { label: string; href: string };
}

export function CTASection({ heading, description, button }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
      <p className="mt-4">{description}</p>
      <a href={button.href} className="mt-6 inline-block bg-white text-primary py-2 px-4 rounded-lg">{button.label}</a>
    </section>
  );
}