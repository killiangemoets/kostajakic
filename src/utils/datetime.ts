import type { MultiOption } from "@/types/inputs";
import { format, parseISO, startOfDay } from "date-fns";
import { toZonedTime } from "date-fns-tz";

const ABITRATY_DATE = "2023-01-01";

const getCurrentDateTimeInUTC = () => {
  const today = new Date();
  const dateString = format(today, "yyyy-MM-dd");
  const timeString = format(today, "HH:mm");
  const combinedDateTimeToISOString = `${dateString}T${timeString}.000Z`;
  const dateToISO = parseISO(combinedDateTimeToISOString);
  return dateToISO;
};

function formatDateTime(dateTime: Date) {
  const utcDate = toZonedTime(dateTime, "UTC");
  return format(utcDate, "EEE do 'of' MMMM yyyy, HH:mm");
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
  const dateString = format(date, "yyyy-MM-dd");
  const combinedDateTimeToISOString = `${dateString}T${time}:00.000Z`;
  return parseISO(combinedDateTimeToISOString);
};

function splitDateAndTime(dateTime: Date): { date: Date; time: string } {
  const utcDate = toZonedTime(dateTime, "UTC");
  const date = startOfDay(utcDate);
  const time = format(utcDate, "HH:mm");
  return { date, time };
}

export { getCurrentDateTimeInUTC, formatDateTime, generateTimeOptions, mergeDateTime, splitDateAndTime };
