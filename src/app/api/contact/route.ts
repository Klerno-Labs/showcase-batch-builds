import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message, _gotcha } = body;

  if (_gotcha) {
    return NextResponse.json({ error: "Spam detected" }, { status: 400 });
  }

  // Validate inputs
  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  // Here you would typically send the email or save to a database
  return NextResponse.json({ success: true });
}