"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  containerVariants,
  fadeInVariants,
  itemVariants,
} from "@/lib/variants";
import { motion } from "framer-motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "item-1",
    question: "What technologies do you use in your development process?",
    answer:
      "We use modern technologies including Next.js with TypeScript for robust web applications, Tailwind CSS for responsive styling, ShadCN UI for consistent component design, and Framer Motion for smooth animations and transitions. This tech stack ensures optimal performance, maintainability, and user experience.",
  },
  {
    id: "item-2",
    question: "How do you ensure responsive design across all devices?",
    answer:
      "Our development approach prioritizes mobile-first design principles. We test across all screen sizes (XS, SM, MD, LG, XL) using Tailwind CSS's responsive utilities. Every component is built with fluid layouts, flexible grids, and adaptive typography to ensure perfect rendering on smartphones, tablets, and desktop computers.",
  },
  {
    id: "item-3",
    question: "What kind of animations and interactions do you implement?",
    answer:
      "We implement sophisticated animations using Framer Motion, including scroll-based animations like fade-ins and slide-ins, smooth UI transitions for buttons and interactive elements, hover and active states, and parallax effects where appropriate. All animations are optimized for performance and accessibility.",
  },
  {
    id: "item-4",
    question: "How do you handle SEO and performance optimization?",
    answer:
      "We follow Next.js best practices including server-side rendering, optimized image loading with the Next.js Image component, proper meta tags and structured data, favicon implementation, and performance optimization techniques. We also implement proper loading states and error handling for enhanced user experience.",
  },
  {
    id: "item-5",
    question: "Do you support both dark and light themes?",
    answer:
      "Yes, we implement comprehensive theme support using CSS custom properties and Tailwind CSS's dark mode utilities. Our components automatically adapt to user preferences and system settings, ensuring consistent branding and optimal readability in both light and dark environments.",
  },
  {
    id: "item-6",
    question: "What is your approach to component architecture?",
    answer:
      "We follow a component-based architecture philosophy, breaking down complex UIs into reusable, modular components. This approach ensures code maintainability, consistency across the application, easier testing, and faster development cycles. Each component is designed to be flexible and configurable for various use cases.",
  },
];

function FAQSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="space-y-16"
      >
        <motion.div variants={itemVariants} className="text-left ">
          <h2 className="text-3xl sm:text-4xl  font-bold tracking-tight text-foreground uppercase">
            Frequently Asked Questions (FAQS)
          </h2>
        </motion.div>
        <motion.div variants={fadeInVariants} className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                className="group"
              >
                <AccordionItem
                  value={faq.id}
                  className="border border-x-0  px-6 py-2 bg-card hover:bg-accent/50 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left hover:no-underline group-hover:text-primary transition-colors duration-200 py-2">
                    <span className="text-base sm:text-lg font-medium pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed py-2">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm sm:text-base"
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FAQSection;
