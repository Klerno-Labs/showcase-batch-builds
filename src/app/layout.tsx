import { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Summit Real Estate',
  description: 'Your trusted partner in buying, selling, and investing in real estate.',
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('bg-white text-gray-900')}>
        {children}
      </body>
    </html>
  );
}