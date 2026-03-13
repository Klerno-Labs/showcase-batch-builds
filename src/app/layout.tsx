```typescript
import './globals.css';
import { metadataBase } from './metadata';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Home | General Business',
  description: 'Professional services for your business needs.',
  openGraph: {
    title: 'Home | General Business',
    description: 'Professional services for your business needs.',
    url: 'https://example.com',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        {children}
      </body>
    </html>
  );
}
```