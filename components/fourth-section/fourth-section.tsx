import { containerVariants, imageVariants, itemVariants } from "@/lib/variant";
import { motion } from "framer-motion";
import Image from "next/image";

function FourthSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src="/fourth-section.png"
          alt="Industrial background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/20 dark:bg-background/40" />
      </motion.div>

      <motion.div
        className="relative z-10  p-4 sm:p-6 lg:p-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.div variants={itemVariants}>
          <div className="bg-card/90 backdrop-blur-sm px-4 py-2  border border-border w-fit ">
            <span className="text-foreground font-bold text-3xl">LOGO</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-8 leading-tight text-balance"
          variants={itemVariants}
        >
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS
          ALIQUAM VIVERRA MI.
        </motion.h1>

        <motion.p
          className="text-base sm:text-base md:text-lg text-foreground mb-6 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat
          vestibulum nisl at ac risus amet. Mi accumsan sagittis justo
          pellentesque ut sed. Id tellus id luctus id. At quis amet libero urna
          arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
        </motion.p>

        <motion.p
          className="text-base sm:text-base md:text-lg text-foreground max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
          condimentum ultrices non. Ornare semper in. Tincidunt pellentesque
          eros mauris in vitae. At viverra quis eu malesuada vel et porttitor.
          Nulla lectus quam risus lacus non at. Tristique morbi feugiat a
          pulvinar tristique rhoncus ligula. Tincidunt cursus vitae leo.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default FourthSection;
