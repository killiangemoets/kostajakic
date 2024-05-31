import { publicProcedure, router } from "../trpc";
import type { Prisma } from "@/prisma/generated/client";
import { prisma } from "@/server/db";
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

const getFilterConcertsClause = ({
  minDate,
  maxDate,
  orderDates,
}: {
  minDate?: Date;
  maxDate?: Date;
  orderDates?: "asc" | "desc";
}): FilterConcertsClause => {
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
  list: publicProcedure
    .input(
      z.object({
        orderDates: z.enum(["asc", "desc"]).optional(),
        filters: z
          .object({
            minDate: z.date().optional(),
            maxDate: z.date().optional(),
          })
          .optional(),
      })
    )
    .query(async ({ input }) => {
      const { orderDates } = input;
      const { minDate, maxDate } = input.filters ?? {};

      return await prisma.concert.findMany({
        ...getFilterConcertsClause({ minDate, maxDate, orderDates }),
      });
    }),

  infiniteList: publicProcedure
    .input(
      z.object({
        limit: z.number().optional(),
        cursor: z.object({ date: z.date(), id: z.string() }).optional(),
        orderDates: z.enum(["asc", "desc"]).optional(),
        filters: z
          .object({
            minDate: z.date().optional(),
            maxDate: z.date().optional(),
          })
          .optional(),
      })
    )
    .query(async ({ input }) => {
      const { limit = 20, cursor, orderDates } = input;
      const { minDate, maxDate } = input.filters ?? {};

      const data = await prisma.concert.findMany({
        ...getFilterConcertsClause({ minDate, maxDate, orderDates }),
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
