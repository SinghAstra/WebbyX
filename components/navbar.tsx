"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  {
    label: "Products",
    items: ["Product 1", "Product 2", "Product 3"],
  },
  {
    label: "Solutions",
    items: ["Solution 1", "Solution 2", "Solution 3"],
  },
  {
    label: "Resources",
    items: ["Documentation", "Blog", "Support"],
  },
];

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm flex items-center justify-center  h-[100px]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-2xl font-bold text-foreground">LOGO</div>
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button
                  className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{item.label}</span>
                  <ChevronDown className="h-4 w-4" />
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-48 bg-popover rounded-lg shadow-lg border border-border py-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.items.map((subItem) => (
                        <motion.a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-150"
                          whileHover={{ x: 4 }}
                        >
                          {subItem}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Sign In Button and Theme Toggle */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200 w-[125px] h-[38px]"
              >
                Sign In
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
