import { LoginForm, SignupForm } from "@/components/backoffice/auth-forms";
import { getServerAuthSession } from "@/server/auth";
import { trpcServer } from "@/trpc/server";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: {
    callbackUrl?: string;
  };
}

export default async function Auth({ searchParams }: PageProps) {
  const session = await getServerAuthSession();
  const callbackUrl = searchParams.callbackUrl || "/backoffice";
  if (!!session) redirect(callbackUrl);

  // OPTION 1: Direct Database Query
  // Slighly faster but less consistent and reduces code reusability
  // const isAdmingExising = await isAdminExisting();

  // OPTION 2: Using TRPC Endpoint
  // More concistent and keeps business logic encapsulated within the TRPC layer, promoting cleaner separation of concerns.
  const isAdmingExising = await trpcServer.admins.isExisting();

  return <>{isAdmingExising ? <LoginForm /> : <SignupForm />}</>;
}
