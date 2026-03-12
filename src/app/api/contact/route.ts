import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  // Basic validation
  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  // Here you would typically send the data to your email service or database
  // For demonstration, we will just return a success response
  return NextResponse.json({ success: true });
}