import { publicProcedure, router } from "../trpc";
import type { Prisma } from "@/prisma/generated/client";
import { concertCursorSchema, concertFiltersSchema } from "@/schemas/concerts";
import { prisma } from "@/server/db";
import type { ConcertFilters } from "@/types/concerts";
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
        ...(maxDate && { lte: maxDate }),
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
        limit: z.number().optional(),
        cursor: concertCursorSchema,
      })
    )
    .query(async ({ input }) => {
      const { limit = 20, cursor, filters, orderDates } = input;

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
        id: z.string().uuid(),
      })
    )
    .query(async ({ input }) => {
      return await prisma.concert.findUnique({
        where: { id: input.id },
      });
    }),
});
