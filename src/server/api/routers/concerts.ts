import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const usersRouter = router({
  list: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.concert.findMany();
  }),
  byId: publicProcedure
    .input(
      z.object({
        id: z.string().uuid(),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.prisma.concert.findUnique({
        where: { id: input.id },
      });
    }),
});
