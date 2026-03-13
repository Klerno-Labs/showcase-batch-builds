import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, _gotcha } = body;

    // Honeypot check for spam prevention
    if (_gotcha) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would integrate with an email service like Resend, SendGrid, or Nodemailer
    // For this demo, we will simulate a successful response after a delay
    // await resend.emails.send({ ... })
    
    console.log("Form received:", { name, email, phone, message });

    return NextResponse.json(
      { success: true, message: "Message received" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}