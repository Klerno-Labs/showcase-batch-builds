"use client";

import { cn } from "@/lib/cn";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary", className }) => {
  const baseStyles = "px-4 py-2 rounded-lg transition duration-200";
  const variantStyles = variant === "primary" ? "bg-primary text-white hover:bg-primary/80" : "bg-secondary text-white hover:bg-secondary/80";

  return (
    <button className={cn(baseStyles, variantStyles, className)} onClick={onClick}>
      {text}
    </button>
  );
};