import { images } from "@/config/images";

export const metadata = {
  title: "Home - Core Strength CrossFit",
  description: "Join Core Strength CrossFit for personalized training and group classes.",
  openGraph: {
    title: "Home - Core Strength CrossFit",
    description: "Join Core Strength CrossFit for personalized training and group classes.",
    images: [images["hero"].src],
  },
  canonical: "https://example.com",
};

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Welcome to Core Strength CrossFit</h1>
      {/* Other content */}
    </main>
  );
}