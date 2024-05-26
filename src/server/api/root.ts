import { createCallerFactory, router } from "./trpc";
import { usersRouter } from "./routers/users";

export const appRouter = router({
  users: usersRouter,
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