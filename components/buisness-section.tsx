"use client";

import {
  containerVariants,
  imageVariants,
  itemVariants,
  tabVariants,
} from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BusinessSection() {
  return (
    <section className="py-8 md:py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto"
        >
          {/* Content Section */}
          <div className="space-y-6 lg:space-y-8">
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight"
            >
              LOREM IPSUM DOLOR SIT AMET
            </motion.h1>

            {/* Tabs */}
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap  "
            >
              {["Research", "Plan", "Design"].map((tab) => (
                <motion.div
                  key={tab}
                  variants={tabVariants}
                  className="relative  border flex items-center justify-center"
                >
                  <button className="text-xs px-4 py-2 sm:text-sm md:text-base lg:text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 pb-1 md:pb-2 border-b-2 border-transparent hover:border-primary focus:outline-none focus:border-primary">
                    {tab}
                  </button>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
            >
              Excepteur fringilla aliquam leo, habitasse arcu varius lorem est.
              Neque consectetur duis ac tellus ac varius tortor, bibendum. Nulla
              nulla ac tempus at amet. Purus malesuada placerat arcu at enim vel
              in accumsan.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-2">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm sm:text-base md:text-lg transition-colors duration-200 group  rounded-sm"
              >
                <span>Check tools</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] xl:aspect-[3/2] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/business.png"
              alt="Business professionals shaking hands in agreement"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default BusinessSection;
