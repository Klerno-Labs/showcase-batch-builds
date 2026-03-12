import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Validate required fields
  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  // Here you would typically send the data to your email service or database
  // For demonstration, we'll just return a success response
  return NextResponse.json({ message: 'Thank you for your message! We will get back to you shortly.' }, { status: 200 });
}