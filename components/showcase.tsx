"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

function ShowCase() {
  return (
    <section className="relative bg-muted py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 relative "
        >
          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 lg:space-y-8  "
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl  font-bold text-primary leading-tight"
            >
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Lorem ipsum dolor sit amet consectetur. In imperdiet morbi mi
              blandit cursus. Ut tellus arcu sed viverra ullamcorper venenatis.
              Sit ultrices feugiat mauris. Aliquam tellus turpis porta risus
              felis. Massa in facilisis semper libero eget eu, ultrices blandit
              ante tellus.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="group rounded bg-button hover:bg-button text-primary-foreground px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a href={"#"}>
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              variants={imageVariants}
              className="relative shadow-2xl max-w-lg px-4 py-6 rounded bg-muted/30 flex flex-col gap-4"
            >
              <div className="h-8 w-8 absolute top-2 right-2">
                <Image
                  alt="pin"
                  src={"/pin.png"}
                  className="object-cover"
                  width={40}
                  height={40}
                />
              </div>
              <motion.div variants={itemVariants}>
                Lorem ipsum dor sit
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground"
              >
                Lorem ipsum dor sit Lorem ipsum dor sit Lorem ipsum dor sit
                Lorem ipsum dor sit
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground"
              >
                Lorem ipsum dor sit Lorem ipsum dor sit Lorem ipsum dor sit
                Lorem ipsum dor sit Lorem ipsum dor sit Lorem ipsum dor sit
                Lorem ipsum dor sit Lorem ipsum dor sit Lorem ipsum dor sit
                Lorem ipsum dor sit
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground"
              >
                Lorem Lorem ipsum dor sit Lorem ipsum dor sit Lorem ipsum dor
                sit Lorem ipsum dor sit Lorem ipsum dor sit Lorem ipsum dor sit
                Lorem ipsum dor sit Lorem ipsum dor sit Lorem ipsum dor sit
                Lorem ipsum dor sit ipsum dor sit
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className=" hidden lg:block absolute -top-[30%] left-[50%] max-w-[40%] aspect-[4/3] w-full overflow-hidden rounded-lg shadow-2xl"
          >
            <Image
              src="/showroom.png"
              alt="Professional business meeting with two men discussing next to a motorcycle in a modern office setting"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ShowCase;
