import * as Yup from "yup";

export const quoteFormSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[+]?[1-9][\d]{0,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  timeFrame: Yup.string().required("Time frame is required"),
  role: Yup.string().required("Role is required"),
  operator: Yup.string().required("Operator is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters")
    .required("Message is required"),
});

export const newsletterSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter a valid email address."),
});

export type QuoteFormValues = Yup.InferType<typeof quoteFormSchema>;
