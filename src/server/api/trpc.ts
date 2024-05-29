import type { TRPCContext } from "./context";
import { getAdminById } from "./utils/admins";
import { TRPCError, initTRPC } from "@trpc/server";
import superjson from "superjson";

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
export const t = initTRPC.context<TRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const isAuthenticated = t.middleware(async ({ ctx, next }) => {
  if (!ctx.session?.user) throw new TRPCError({ code: "UNAUTHORIZED" });
  else {
    const admin = await getAdminById(ctx.session.user.id);
    if (!admin) throw new TRPCError({ code: "UNAUTHORIZED" });
    else return next({ ctx: { ...ctx, session: ctx.session } });
  }
});

/**
 * Create a server-side caller.
 *
 * @see https://trpc.io/docs/server/server-side-calls
 */
export const createCallerFactory = t.createCallerFactory;

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
export const adminProcedure = t.procedure.use(isAuthenticated);
