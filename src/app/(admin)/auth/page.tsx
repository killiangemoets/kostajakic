"use client";

import { LoginForm, SignupForm } from "@/components/backoffice/auth-forms";
import { trpc } from "@/trpc/react";
import { useSession } from "next-auth/react";
import { redirect, useSearchParams } from "next/navigation";
import { type ReactNode } from "react";

const Guard = ({ children }: { children: ReactNode }) => {
  const data = useSession();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/backoffice";

  if (data.status === "authenticated") redirect(callbackUrl);
  else if (data.status === "unauthenticated") return <>{children}</>;

  return null;
};

export default function Auth() {
  const isAdmingExisingQuery = trpc.admins.isExisting.useQuery();
  const isAdmingExising = isAdmingExisingQuery.data;

  const hasResult = !isAdmingExisingQuery.isLoading && !isAdmingExisingQuery.error && isAdmingExising !== undefined;

  return <Guard>{hasResult && (isAdmingExising ? <LoginForm /> : <SignupForm />)}</Guard>;
}
