import { containerVariants, imageVariants, itemVariants } from "@/lib/variant";
import { motion } from "framer-motion";
import Image from "next/image";

function SixthSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src="/sixth-section.png"
          alt="Industrial background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/20 dark:bg-background/40" />
      </motion.div>

      <motion.div
        className="relative z-10  p-4 sm:p-6 lg:p-8 text-center  min-h-screen flex flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.div variants={itemVariants}>
          <div className="bg-card/90 backdrop-blur-sm px-4 py-2  border border-border w-fit ">
            <span className="text-foreground font-bold text-3xl">LOGO</span>
          </div>
        </motion.div>
        <div className="flex-1 flex items-center justify-center">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-8 leading-tight text-balance"
            variants={itemVariants}
          >
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS
            EGESTAS ALIQUAM VIVERRA MI.
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
}

export default SixthSection;
