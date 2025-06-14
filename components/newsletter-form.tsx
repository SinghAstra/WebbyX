"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export function NewsletterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: newsletterSchema,
    onSubmit: async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      formik.resetForm();

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    },
  });

  return (
    <div className="space-y-4">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
      >
        <div className="flex-1">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`h-12 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
          />
        </div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            disabled={formik.isSubmitting}
            className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200"
          >
            {formik.isSubmitting ? (
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Submitting...</span>
              </motion.div>
            ) : (
              <div className="flex items-center space-x-2">
                <span>Submit</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </Button>
        </motion.div>
      </form>

      <AnimatePresence>
        {formik.touched.email && formik.errors.email && (
          <motion.p
            className="text-red-500 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {formik.errors.email}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="flex items-center space-x-2 text-green-600 text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full">
              <Check className="h-3 w-3 text-white" />
            </div>
            <span>Thank you for subscribing!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
