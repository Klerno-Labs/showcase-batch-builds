import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-white hover:brightness-110 shadow-sm": variant === "default",
            "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700": variant === "outline",
            "hover:bg-gray-100 text-gray-700": variant === "ghost",
            "h-12 px-8 text-base": size === "default",
            "h-10 px-4 text-sm": size === "sm",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };