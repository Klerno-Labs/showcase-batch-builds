import ServicesList from "@/components/sections/ServicesList";
import CaseStudies from "@/components/sections/CaseStudies";
import { images } from "@/config/images";

export const metadata = {
  title: "Our Services | Summit Real Estate",
  description: "Explore the services offered by Summit Real Estate.",
  openGraph: {
    title: "Our Services | Summit Real Estate",
    description: "Explore the services offered by Summit Real Estate.",
    image: images.hero.src,
  },
};

export default function Services() {
  return (
    <>
      <ServicesList
        services={[
          { title: "Residential Sales", description: "Helping you buy or sell your home." },
          { title: "Commercial Real Estate", description: "Expert guidance for commercial property transactions." },
          { title: "Investment Properties", description: "Maximize your investment potential with our services." },
        ]}
      />
      <CaseStudies
        studies={[
          { title: "Luxury Home Sale", description: "Successfully sold a luxury home in the heart of the city.", link: "#" },
          { title: "Commercial Space Lease", description: "Assisted a client in leasing a prime commercial space.", link: "#" },
        ]}
      />
    </>
  );
}