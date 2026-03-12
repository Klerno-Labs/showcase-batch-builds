"use client";
import React from 'react';
import { cn } from '@/lib/cn';

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-semibold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={cn('border border-muted rounded-md p-2')}
        required
      />
    </div>
  );
};

export default Input;