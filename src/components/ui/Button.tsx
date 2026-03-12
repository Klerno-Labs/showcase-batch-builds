"use client";
import React from 'react';
import { cn } from '@/lib/cn';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  const baseStyles = 'px-4 py-2 rounded-lg transition';
  const variantStyles = variant === 'primary' ? 'bg-accent text-white' : 'bg-secondary text-white';

  return (
    <button className={cn(baseStyles, variantStyles)} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;