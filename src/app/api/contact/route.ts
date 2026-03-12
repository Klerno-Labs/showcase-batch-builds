import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Here you would typically send the data to your email service or database
  return NextResponse.json({ message: 'Success' });
}