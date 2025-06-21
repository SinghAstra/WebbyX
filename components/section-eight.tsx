import { containerVariants, imageVariants, itemVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

function SectionEight() {
  return (
    <motion.div
      className="container mx-auto p-4"
      variants={containerVariants}
      initial={"hidden"}
      whileInView={"visible"}
    >
      <div className="grid gap-4 h-screen w-full grid-cols-12 grid-rows-12 overflow-hidden ">
        <div className="col-span-5 row-span-8">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <motion.p
                className="text-sm font-medium text-blue-600 tracking-wide uppercase"
                variants={itemVariants}
              >
                NO LIMITS
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-bold text-foreground  leading-tight"
              >
                LOREM IPSUM DOLOR SIT AMET
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed max-w-md"
              >
                Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
                porttitor pharetra tempor quis arcu. Ipsum nullam.
              </motion.p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-none font-medium inline-flex items-center gap-2 w-fit group">
                Lorem Ipsum
                <ArrowRight className="w-4 h- transition-all duration-200 group-hover:translate-x-2" />
              </Button>
            </div>
          </div>
        </div>
        <motion.div
          variants={imageVariants}
          className="row-start-11 col-start-1 col-span-1 overflow-hidden row-span-2"
        >
          <div className="w-[200px] h-[200px]">
            <Image
              src="/eight-one.png"
              alt="bikers"
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-all"
            />
          </div>
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="row-start-9 col-start-2 col-span-6 overflow-hidden row-span-4"
        >
          <div className="w-[800px] h-[500px]">
            <Image
              src="/eight-two.png"
              alt="bikers"
              width={1400}
              height={1400}
              className="w-full h-full object-cover group-hover:scale-105 transition-all"
            />
          </div>
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="row-start-4 col-start-6 col-span-2 overflow-hidden row-span-5"
        >
          <Image
            src="/eight-three.png"
            alt="bikers"
            width={400}
            height={400}
            className="w-full h-full object-cover hover:scale-105 transition-all"
          />
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="row-start-2 col-start-8 col-span-1 overflow-hidden row-span-4"
        >
          <Image
            src="/eight-four.png"
            alt="bikers"
            width={400}
            height={400}
            className="w-full h-full object-cover  hover:scale-105 transition-all"
          />
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="row-start-1 col-start-9 col-span-4 overflow-hidden row-span-5"
        >
          <Image
            src="/eight-six.png"
            alt="bikers"
            width={400}
            height={400}
            className="w-full h-full object-cover hover:scale-105 transition-all"
          />
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="row-start-6 col-start-8 group col-span-5 overflow-hidden row-span-5"
        >
          <Image
            src="/eight-five.png"
            alt="bikers"
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-all"
          />
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="row-start-11 col-start-8 group col-span-1 overflow-hidden row-span-2"
        >
          <div className="w-[200px] h-[200px]">
            <Image
              src="/second-section.png"
              alt="bikers"
              width={1000}
              height={1000}
              className="w-full h-full object-cover group-hover:scale-105 transition-all"
            />
          </div>
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="row-start-11 col-start-9 group col-span-4 overflow-hidden row-span-2 transition-all "
        >
          <div className="w-[500px] h-[200px]">
            <Image
              src="/second-section-list-item-2.png"
              alt="bikers"
              width={1000}
              height={1000}
              className="w-full h-full object-cover group-hover:scale-105 transition-all"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SectionEight;
