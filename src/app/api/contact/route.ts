import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  // Basic validation
  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  // Simulate email sending logic here
  try {
    // Here you would typically send the email using a service like SendGrid or Nodemailer
    // For now, we will just log the data
    console.log({ name, email, phone, message });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}