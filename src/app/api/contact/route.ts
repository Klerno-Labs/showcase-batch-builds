```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Simple validation
  if (!data.name || !data.email || !data.phone || !data.message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  // Here you would typically send the email or save to a database
  // For demonstration, we will just return a success response
  return NextResponse.json({ message: 'Thank you! We\'ll be in touch within 24 hours.' }, { status: 200 });
}
```