import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters.")
    .max(50, "Name must be 50 characters or fewer."),
  email: z
    .email()
    .trim()
    .min(1, "Email is required.")
    .max(50, "Email must be 50 characters or fewer."),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits."),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
