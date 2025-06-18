"use client";

import { containerVariants, imageVariants, itemVariants } from "@/lib/variant";
import { motion } from "framer-motion";
import { Download, Star } from "lucide-react";
import Image from "next/image";

function DownloadApp() {
  return (
    <motion.div
      className=" relative min-h-screen overflow-hidden flex items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {/* Left Content */}
      <div className="space-y-8 lg:space-y-10 max-w-2xl mx-auto lg:ml-10 px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance">
            <span className="text-foreground">Lorem Ipsum</span>{" "}
            <span className="text-primary">Dolor Sit Amet</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-balance"
        >
          Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquam ut nunc
          donec tellus rhoncus. Pellentesque ultricies lorem ipsum.
        </motion.p>

        {/* Download Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <div className="relative w-32 cursor-pointer hover:scale-110 transition-all duration-200">
            <Image
              src="/google-play.png"
              alt="Google Play"
              width={200}
              height={300}
              className="w-full object-cover"
              priority
            />
          </div>
          <div className="relative w-32 cursor-pointer hover:scale-110 transition-all duration-200">
            <Image
              src="/app-store.png"
              alt="Google Play"
              width={200}
              height={300}
              className="w-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
      {/* Right Content - Phone Image */}
      <motion.div
        className="absolute inset-0 left-[50vw] top-[20vh] hidden lg:flex justify-end  group"
        variants={imageVariants}
      >
        {/* Phone Container */}
        <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <Image
          src="/hero-phone.png"
          alt="Mobile app interface showing Lorem Ipsum application"
          width={400}
          height={600}
          className="w-full max-w-sm mx-auto drop-shadow-2xl"
          priority
        />

        {/* Floating UI Elements */}
        <motion.div
          className="absolute top-1/4 left-0 bg-card border border-border rounded-xl p-3 shadow-lg hidden lg:block"
          animate={{
            x: [0, -5, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-xs font-semibold">4.8 Rating</div>
              <div className="text-xs text-muted-foreground">Excellent</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-4 bg-card border border-border rounded-xl p-3 shadow-lg hidden lg:block"
          animate={{
            x: [0, 5, 0],
            y: [0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
              <Download className="w-4 h-4 text-accent-foreground" />
            </div>
            <div>
              <div className="text-xs font-semibold">10K+</div>
              <div className="text-xs text-muted-foreground">Downloads</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default DownloadApp;

{
  /* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" /> */
}
