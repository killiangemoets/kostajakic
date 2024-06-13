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

export const commonCOnceertSchema = z.object({
  location: z.string().trim().min(1, { message: "Location is required" }),
  title: z.string().trim().min(1, { message: "Title is required" }),
  description: z.string().trim().optional(),
});

export const createConcertSchema = commonCOnceertSchema.extend({
  date: z.date({ required_error: "Date is required" }),
  time: z.string({ required_error: "Time is required" }).trim().min(1, { message: "Time is required" }),
});

export const createConcertBESchema = commonCOnceertSchema.extend({
  date: z.date({ required_error: "Date is required" }),
});

export const idSchema = z.string().cuid({ message: "Please provide a valid id" });

export const updateConcertSchema = createConcertSchema.extend({
  id: idSchema,
});

export const updateConcertBESchema = createConcertBESchema.extend({
  id: idSchema,
});
