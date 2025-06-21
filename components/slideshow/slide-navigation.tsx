"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onDotClick: (index: number) => void;
  className?: string;
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onDotClick,
  className,
}: SlideNavigationProps) {
  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      {/* Dot Indicators */}
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onDotClick(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-primary"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
