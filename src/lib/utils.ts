import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Sanitize input helper
export function sanitizeInput(input: string): string {
  return input.replace(/<[^>]*>?/gm, '');
}