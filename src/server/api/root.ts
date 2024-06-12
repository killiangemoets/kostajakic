import { adminsRouter } from "./routers/admins";
import { concertsRouter } from "./routers/concerts";
import { createCallerFactory, router } from "./trpc";

export const appRouter = router({
  admins: adminsRouter,
  concerts: concertsRouter,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
