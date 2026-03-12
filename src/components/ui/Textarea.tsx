"use client";
import { cn } from "@/lib/cn";

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={cn("mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary")}
      />
    </div>
  );
};

export default Textarea;