// src/schemas/contactSchema.ts
import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  companyName: z.string().optional(),
  phoneNumber: z
    .string()
    .min(6, "Phone number too short")
    .regex(/^[0-9+ ]+$/, "Invalid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// This will be useful in react-hook-form
export type ContactFormData = z.infer<typeof contactSchema>;
