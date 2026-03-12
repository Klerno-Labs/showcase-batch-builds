```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Validate input
  const { name, email, message, _gotcha } = data;
  if (_gotcha) return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
  if (!name || !email || !message) return NextResponse.json({ error: 'All fields are required' }, { status: 400 });

  // Here you would typically send the email or save to a database
  // For now, we will just return a success response
  return NextResponse.json({ success: true });
}
```