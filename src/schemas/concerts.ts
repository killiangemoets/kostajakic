import { z } from "zod";

export const concertCursorSchema = z.object({ date: z.date(), id: z.string() }).optional();

export const concertFiltersSchema = z.object({
  orderDates: z.enum(["asc", "desc"]).optional(),
  filters: z
    .object({
      minDate: z.date().optional(),
      maxDate: z.date().optional(),
    })
    .optional(),
});
