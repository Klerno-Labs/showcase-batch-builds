"use client";
import React from 'react';

const Loader: React.FC<{ size?: number }> = ({ size = 40 }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="animate-spin rounded-full border-t-2 border-accent"
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default Loader;