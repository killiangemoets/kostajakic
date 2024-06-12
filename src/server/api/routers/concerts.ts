import { adminProcedure, publicProcedure, router } from "../trpc";
import type { Prisma } from "@/prisma/generated/client";
import { concertCursorSchema, concertFiltersSchema, createConcertSchema, updateConcertSchema } from "@/schemas/concerts";
import { prisma } from "@/server/db";
import type { ConcertFilters } from "@/types/concerts";
import { mergeDateTime } from "@/utils/datetime";
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
        id: z.string().cuid({ message: "Please provide a valid id" }),
      })
    )
    .query(async ({ input }) => {
      return await prisma.concert.findUnique({
        where: { id: input.id },
      });
    }),
  create: adminProcedure.input(createConcertSchema).mutation(async ({ input }) => {
    const dateTime = mergeDateTime(input.date, input.time);
    return await prisma.concert.create({
      data: {
        date: dateTime,
        location: input.location,
        title: input.title,
        description: input.description,
      },
    });
  }),
  update: adminProcedure.input(updateConcertSchema).mutation(async ({ input }) => {
    const dateTime = mergeDateTime(input.date, input.time);
    return await prisma.concert.update({
      where: { id: input.id },
      data: {
        date: dateTime,
        location: input.location,
        title: input.title,
        description: input.description,
      },
    });
  }),
});
