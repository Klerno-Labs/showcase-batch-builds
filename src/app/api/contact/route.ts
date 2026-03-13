import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, _gotcha } = body;

    // Honeypot spam check
    if (_gotcha) {
      console.log("Bot detected via honeypot.");
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Simulate sending email logic
    // In a real app, you would integrate Resend, SendGrid, or Nodemailer here.
    console.log("─────────────────────────────────────");
    console.log("NEW CONTACT FORM SUBMISSION");
    console.log("From:", name);
    console.log("Email:", email);
    console.log("Phone:", phone || "Not provided");
    console.log("Message:", message);
    console.log("─────────────────────────────────────");

    // Artificial delay to simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}