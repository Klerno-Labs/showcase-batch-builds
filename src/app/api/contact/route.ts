import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  // Here you would typically handle the data, e.g., send it to an email service
  console.log(data);
  return NextResponse.json({ message: "Message received!" });
}