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

  const isAdmingExising = await trpcServer.admins.isExisting();

  return <>{isAdmingExising ? <LoginForm /> : <SignupForm />}</>;
}
