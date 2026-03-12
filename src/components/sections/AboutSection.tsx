"use client";
import React from 'react';

interface AboutSectionProps {
  history: string;
  values: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ history, values }) => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
      <p className="text-lg text-center mb-4">{history}</p>
      <h3 className="text-2xl font-semibold text-center mb-4">Our Values</h3>
      <ul className="list-disc list-inside mx-auto max-w-md">
        {values.map((value, index) => (
          <li key={index} className="text-lg">{value}</li>
        ))}
      </ul>
    </section>
  );
};

export default AboutSection;