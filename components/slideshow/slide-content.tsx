"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SlideData } from "@/lib/slide-data";
import {
  containerVariants,
  imageVariants,
  itemVariants,
  slideUpVariants,
} from "@/lib/variant";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface SlideContentProps {
  slide: SlideData;
  isActive: boolean;
}

export function SlideContent({ slide, isActive }: SlideContentProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      className="w-full h-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 lg:p-12"
    >
      {/* Text Content */}
      <motion.div
        variants={itemVariants}
        className="flex-1 space-y-6 text-center lg:text-left"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight"
        >
          {slide.title}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl"
        >
          {slide.description}
        </motion.p>

        {/* Category Card */}
        <motion.div variants={itemVariants}>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {slide.category}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {slide.categoryDescription}
              </p>
              <Button
                variant="outline"
                className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground group transition-all duration-200"
                asChild
              >
                <a href={slide.buttonHref}>
                  {slide.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        variants={imageVariants}
        className="flex-1 w-full max-w-lg lg:max-w-none"
      >
        <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={slide.id === 1}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
