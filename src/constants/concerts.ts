import type { MultiOption } from "@/types/inputs";
import { generateTimeOptions } from "@/utils/datetime";

export const CONCERTS_INFINITE_SCROLL_LIMIT = 20;

export const SLOT_INTERVAL = 15;
export const CONCERTS_TIME_SLOT = {
  FROM: "00:00",
  TO: "23:45",
};

export const CONCERTS_TIME_OPTIONS: MultiOption<string>[] = generateTimeOptions(
  CONCERTS_TIME_SLOT.FROM,
  CONCERTS_TIME_SLOT.TO,
  SLOT_INTERVAL
);
