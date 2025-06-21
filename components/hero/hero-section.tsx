"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { containerVariants, imageVariants, itemVariants } from "@/lib/variants";
import Image from "next/image";
import { NewsletterForm } from "./newsletter-form";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center overflow-x-hidden">
      {/* Left Content */}
      <motion.div
        className="space-y-4 max-w-lg mx-auto px-4 lg:mx-8 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
          variants={itemVariants}
        >
          Transform Your Business with Modern Solutions
        </motion.h1>

        <motion.p
          className="text-lg text-muted-foreground leading-relaxed max-w-lg"
          variants={itemVariants}
        >
          Lorem ipsum dolor sit amet consectetur. Enim metus cras congue quis
          elit sociis. Sed mi rhoncus id habitant. In urna tellus mi platea
          morbi libero imperdiet risque. Justo suspendisse tristique posuere
          quis eget viterra.
        </motion.p>

        <motion.div variants={itemVariants}>
          <NewsletterForm />
        </motion.div>

        <motion.div
          className="flex items-center space-x-2 text-sm text-muted-foreground"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center w-5 h-5 bg-button rounded-full">
            <Check className="h-3 w-3 text-primary-foreground" />
          </div>
          <span>No credit card required!</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute right-0 top-0 min-h-screen w-[60vw]"
        style={{
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src="/hero-image.png"
          alt="Modern business solutions"
          fill
          className="object-cover"
          priority
          sizes="(min-width: 768px) 50vw"
        />
      </motion.div>
    </section>
  );
}
