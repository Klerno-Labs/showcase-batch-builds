import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, _gotcha } = body;

    // Honeypot check
    if (_gotcha) {
      return NextResponse.json(
        { message: "Spam detected" },
        { status: 400 }
      );
    }

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulate email sending delay
    // In a real app, you would use Nodemailer, SendGrid, or Resend here
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // console.log("Form submission received:", { name, email, phone, service, message });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}