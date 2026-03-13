import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, phone, message, _gotcha } = data;

  // Honeypot check
  if (_gotcha) {
    return NextResponse.json({ message: "Spam detected." }, { status: 400 });
  }

  // Simulate email sending
  console.log("Contact Form Submission:", { name, email, phone, message });

  return NextResponse.json({ message: "Thank you! We'll be in touch within 24 hours." }, { status: 200 });
}