import { prisma } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";


export const createTRPCContext = async (opts: { headers: Headers }) => {
  const session = await getServerAuthSession();

  return {
    prisma,
    session,
    ...opts,
  };
};


export type TRPCContext = Awaited<ReturnType<(typeof createTRPCContext)>>;
