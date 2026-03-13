import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, _gotcha } = body;

    // Honeypot validation
    if (_gotcha) {
      return NextResponse.json({ message: "Bot detected" }, { status: 200 });
    }

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real production environment, you would send an email here
    // using a service like Resend, SendGrid, or AWS SES.
    // Example:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'info@pegrio.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `<p>${message}</p>`
    // });

    console.log("Form submission received:", { name, email, phone, service, message });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}