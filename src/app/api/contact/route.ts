import { NextResponse } from "next/server";
import { sanitizeInput } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const cleanData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone || ""),
      message: sanitizeInput(message),
      service: sanitizeInput(service || "General Inquiry"),
    };

    // In a real production environment, you would integrate with an email service like Resend, SendGrid, or AWS SES here.
    // For this static export demo, we will simulate a successful send.
    
    // Example of how you would log it (or send to an external service):
    console.log("Received Contact Form Submission:", cleanData);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Message sent successfully" },
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