```typescript
import './globals.css';
import { metadata } from './metadata';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadataBase = new URL("https://wagmoredoggrooming.com");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.url} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```