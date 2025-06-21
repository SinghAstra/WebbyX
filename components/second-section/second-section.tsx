"use client";

import { containerVariants, imageVariants, itemVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import SecondSectionList from "./second-section-list";

function SecondSection() {
  return (
    <div className="min-h-screen bg-background">
      <motion.div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.p
              className="text-blue-600 dark:text-blue-400 font-medium text-sm lg:text-base"
              variants={itemVariants}
            >
              Lorem ipsum dolor sit amet
            </motion.p>

            <div className="space-y-6">
              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-foreground leading-tight"
                variants={itemVariants}
              >
                LOREM IPSUM
                <br />
                <span className="text-primary">DOLOR SIT AMET</span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                variants={itemVariants}
              >
                Lorem ipsum dolor sit amet consectetur. Amet sodales risus
                facilisis donec eu. Mi porttitor et aliquam ante tristique eget
                integer in. Nam vitae nisi quis at leo aliquam. Hendrerit tellus
                at mauris consectetur.
              </motion.p>
            </div>

            <motion.div variants={itemVariants}>
              <SecondSectionList />
            </motion.div>

            <motion.div className="flex gap-2" variants={itemVariants}>
              <Button className="w-[179px] h-[38px] flex items-center space-x-2 group">
                Lorem Ipsum
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition duration-200" />
              </Button>
              <Button
                variant={"ghost"}
                className="w-[179px] h-[38px] flex items-center space-x-2 group"
              >
                <Phone className="h-4 w-4 group-hover:-translate-x-2 transition duration-200" />
                123456789
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative h-full w-full"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl h-full"
            >
              <Image
                src="/second-section.png"
                alt="Colorful motorcycles showcase"
                width={600}
                height={400}
                className="h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default SecondSection;
