import { cn } from "@/lib/cn";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn("px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80", className)}
    >
      {label}
    </button>
  );
};