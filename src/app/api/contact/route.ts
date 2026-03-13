import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  // Here you would typically handle the data, e.g., send an email or save to a database
  return NextResponse.json({ message: "Success" });
}