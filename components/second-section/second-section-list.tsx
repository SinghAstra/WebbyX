import { motion } from "framer-motion";
import Image from "next/image";
import React, { MutableRefObject } from "react";

interface SecondSectionListProps {
  secondSectionListRef: MutableRefObject<null>;
  inView: boolean;
}

const SecondSectionList = ({
  secondSectionListRef,
  inView,
}: SecondSectionListProps) => {
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
    <div ref={secondSectionListRef} className="flex flex-col gap-2">
      {secondSectionList.map((secondSectionListItem, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="relative flex gap-2"
          >
            <div className="relative overflow-hidden rounded shadow-2xl w-[120px] h-[120px]">
              <Image
                src={secondSectionListItem.image}
                alt={secondSectionListItem.content}
                width={200}
                height={200}
                className="w-full h-auto object-cover "
                priority
              />
            </div>
            <p className="text-muted-foreground text-xl flex-1">
              {secondSectionListItem.content}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SecondSectionList;
