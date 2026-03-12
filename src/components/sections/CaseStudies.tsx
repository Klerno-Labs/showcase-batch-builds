"use client";
import React from 'react';

const caseStudies = [
  { title: "Luxury Home Sale", description: "Successfully sold a luxury home in the heart of the city." },
  { title: "Commercial Property Lease", description: "Negotiated a long-term lease for a commercial property." },
];

const CaseStudies: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold">{caseStudy.title}</h3>
            <p className="mt-2">{caseStudy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;