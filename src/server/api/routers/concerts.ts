import { adminProcedure, publicProcedure, router } from "../trpc";
import { CONCERTS_INFINITE_SCROLL_LIMIT } from "@/constants/concerts";
import type { Prisma } from "@/prisma/generated/client";
import { concertCursorSchema, concertFiltersSchema, createConcertBESchema, idSchema, updateConcertBESchema } from "@/schemas/concerts";
import { prisma } from "@/server/db";
import type { ConcertFilters } from "@/types/concerts";
// import { revalidatePath } from "next/cache";
import { z } from "zod";

type FilterConcertsClause = {
  orderBy: (
    | {
        date: "asc" | "desc";
      }
    | {
        id: "desc";
      }
  )[];
  where: Prisma.ConcertWhereInput;
};

const getFilterConcertsClause = ({ filters, orderDates }: ConcertFilters): FilterConcertsClause => {
  const { minDate, maxDate } = filters ?? {};
  return {
    orderBy: [
      { date: orderDates ?? "asc" },
      {
        id: "desc",
      },
    ],
    where: {
      date: {
        ...(minDate && { gte: minDate }),
        ...(maxDate && { lt: maxDate }),
      },
    },
  };
};

export const concertsRouter = router({
  list: publicProcedure.input(concertFiltersSchema).query(async ({ input }) => {
    return await prisma.concert.findMany({
      ...getFilterConcertsClause(input),
    });
  }),
  infiniteList: publicProcedure
    .input(
      concertFiltersSchema.extend({
        limit: z.number().optional().default(CONCERTS_INFINITE_SCROLL_LIMIT),
        cursor: concertCursorSchema,
      })
    )
    .query(async ({ input }) => {
      const { limit, cursor, filters, orderDates } = input;

      const data = await prisma.concert.findMany({
        ...getFilterConcertsClause({ filters, orderDates }),
        take: limit + 1,
        cursor: cursor
          ? {
              date_id: cursor,
            }
          : undefined,
      });

      let nextCursor: typeof cursor | undefined;
      if (data.length > limit) {
        const nextItem = data.pop();
        if (nextItem != null) {
          nextCursor = { date: nextItem.date, id: nextItem.id };
        }
      }

      return { concerts: data, nextCursor };
    }),
  byId: publicProcedure
    .input(
      z.object({
        id: idSchema,
      })
    )
    .query(async ({ input }) => {
      return await prisma.concert.findUnique({
        where: { id: input.id },
      });
    }),
  create: adminProcedure.input(createConcertBESchema).mutation(async ({ input }) => {
    const createdConcert = await prisma.concert.create({
      data: input,
    });
    // revalidatePath("/concerts");
    return createdConcert;
  }),
  update: adminProcedure.input(updateConcertBESchema).mutation(async ({ input }) => {
    const { id, ...rest } = input;
    const updatedConcert = await prisma.concert.update({
      where: { id },
      data: rest,
    });
    // revalidatePath("/concerts");
    return updatedConcert;
  }),
  delete: adminProcedure.input(z.object({ id: idSchema })).mutation(async ({ input }) => {
    const deletedConcert = await prisma.concert.delete({
      where: { id: input.id },
    });
    // revalidatePath("/concerts");
    return deletedConcert;
  }),
});
