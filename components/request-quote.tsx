"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
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
import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";

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

  const handleSubmit = async (
    values: QuoteFormValues,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { setSubmitting, resetForm }: any
  ) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitted(true);
      resetForm();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`w-full max-w-3xl mx-auto py-8 md:py-12 lg:py-16 flex flex-col gap-8 md:gap-16 lg:gap-24`}
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
            <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
              <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertDescription className="text-green-800 dark:text-green-200">
                Thank you! Your quote request has been submitted successfully.
                We&apos;ll get back to you soon.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <Formik
          initialValues={initialValues}
          validationSchema={quoteFormSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values, errors, touched }) => (
            <Form className="space-y-6">
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
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className={`bg-background border-input ${
                      errors.name && touched.name ? "border-destructive" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-sm text-destructive"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </Label>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className={`bg-background border-input ${
                      errors.email && touched.email ? "border-destructive" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-sm text-destructive"
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
                  <Field
                    as={Input}
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    className={`bg-background border-input ${
                      errors.phoneNumber && touched.phoneNumber
                        ? "border-destructive"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="p"
                    className="text-sm text-destructive"
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
                    value={values.timeFrame}
                    onValueChange={(value) => setFieldValue("timeFrame", value)}
                  >
                    <SelectTrigger
                      className={`bg-background border-input ${
                        errors.timeFrame && touched.timeFrame
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
                  <ErrorMessage
                    name="timeFrame"
                    component="p"
                    className="text-sm text-destructive"
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
                    value={values.role}
                    onValueChange={(value) => setFieldValue("role", value)}
                  >
                    <SelectTrigger
                      className={`bg-background border-input ${
                        errors.role && touched.role ? "border-destructive" : ""
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
                  <ErrorMessage
                    name="role"
                    component="p"
                    className="text-sm text-destructive"
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
                    value={values.operator}
                    onValueChange={(value) => setFieldValue("operator", value)}
                  >
                    <SelectTrigger
                      className={`bg-background border-input ${
                        errors.operator && touched.operator
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
                  <ErrorMessage
                    name="operator"
                    component="p"
                    className="text-sm text-destructive"
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
                <Field
                  as={Textarea}
                  id="message"
                  name="message"
                  placeholder="Describe your project requirements..."
                  rows={4}
                  className={`bg-background border-input resize-none ${
                    errors.message && touched.message
                      ? "border-destructive"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-sm text-destructive"
                />
              </motion.div>

              {/* Terms and Conditions */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeToTerms"
                    checked={values.agreeToTerms}
                    onCheckedChange={(checked) =>
                      setFieldValue("agreeToTerms", checked)
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
                    <ErrorMessage
                      name="agreeToTerms"
                      component="p"
                      className="text-sm text-destructive"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting Quote...
                    </>
                  ) : (
                    "Submit Quote"
                  )}
                </Button>
              </motion.div>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
}

export default RequestQuote;
