import { IMAGES_INFINITE_SCROLL_LIMIT } from "../../../constants/images";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/server/db";
import { z } from "zod";

export const imagesCursorSchema = z.object({ name: z.string(), id: z.string() }).optional();

export const imagesRouter = router({
  list: publicProcedure.query(async () => {
    return await prisma.image.findMany({
      orderBy: {
        name: "asc",
      },
    });
  }),
  infiniteList: publicProcedure
    .input(
      z.object({
        limit: z.number().optional().default(IMAGES_INFINITE_SCROLL_LIMIT),
        cursor: imagesCursorSchema,
      })
    )
    .query(async ({ input }) => {
      const { limit, cursor } = input;

      const data = await prisma.image.findMany({
        orderBy: {
          name: "asc",
        },
        take: limit + 1,
        cursor: cursor
          ? {
              name_id: cursor,
            }
          : undefined,
      });

      let nextCursor: typeof cursor | undefined;
      if (data.length > limit) {
        const nextItem = data.pop();
        if (nextItem != null) {
          nextCursor = { name: nextItem.name, id: nextItem.id };
        }
      }

      return { images: data, nextCursor };
    }),
});
