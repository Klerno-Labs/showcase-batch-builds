import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message, _gotcha } = body;

  // Honeypot check
  if (_gotcha) {
    return NextResponse.json({ message: "Spam detected" }, { status: 400 });
  }

  // Validate inputs
  if (!name || !email || !phone || !message) {
    return NextResponse.json({ message: "All fields are required." }, { status: 400 });
  }

  // Simulate sending email (replace with actual email sending logic)
  console.log("Sending email:", { name, email, phone, message });

  return NextResponse.json({ message: "Thank you! We'll be in touch within 24 hours." }, { status: 200 });
}