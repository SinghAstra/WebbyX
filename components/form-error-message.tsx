"use client";

import { AnimatePresence, motion } from "framer-motion";

interface FormErrorMessageProps {
  error?: string;
  touched?: boolean;
  className?: string;
}

export function FormErrorMessage({
  error,
  touched,
  className = "",
}: FormErrorMessageProps) {
  return (
    <AnimatePresence>
      {touched && error && (
        <motion.p
          className={`text-destructive text-sm ${className}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.3,
          }}
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
