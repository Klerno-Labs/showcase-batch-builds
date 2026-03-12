"use client";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  iconOnly?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', iconOnly, className, ...props }) => {
  const baseStyles = "py-2 px-4 rounded-lg transition-all duration-200";
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/80",
    secondary: "bg-secondary text-white hover:bg-secondary/80",
    outline: "border border-primary text-primary hover:bg-primary/10",
    ghost: "bg-transparent text-primary hover:bg-primary/10",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      aria-label={iconOnly ? "Button" : undefined}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;