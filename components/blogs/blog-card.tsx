"use client";

import { Button } from "@/components/ui/button";
import { imageVariants, itemVariants, listItemVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
}

export function BlogCard({ title, description, image }: BlogCardProps) {
  return (
    <motion.div variants={listItemVariants}>
      <div className="group overflow-hidden hover:bg-muted/40 hover:shadow-lg transition-all duration-300  w-full rounded-md  border ">
        <div className="relative overflow-hidden">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView={"visible"}
          >
            <Image
              src={image}
              alt={title}
              width={400}
              height={250}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </motion.div>
        </div>
        <div className="p-6">
          <motion.h3
            className="text-lg font-semibold text-foreground mb-3 line-clamp-2"
            variants={itemVariants}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              asChild
              variant="link"
              className="p-0 h-auto text-primary hover:text-primary/80 font-medium"
            >
              <Link href={`/`}>Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
