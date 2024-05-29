import type { loginFormSchema, signupFormSchema } from "@/schemas/auth";
import type { z } from "zod";

export type LoginFormData = z.infer<typeof loginFormSchema>;
export type SignupFormData = z.infer<typeof signupFormSchema>;
