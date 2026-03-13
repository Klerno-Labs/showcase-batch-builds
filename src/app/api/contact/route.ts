import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Basic validation on backend as well
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // In a real environment, you would use Nodemailer, SendGrid, or Resend here.
    // For this static export compatible demo, we simulate a success after a delay.
    // If implementing with Resend:
    // await resend.emails.send({ from: '...', to: '...', subject: '...', html: '...' });

    console.log("Form submission received:", { name, email, phone, service, message });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}