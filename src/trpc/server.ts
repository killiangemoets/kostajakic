import { createTRPCContext } from "@/server/api/context";
import { createCaller } from "@/server/api/root";
import { headers } from "next/headers";
import { cache } from "react";
import "server-only";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");

  return createTRPCContext({
    headers: heads,
  });
});

export const trpcServer = createCaller(createContext);
