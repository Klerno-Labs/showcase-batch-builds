"use client";
import { cn } from "@/lib/cn";

interface InputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type = "text", name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={cn("mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary")}
      />
    </div>
  );
};

export default Input;