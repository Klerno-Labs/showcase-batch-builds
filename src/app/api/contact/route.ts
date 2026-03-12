import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Validate data here
  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  // Process the form data (e.g., send an email or save to a database)
  // Simulating a successful response
  return NextResponse.json({ message: 'Thank you for contacting us!' }, { status: 200 });
}