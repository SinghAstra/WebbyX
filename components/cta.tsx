"use client";

import { Button } from "@/components/ui/button";
import {
  containerVariants,
  imageVariants,
  itemVariants,
  slideUpVariants,
} from "@/lib/variant";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function CTASection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-background">
      <motion.div
        className="max-w-2xl mx-auto text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={imageVariants} className="flex justify-center">
          <div className=" bg-muted shadow-2xl flex items-center justify-center py-2 px-3 text-2xl md:text-4xl font-bold leading-tight">
            LOGO
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
        >
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto text-balance"
        >
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={slideUpVariants} className="pt-4">
          <Button
            size="lg"
            className="px-8 py-3 text-base shadow-sm font-medium bg-primary hover:shadow-2xl text-primary-foreground transition-all duration-200 group rounded"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CTASection;
