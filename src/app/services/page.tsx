import ServicesGrid from "@/components/sections/ServicesGrid";
import TrustSignals from "@/components/sections/TrustSignals";
import FAQs from "@/components/sections/FAQs";

export default function ServicesPage() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center">Our Services</h1>
      <ServicesGrid />
      <TrustSignals />
      <FAQs />
    </main>
  );
}