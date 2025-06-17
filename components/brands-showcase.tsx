"use client";

import { containerVariants, imageVariants, itemVariants } from "@/lib/variant";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const brands = [
  { name: "Hero", logo: "/logo-1.png" },
  { name: "Honda", logo: "/logo-2.png" },
  { name: "Bajaj", logo: "/logo-3.png" },
  { name: "TVS", logo: "/logo-4.png" },
  { name: "Royal Enfield", logo: "/logo-5.png" },
  { name: "Yamaha", logo: "/logo-6.png" },
  { name: "KTM", logo: "/logo-7.png" },
  { name: "Ather", logo: "/logo-8.png" },
  { name: "Ola Electric", logo: "/logo-9.png" },
  { name: "Revolt", logo: "/logo-10.png" },
  { name: "Ultraviolette", logo: "/logo-11.png" },
  { name: "Tork", logo: "/logo-12.png" },
];

function BrandsShowcase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Brands Section */}
      <motion.section
        className="relative px-4 py-16 sm:px-6 lg:px-8 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-1"
              variants={itemVariants}
            >
              Trusted by Industry Leaders
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
            </motion.p>
          </motion.div>

          {/* Brands Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                variants={imageVariants}
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="flex items-center justify-center p-4 "
              >
                <div className="relative w-full h-24">
                  <Image
                    src={`/logo-${index + 1}.png`}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain  transition-all duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default BrandsShowcase;
