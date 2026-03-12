import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Aspen Dental Studio',
  description: 'Providing quality dental care with a patient-first approach.',
  openGraph: {
    title: 'Aspen Dental Studio',
    description: 'Providing quality dental care with a patient-first approach.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
  },
  canonical: 'https://example.com',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;