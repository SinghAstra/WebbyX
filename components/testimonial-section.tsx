"use client";

import { Button } from "@/components/ui/button";
import {
  containerVariants,
  imageVariants,
  itemVariants,
  listContainerVariants,
  listItemVariants,
} from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Cloud, Network, ShoppingBag } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jane Cooper",
    avatar: "/user-1.png",
    text: "Dolor molestiae quis sit ex, aliquam Totam porttitor ut sollicitudin sit non fringilla. Quam quas voluptat exercitationem neque odio sunt placerat.",
    icon: Cloud,
  },
  {
    id: 2,
    name: "Ralph Edwards",
    avatar: "/user-2.png",
    text: "Vehicula ut sit placerat bibendum ut risus accumsan. Purus, in massa, enim lorem metus eleifend pellentesque. Mattis placerat accumsan quis sit ex, aliquam ut.",
    icon: Network,
  },
  {
    id: 3,
    name: "Courtney Henry",
    avatar: "/user-4.png",
    text: "Viverra lacus suspendisse elit, bibendum orci non lorem lorem sapien. Viverra blandit sem neque pretium. Duis enim semper.",
    icon: ShoppingBag,
  },
  {
    id: 4,
    name: "Cameron W",
    avatar: "/user-3.png",
    text: "Habitant augue ut in quis rhoncus magna habitasse. Egestas amet lorem lorem ut, aliquam ut.",
    icon: Clock,
  },
  {
    id: 5,
    name: "Jane Cooper",
    avatar: "/user-1.png",
    text: "Dolor molestiae quis sit ex, aliquam Totam porttitor ut sollicitudin sit non fringilla. Quam quas voluptat exercitationem neque odio sunt placerat.",
    icon: Cloud,
  },
  {
    id: 6,
    name: "Ralph Edwards",
    avatar: "/user-2.png",
    text: "Vehicula ut sit placerat bibendum ut risus accumsan. Purus, in massa, enim lorem metus eleifend pellentesque. Mattis placerat accumsan quis sit ex, aliquam ut.",
    icon: Network,
  },
  {
    id: 7,
    name: "Courtney Henry",
    avatar: "/user-4.png",
    text: "Viverra lacus suspendisse elit, bibendum orci non lorem lorem sapien. Viverra blandit sem neque pretium. Duis enim semper.",
    icon: ShoppingBag,
  },
  {
    id: 8,
    name: "Cameron W",
    avatar: "/user-3.png",
    text: "Habitant augue ut in quis rhoncus magna habitasse. Egestas amet lorem lorem ut, aliquam ut.",
    icon: Clock,
  },
];

function TestimonialSection() {
  return (
    <section className="relative min-h-screen bg-button overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <motion.div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 lg:mb-24">
            <div className="text-left mb-8 lg:mb-0">
              <motion.p
                variants={itemVariants}
                className="text-primary-foreground/80 text-sm md:text-base font-medium mb-4 tracking-wide uppercase"
              >
                Join other Sun harvesters
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 lg:mb-8 leading-tight"
              >
                LOREM IPSUM DOLOR SIT AMET
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-primary-foreground/90 text-base md:text-lg lg:text-xl max-w-3xl mb-8 lg:mb-12 leading-relaxed"
              >
                Qui adipiscing lectus libero, aliquam vitae sit adipiscing
                mauris pellentesque. Bibendum mi tristique condimentum congue
                facilisi nunc, donec magna commodo.
              </motion.p>
            </div>
            <motion.div variants={itemVariants} className="pt-4 flex-shrink-0">
              <Button className="group relative overflow-hidden bg-background text-foreground text-base font-semibold rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Lorem Ipsum</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Testimonials Horizontal Scroll */}
          <motion.div
            variants={listContainerVariants}
            className="testimonials-scroll flex gap-6 lg:gap-8 overflow-x-auto pb-4 py-12"
          >
            {testimonials.map((testimonial) => {
              const IconComponent = testimonial.icon;
              return (
                <motion.div
                  key={testimonial.id}
                  variants={listItemVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.1, ease: "easeOut" },
                  }}
                  className="group flex-shrink-0 w-72 sm:w-80 shadow-xl "
                >
                  <div className="h-full bg-background/95 backdrop-blur-sm border-background/20 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-background p-4 flex flex-col justify-between">
                    <motion.div
                      variants={imageVariants}
                      className="flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 mb-6 transition-all duration-300"
                    >
                      <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-primary font-extralight" />
                    </motion.div>

                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 ring-2 ring-primary/20 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm lg:text-base">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialSection;
