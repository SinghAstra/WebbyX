"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const bulletPoints = [
  {
    text: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas. Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Orci sit ut tortor.",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas. Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Orci sit ut tortor.",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas. Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Orci sit ut tortor.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
    ease: "easeOut",
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

function ThirdSection() {
  return (
    <section className="relative min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-blue-600 dark:text-blue-400 font-medium text-sm lg:text-base"
              >
                Lorem ipsum dolor sit amet
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance"
              >
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-lg"
              >
                Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
                leo efficiend condimentum sit in vitae faucibus. Amet massa
                molestie sit et pretium. Donec pharetra ut lacus tempor
                suspendisse molestie ornare.
              </motion.p>
            </motion.div>

            {/* Bullet Points */}
            <motion.div variants={itemVariants} className="space-y-6">
              {bulletPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-[36px] h-[36px] group-hover:scale-110 transition-transform duration-200 relative">
                      <Image
                        src="/bullet-point.png"
                        alt="Bullet Point"
                        width={36}
                        height={36}
                        className=" h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-lg shadow-2xl"
            >
              <Image
                src="/third-section.png"
                alt="Two professional men having a business conversation in an office setting"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
