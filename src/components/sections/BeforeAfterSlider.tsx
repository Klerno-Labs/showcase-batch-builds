"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { images } from "@/config/images";

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
}

export function BeforeAfterSlider({ beforeImg, afterImg }: BeforeAfterSliderProps) {
  const [width, setWidth] = useState(50);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX } = e;
    const sliderWidth = e.currentTarget.offsetWidth;
    const newWidth = Math.min(Math.max(0, (clientX / sliderWidth) * 100), 100);
    setWidth(newWidth);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-xl">
      <img src={afterImg} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      <img src={beforeImg} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: `inset(0 ${100 - width}% 0 0)` }} />
      <div
        className="absolute top-0 bottom-0 left-0 cursor-ew-resize"
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
      />
    </div>
  );
}