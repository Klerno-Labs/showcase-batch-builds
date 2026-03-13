```typescript
import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-lg text-gray-600">Page Not Found</p>
        <Link href="/" className="mt-4 inline-block bg-primary text-white py-3 px-6 rounded-lg">
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
```