import { cn } from "@/lib/utils";
import { images } from "@/config/images";

export const metadata = {
  title: "About Us - Summit Electric",
  description: "Learn more about Summit Electric and our commitment to quality home improvement services.",
};

export default function AboutPage() {
  return (
    <main id="main" className={cn("pt-20")}>
      <h1 className="text-4xl font-bold">About Us</h1>
      <h2 className="text-3xl font-bold mt-4">Our Story</h2>
      <p className="mt-2">Summit Electric was founded on the principles of quality, reliability, and customer satisfaction. Our team is dedicated to providing the best home improvement services in Houston, TX.</p>
      <img src={images["about"].src} alt={images["about"].alt} width={images["about"].width} height={images["about"].height} />
    </main>
  );
}