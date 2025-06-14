"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { NewsletterForm } from "./newsletter-form";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center overflow-x-hidden ">
      {/* Left Content */}
      <motion.div
        className="space-y-4 max-w-xl mx-auto lg:mx-8 "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transform Your Business with Modern Solutions
        </motion.h1>

        <motion.p
          className="text-lg text-muted-foreground leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Lorem ipsum dolor sit amet consectetur. Enim metus cras congue quis
          elit sociis. Sed mi rhoncus id habitant. In urna tellus mi platea
          morbi libero imperdiet risque. Justo suspendisse tristique posuere
          quis eget viterra.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <NewsletterForm />
        </motion.div>

        <motion.div
          className="flex items-center space-x-2 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="flex items-center justify-center w-5 h-5 bg-green-500 dark:bg-green-600 rounded-full">
            <Check className="h-3 w-3 text-white" />
          </div>
          <span>No credit card required!</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute right-0 top-0 min-h-screen w-[60vw]"
        style={{
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
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
