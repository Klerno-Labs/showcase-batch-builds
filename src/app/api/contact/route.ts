import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Basic validation on server side
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real production environment, you would:
    // 1. Use an email service like Resend, SendGrid, or Nodemailer
    // 2. Validate the email more thoroughly
    // 3. Sanitize inputs to prevent XSS
    // 4. Store the lead in a CRM (HubSpot, Salesforce)
    
    console.log("Contact Form Submission:", {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate an API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}