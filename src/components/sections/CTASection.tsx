"use client";
import React from 'react';
import Button from '@/components/ui/Button';

interface CTASectionProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ heading, description, buttonText, buttonLink }) => {
  return (
    <section className="py-16 bg-accent text-white text-center">
      <h2 className="text-3xl font-bold">{heading}</h2>
      <p className="mt-4">{description}</p>
      <Button text={buttonText} onClick={() => window.location.href = buttonLink} />
    </section>
  );
};

export default CTASection;