"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "../ui/button";
import SecondSectionList from "./second-section-list";

function SecondSection() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const secondSectionListRef = useRef(null);
  const contactRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const descriptionInView = useInView(descriptionRef, {
    once: true,
    margin: "-100px",
  });
  const secondSectionListInView = useInView(descriptionRef, {
    once: true,
    margin: "-100px",
  });
  const contactRefInView = useInView(contactRef, {
    once: true,
    margin: "-100px",
  });

  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });
  return (
    <div className="min-h-screen bg-background">
      <motion.div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.p className="text-blue-600 dark:text-blue-400 font-medium text-sm lg:text-base">
              Lorem ipsum dolor sit amet
            </motion.p>
            <div className="space-y-6">
              <motion.h1
                ref={titleRef}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4 }}
                className="text-4xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                LOREM IPSUM
                <br />
                <span className="text-primary">DOLOR SIT AMET</span>
              </motion.h1>

              <motion.p
                ref={descriptionRef}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  descriptionInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Lorem ipsum dolor sit amet consectetur. Amet sodales risus
                facilisis donec eu. Mi porttitor et aliquam ante tristique eget
                integer in. Nam vitae nisi quis at leo aliquam. Hendrerit tellus
                at mauris consectetur.
              </motion.p>
            </div>
            <SecondSectionList
              inView={secondSectionListInView}
              secondSectionListRef={secondSectionListRef}
            />
            <motion.div
              ref={contactRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                contactRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              className="flex gap-2"
            >
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
          </div>

          {/* Right Content - Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              imageInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-full w-full"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl  h-full"
            >
              <Image
                src="/second-section.png"
                alt="Colorful motorcycles showcase"
                width={600}
                height={400}
                className=" h-full object-cover"
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
