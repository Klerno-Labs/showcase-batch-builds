import { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Home | General Business',
  description: 'Welcome to our general business website, where we provide exceptional services to our clients.',
  openGraph: {
    title: 'Home | General Business',
    description: 'Welcome to our general business website, where we provide exceptional services to our clients.',
    images: ['/images/hero.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}