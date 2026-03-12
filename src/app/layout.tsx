import { Metadata } from 'next';
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Core Strength CrossFit",
  description: "Premium fitness facility offering personalized training, group classes, and holistic wellness programs.",
  openGraph: {
    title: "Core Strength CrossFit",
    description: "Premium fitness facility offering personalized training, group classes, and holistic wellness programs.",
    images: [images["hero"].src],
  },
  canonical: "https://example.com",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}