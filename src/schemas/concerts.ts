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

export const createConcertSchema = z.object({
  date: z.date({ required_error: "Date is required" }),
  time: z.string({ required_error: "Time is required" }).trim().min(1, { message: "Time is required" }),
  location: z.string().trim().min(1, { message: "Location is required" }),
  title: z.string().trim().min(1, { message: "Title is required" }),
  description: z.string().trim().optional(),
});

export const updateConcertSchema = createConcertSchema.extend({
  id: z.string().cuid({ message: "Please provicde a valid id" }),
});
