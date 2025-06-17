"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/form-schemas";
import { containerVariants, itemVariants } from "@/lib/variant";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { FormErrorMessage } from "./form-error-message";

const timeFrameOptions = [
  { value: "asap", label: "ASAP" },
  { value: "1-week", label: "1 Week" },
  { value: "2-weeks", label: "2 Weeks" },
  { value: "1-month", label: "1 Month" },
  { value: "3-months", label: "3 Months" },
  { value: "6-months", label: "6+ Months" },
];

const roleOptions = [
  { value: "business-owner", label: "Business Owner" },
  { value: "manager", label: "Manager" },
  { value: "developer", label: "Developer" },
  { value: "designer", label: "Designer" },
  { value: "consultant", label: "Consultant" },
  { value: "other", label: "Other" },
];

const operatorOptions = [
  { value: "individual", label: "Individual" },
  { value: "small-business", label: "Small Business" },
  { value: "medium-business", label: "Medium Business" },
  { value: "enterprise", label: "Enterprise" },
  { value: "non-profit", label: "Non-Profit" },
  { value: "government", label: "Government" },
];

function RequestQuote() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues: QuoteFormValues = {
    name: "",
    email: "",
    phoneNumber: "",
    timeFrame: "",
    role: "",
    operator: "",
    message: "",
    agreeToTerms: false,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: quoteFormSchema,
    onSubmit: async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitted(true);
        formik.resetForm();
      } catch (error) {
        if (error instanceof Error) {
          console.log("error.stack is ", error.stack);
          console.log("error.message is ", error.message);
        }
      }
    },
  });

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-3xl mx-auto py-8 md:py-12 lg:py-16 flex flex-col gap-8 md:gap-16 lg:gap-24"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-medium text-foreground tracking-wide uppercase text-center"
      >
        Request a quote
      </motion.h1>

      <div className="space-y-6">
        {isSubmitted && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950 flex gap-2 items-center rounded px-3 py-2">
              <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              <p className="text-green-800 dark:text-green-200  ">
                Thank you! Your quote request has been submitted successfully.
                We&apos;ll get back to you soon.
              </p>
            </div>
          </motion.div>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-6" noValidate>
          {/* Name and Email Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-background border-input ${
                  formik.errors.name && formik.touched.name
                    ? "border-destructive"
                    : ""
                }`}
              />
              <FormErrorMessage
                error={formik.errors.name}
                touched={formik.touched.name}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-background border-input ${
                  formik.errors.email && formik.touched.email
                    ? "border-destructive"
                    : ""
                }`}
              />
              <FormErrorMessage
                error={formik.errors.email}
                touched={formik.touched.email}
              />
            </div>
          </motion.div>

          {/* Phone Number and Time Frame Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="space-y-2">
              <Label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-foreground"
              >
                Phone Number
              </Label>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-background border-input ${
                  formik.errors.phoneNumber && formik.touched.phoneNumber
                    ? "border-destructive"
                    : ""
                }`}
              />
              <FormErrorMessage
                error={formik.errors.phoneNumber}
                touched={formik.touched.phoneNumber}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="timeFrame"
                className="text-sm font-medium text-foreground"
              >
                Time Frame
              </Label>
              <Select
                value={formik.values.timeFrame}
                onValueChange={(value) =>
                  formik.setFieldValue("timeFrame", value)
                }
              >
                <SelectTrigger
                  className={`bg-background border-input ${
                    formik.errors.timeFrame && formik.touched.timeFrame
                      ? "border-destructive"
                      : ""
                  }`}
                >
                  <SelectValue placeholder="Select time frame" />
                </SelectTrigger>
                <SelectContent>
                  {timeFrameOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormErrorMessage
                error={formik.errors.timeFrame}
                touched={formik.touched.timeFrame}
              />
            </div>
          </motion.div>

          {/* Role and Operator Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="space-y-2">
              <Label
                htmlFor="role"
                className="text-sm font-medium text-foreground"
              >
                Role
              </Label>
              <Select
                value={formik.values.role}
                onValueChange={(value) => formik.setFieldValue("role", value)}
              >
                <SelectTrigger
                  className={`bg-background border-input ${
                    formik.errors.role && formik.touched.role
                      ? "border-destructive"
                      : ""
                  }`}
                >
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  {roleOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormErrorMessage
                error={formik.errors.role}
                touched={formik.touched.role}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="operator"
                className="text-sm font-medium text-foreground"
              >
                Operator
              </Label>
              <Select
                value={formik.values.operator}
                onValueChange={(value) =>
                  formik.setFieldValue("operator", value)
                }
              >
                <SelectTrigger
                  className={`bg-background border-input ${
                    formik.errors.operator && formik.touched.operator
                      ? "border-destructive"
                      : ""
                  }`}
                >
                  <SelectValue placeholder="Select operator type" />
                </SelectTrigger>
                <SelectContent>
                  {operatorOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormErrorMessage
                error={formik.errors.operator}
                touched={formik.touched.operator}
              />
            </div>
          </motion.div>

          {/* Message Field */}
          <motion.div variants={itemVariants} className="space-y-2">
            <Label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Tell us about your project
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Describe your project requirements..."
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`bg-background border-input resize-none ${
                formik.errors.message && formik.touched.message
                  ? "border-destructive"
                  : ""
              }`}
            />
            <FormErrorMessage
              error={formik.errors.message}
              touched={formik.touched.message}
            />
          </motion.div>

          {/* Terms and Conditions */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="agreeToTerms"
                checked={formik.values.agreeToTerms}
                onCheckedChange={(checked) =>
                  formik.setFieldValue("agreeToTerms", checked)
                }
                className="mt-1"
              />
              <div className="space-y-1">
                <Label
                  htmlFor="agreeToTerms"
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                  By submitting this form you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </Label>
                <FormErrorMessage
                  error={formik.errors.agreeToTerms}
                  touched={formik.touched.agreeToTerms}
                />
              </div>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {formik.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Quote...
                </>
              ) : (
                "Submit Quote"
              )}
            </Button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
}

export default RequestQuote;
