"use server";

import { trpcServer } from "@/trpc/server";
import { redirect } from "next/navigation";

export const signUpServerAction = async (data: { email: string; password: string }) => {
  await trpcServer.admins.create(data);
  redirect("/auth?signup=success");
};
