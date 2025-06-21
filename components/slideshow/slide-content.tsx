"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SlideData } from "@/lib/slide-data";
import { containerVariants, imageVariants, itemVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      className="w-full h-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 lg:p-12 "
    >
      <motion.div
        variants={imageVariants}
        className=" w-full h-full border relative aspect-[4/3]  rounded-lg overflow-hidden shadow-2xl  lg:max-w-[60vw]"
      >
        <Image
          src={slide.image || "/placeholder.svg"}
          alt={slide.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={slide.id === 1}
        />
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="absolute top-[30%] lg:right-[10vw] sm:inset-x-0 lg:left-auto mx-2 lg:mx-0 lg:max-w-[40vw] w-full space-y-6 text-center lg:text-left"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {slide.category}
              </h3>
              <p className="text-foreground text-sm leading-relaxed mb-4">
                {slide.categoryDescription}
              </p>
              <Button
                variant="outline"
                className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground group transition-all duration-200"
                asChild
              >
                <Link href={slide.buttonHref}>
                  {slide.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
