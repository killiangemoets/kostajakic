import { publicProcedure, router } from "../trpc";
import { prisma } from "@/server/db";
import { z } from "zod";

export const usersRouter = router({
  list: publicProcedure.query(async () => {
    return await prisma.concert.findMany();
  }),
  byId: publicProcedure
    .input(
      z.object({
        id: z.string().uuid(),
      })
    )
    .query(async ({ input }) => {
      return await prisma.concert.findUnique({
        where: { id: input.id },
      });
    }),
});
