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
  date: z.date({ required_error: "La date est requise" }),
  time: z.string(),
  location: z.string().trim().min(1, { message: "La location est requise" }),
  title: z.string().trim().min(1, { message: "Le titre est requis" }),
  description: z.string().trim().optional(),
});
