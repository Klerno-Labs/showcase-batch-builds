import { images } from '@/config/images';
import ServicesList from '@/components/sections/ServicesList';
import CaseStudies from '@/components/sections/CaseStudies';

export default function Services() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8">Our Services</h1>
      <ServicesList
        services={[
          { title: "Residential Sales", description: "Helping you buy or sell your home with ease." },
          { title: "Commercial Real Estate", description: "Expertise in commercial property transactions." },
          { title: "Investment Consulting", description: "Guidance on real estate investments for maximum returns." },
        ]}
      />
      <CaseStudies />
    </>
  );
}