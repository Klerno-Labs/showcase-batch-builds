import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  // Here you would typically handle the form submission, e.g., send an email or save to a database
  console.log(data); // For demonstration purposes

  return NextResponse.json({ message: "Form submitted successfully!" });
}