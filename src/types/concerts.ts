import type { concertCursorSchema, concertFiltersSchema, createConcertSchema, updateConcertSchema } from "@/schemas/concerts";
import type { z } from "zod";

export type ConcertCursor = z.infer<typeof concertCursorSchema>;
export type ConcertFilters = z.infer<typeof concertFiltersSchema>;

export type CreateConcert = z.infer<typeof createConcertSchema>;
export type UpdateConcert = z.infer<typeof updateConcertSchema>;
