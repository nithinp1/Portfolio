"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function sendMessage(
  data: z.infer<typeof contactSchema>
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
      success: false,
    };
  }

  try {
    console.log("Simulating sending message:", validatedFields.data);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

    return {
      message: "Thank you for your message! I'll get back to you soon.",
      success: true,
    };
  } catch (e) {
    console.error("Error sending message:", e);
    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
    };
  }
}
