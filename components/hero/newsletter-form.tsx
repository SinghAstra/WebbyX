"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsletterSchema } from "@/lib/form-schemas";
import { hoverAndTapScaleVariant } from "@/lib/variants";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export function NewsletterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: newsletterSchema,
    onSubmit: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      formik.resetForm();
    },
  });

  return (
    <div className="space-y-1">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
        noValidate
      >
        <Input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`rounded-none lg:rounded-l-sm  ${
            formik.touched.email && formik.errors.email
              ? "border-destructive focus:border-destructive focus:ring-destructive"
              : "border-input focus:border-primary focus:ring-primary"
          }`}
        />
        <motion.div
          variants={hoverAndTapScaleVariant}
          whileHover="hover"
          whileTap="tap"
        >
          <Button
            type="submit"
            disabled={formik.isSubmitting}
            className=" px-8 bg-button hover:bg-button  rounded-none lg:rounded-r-sm w-full lg:w-fit text-primary-foreground font-medium transition-all duration-200"
          >
            {formik.isSubmitting ? (
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                <span>Submitting...</span>
              </motion.div>
            ) : (
              <div className="flex items-center space-x-2 group">
                <span>Submit</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition duration-200" />
              </div>
            )}
          </Button>
        </motion.div>
      </form>

      {formik.touched.email && formik.errors.email && (
        <motion.p
          className="text-destructive text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.3,
          }}
        >
          {formik.errors.email}
        </motion.p>
      )}

      {isSubmitted && (
        <motion.div
          className="flex items-center space-x-2 text-green-600 dark:text-green-400 text-sm font-medium"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <div className="flex items-center justify-center w-5 h-5 bg-green-500 dark:bg-green-600 rounded-full">
            <Check className="h-3 w-3 text-white" />
          </div>
          <span>Thank you for subscribing!</span>
        </motion.div>
      )}
    </div>
  );
}
