"use client";

import { Card } from "@/components/ui/card";
import { slidesData } from "@/lib/slide-data";
import { fadeInVariants } from "@/lib/variant";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { SlideContent } from "./slide-content";
import { SlideNavigation } from "./slide-navigation";

interface SlideshowProps {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function Slideshow({
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
}: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide, autoPlayInterval]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(autoPlay);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          previousSlide();
          break;
        case "ArrowRight":
          nextSlide();
          break;
        case " ":
          event.preventDefault();
          setIsPlaying(!isPlaying);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, previousSlide, isPlaying]);

  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="relative w-full min-h-[600px] lg:min-h-[700px] bg-background border-border overflow-hidden">
        {/* Slides Container */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="absolute inset-0"
            >
              <SlideContent slide={slidesData[currentSlide]} isActive={true} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-6 left-6 right-6">
          <SlideNavigation
            currentSlide={currentSlide}
            totalSlides={slidesData.length}
            onPrevious={previousSlide}
            onNext={nextSlide}
            onDotClick={goToSlide}
          />
        </div>

        {/* Progress Bar */}
        {isPlaying && (
          <div className="absolute top-0 left-0 w-full h-1 bg-muted">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: autoPlayInterval / 1000,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          </div>
        )}
      </Card>
    </motion.div>
  );
}
