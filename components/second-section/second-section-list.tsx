"use client";

import { listContainerVariants, listItemVariants } from "@/lib/variant";
import { motion } from "framer-motion";
import Image from "next/image";

const SecondSectionList = () => {
  const secondSectionList = [
    {
      image: "/second-section-list-item-1.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "/second-section-list-item-2.png",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/second-section-list-item-3.png",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  return (
    <motion.div
      className="flex flex-col gap-2"
      variants={listContainerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {secondSectionList.map((secondSectionListItem, index) => {
        return (
          <motion.div
            key={index}
            className="relative flex gap-2"
            variants={listItemVariants}
          >
            <div className="relative overflow-hidden rounded shadow-2xl w-[120px] h-[120px]">
              <Image
                src={secondSectionListItem.image || "/placeholder.svg"}
                alt={secondSectionListItem.content}
                width={200}
                height={200}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <p className="text-muted-foreground text-xl flex-1">
              {secondSectionListItem.content}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SecondSectionList;
