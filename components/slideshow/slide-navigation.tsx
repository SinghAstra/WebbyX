"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  className?: string;
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onDotClick,
  className,
}: SlideNavigationProps) {
  return (
    <div className={cn("flex items-center justify-between w-full", className)}>
      {/* Navigation Arrows */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrevious}
          className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

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
