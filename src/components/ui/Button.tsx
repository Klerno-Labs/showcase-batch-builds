"use client";
import { cn } from "@/lib/cn";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "primary" }) => {
  const baseStyles = "py-2 px-4 rounded-lg transition duration-300";
  const variantStyles = variant === "primary" ? "bg-primary text-white" : "bg-secondary text-white";

  return (
    <button className={cn(baseStyles, variantStyles)} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;