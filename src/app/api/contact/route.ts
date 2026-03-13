import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    const { name, email, phone, service, message, _gotcha } = body;

    // Honeypot check
    if (_gotcha) {
      // Return success to fool bots, but don't actually process
      return NextResponse.json({ message: "Message received" }, { status: 200 });
    }

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real app, you would:
    // 1. Send an email using Nodemailer, SendGrid, or Resend
    // 2. Save to a database (Supabase, MongoDB, etc.)
    // 3. Create a CRM entry (HubSpot, Salesforce)
    
    // Simulating an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("=== Contact Form Submission ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Service:", service);
    console.log("Message:", message);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}