"use client";

import { Button } from "@/components/ui/button";
import { containerVariants, imageVariants, itemVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

const features = [
  "Premium Quality Service",
  "Expert Professional Team",
  "Advanced Technology Solutions",
  "24/7 Customer Support",
  "Competitive Pricing",
  "Guaranteed Results",
];

function FeaturesSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="w-full max-w-7xl mx-auto  min-h-screen px-4 md:px-8 lg:px-12"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 ">
        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          className="relative order-2 lg:order-1 lg:mt-[5vh]"
        >
          <div className="relative h-[60vh] overflow-hidden border-2 border-primary/10 shadow-2xl">
            <Image
              src="/features.png"
              alt="Two motorcyclists on a scenic road journey"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 lg:space-y-8 order-1 lg:order-2 mt-[15vh] bg-muted px-3 py-2 rounded-sm "
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <span className=" font-semibold text-link text-xl  ">
              Lorem Ipsum
            </span>

            <h1 className="text-3xl sm:text-4xl   font-bold leading-tight text-balance">
              <span className="text-link">LOREM </span>{" "}
              <span className="text-foreground">
                IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
              </span>{" "}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
              amet non. Experience the journey of a lifetime with our premium
              services and expert guidance.
            </p>
          </motion.div>

          <motion.div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 group"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm lg:text-base text-foreground group-hover:text-primary transition-colors duration-200">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4">
            <Button className="group relative overflow-hidden bg-button hover:bg-button text-primary-foreground text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Lorem Ipsum</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FeaturesSection;
