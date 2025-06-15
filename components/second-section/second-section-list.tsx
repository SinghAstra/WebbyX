import { motion } from "framer-motion";
import Image from "next/image";
import React, { MutableRefObject } from "react";

interface SecondSectionListProps {
  ref: MutableRefObject<null>;
  inView: boolean;
}

const SecondSectionList = ({ ref, inView }: SecondSectionListProps) => {
  const secondSectionList = [
    {
      image: "/second-section-list-item-1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "/second-section-list-item-2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/second-section-list-item-3",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  return (
    <div ref={ref}>
      {secondSectionList.map((secondSectionListItem, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="relative flex gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl w-[146px]"
            >
              <Image
                src={secondSectionListItem.image}
                alt={secondSectionListItem.content}
                width={200}
                height={200}
                className="w-full h-auto object-cover"
                priority
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /> */}
            </motion.div>
            <p className="text-muted-foreground text-xl">
              {secondSectionListItem.content}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SecondSectionList;
