```typescript
import './globals.css';
import { metadataBase } from './metadata';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Core Strength CrossFit',
  description: 'Premium fitness facility offering personalized training, group classes, and holistic wellness programs.',
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```