import type { MultiOption } from "@/types/inputs";
import { format, setHours, setMinutes } from "date-fns";

const ABITRATY_DATE = "2023-01-01";

function formatDateTime(dateTime: Date) {
  return format(dateTime, "EEE do 'of' MMMM yyyy, HH:mm");
}

const generateTimeOptions = (start: string, end: string, gap: number) => {
  const timeOptions: MultiOption<string>[] = [];
  const startTime = new Date(`${ABITRATY_DATE}T${start}`);
  const endTime = new Date(`${ABITRATY_DATE}T${end}`);

  while (startTime <= endTime) {
    const time = format(startTime, "HH:mm");
    timeOptions.push({
      value: time,
      label: time,
    });
    startTime.setMinutes(startTime.getMinutes() + gap);
  }

  return timeOptions;
};

const mergeDateTime = (date: Date, time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const dateWithHours = setHours(date, hours);
  const dateWithMinutes = setMinutes(dateWithHours, minutes);
  return dateWithMinutes;
};

export { formatDateTime, generateTimeOptions, mergeDateTime };
