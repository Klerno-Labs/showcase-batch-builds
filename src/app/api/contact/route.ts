import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Process the form data here (e.g., send an email, save to database)
  // For now, just return a success response
  return NextResponse.json({ message: 'Form submitted successfully!' });
}