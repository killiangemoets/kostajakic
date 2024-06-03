"use client";

import { signUpServerAction } from "./actions";
import { RHFLabeledTextInput } from "@/components//rhf/inputs/text";
import { Button } from "@/components//ui/button";
import { Form } from "@/components/rhf/form";
import { Typography } from "@/components/typography";
import { loginFormSchema, signupFormSchema } from "@/schemas/auth";
import type { LoginFormData, SignupFormData } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";

export const AuthCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-neutral-500/50 px-20 py-12 rounded-xl flex flex-col gap-4 min-w-[480px]">
      {children}
    </div>
  );
};

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const login = await signIn("credentials", { ...data });
      if (login?.status !== 200) throw new Error(login?.error ?? "Something went wrong");
    } catch (e) {
      const error = e as Error; // FIXME: use a better type guard
      // eslint-disable-next-line no-console
      console.log("ERROR", error.message);
    }
  };

  return (
    <AuthCard>
      <Form className="flex flex-col gap-12 w-full relative" onSubmit={onSubmit} methods={methods}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 items-center">
            <label className="text-[40px] font-bold text-white" htmlFor="email">
              Email
            </label>
            <RHFLabeledTextInput name="email" placeholder="Enter your email" className="w-full" required />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <label className="text-[40px] font-bold text-white" htmlFor="email">
              Password
            </label>
            <RHFLabeledTextInput type="password" name="password" placeholder="Enter your password" className="w-full" required />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button variant="default" disabled={methods.formState.isSubmitting} type="submit" className="w-full rounded-md">
            Login
          </Button>
          <Typography.error className="text-l font-medium text-required/90">{error}</Typography.error>
        </div>
      </Form>
    </AuthCard>
  );
};

export const SignupForm = () => {
  const methods = useForm<SignupFormData>({
    resolver: zodResolver(signupFormSchema),
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: SignupFormData) => {
    const { email, password } = data;

    // OPTION 1: Using TRPC Client-Side Mutation
    // Keeps server-side and client-side logic separate,
    // Easier to manage client-side state updates and caching with TRPC.
    // Slightly more complex due to the need to handle TRPC hooks and context.
    // const createAdminMutation = trpc.admins.create.useMutation({
    //   onSuccess: async () => {
    //     await utils.admins.isExisting.invalidate();
    //     redirect("/auth?signup=success");
    //   },
    // });

    try {
      // await createAdminMutation.mutateAsync({ email, password });

      // OPTION 2: Using a Server Action
      // Directly utilizes server-side logic, and Keeps the form handling code relatively straightforward
      // BUT Mixes server-side logic with client-side component code
      // and Less flexible for client-side operations, such as caching or optimistic updates
      await signUpServerAction({ email, password });
    } catch (e) {
      const error = e as Error; // FIXME: use a better type guard
      if (error.message.includes("already exists")) setErrorMessage("Admin already exists");
      else if (error.message.includes("duplicate key")) setErrorMessage("This email is already used");
      else setErrorMessage("Something went wrong");
    }
  };
  return (
    <AuthCard>
      <Form className="flex flex-col gap-12 w-full relative" onSubmit={onSubmit} methods={methods}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 items-center">
            <label className="text-[40px] font-bold text-white" htmlFor="email">
              Email
            </label>
            <RHFLabeledTextInput name="email" placeholder="Enter your email" className="w-full" required />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <label className="text-[40px] font-bold text-white" htmlFor="email">
              Password
            </label>
            <RHFLabeledTextInput type="password" name="password" placeholder="Enter your password" className="w-full" required />
            <RHFLabeledTextInput type="password" name="confirmPassword" placeholder="Confirm your password" className="w-full" required />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button disabled={methods.formState.isSubmitting} type="submit" className="w-full rounded-md">
            Sign Up
          </Button>
          <Typography.error>{errorMessage}</Typography.error>
        </div>
      </Form>
    </AuthCard>
  );
};
