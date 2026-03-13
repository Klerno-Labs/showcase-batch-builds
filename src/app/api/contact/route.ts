import { NextResponse } from "next/server";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  caseType: z.string().min(1),
  message: z.string().min(10),
  _gotcha: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = schema.parse(body);

    // Honeypot check
    if (validatedData._gotcha) {
      return NextResponse.json({ message: "Bot detected" }, { status: 200 });
    }

    // In a real app, send email via Resend, SendGrid, or nodemailer here.
    // console.log("Form submission received:", validatedData);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid data", errors: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}