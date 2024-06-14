/* eslint-disable no-console */
import type { MultiOption } from "@/types/inputs";
import { format, parse, startOfDay } from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";

const ABITRATY_DATE = "2023-01-01";

function formatDateTime(dateTime: Date, timezone: string) {
  const utcDate = toZonedTime(dateTime, timezone);
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

const mergeDateTimeWithTimeZone = (date: Date, time: string, timezone: string) => {
  const dateString = format(date, "dd-MM-yyyy");
  const combinedDateTimeString = `${dateString}T${time}:00`;
  const parsedDateTime = parse(combinedDateTimeString, "dd-MM-yyyy'T'HH:mm:ss", new Date());
  const zonedDateTime = fromZonedTime(parsedDateTime, timezone);
  return zonedDateTime;
};

function splitDateAndTimeInTimezone(dateTime: Date, timezone: string) {
  const zonedDateTime = toZonedTime(dateTime, timezone);
  const date = startOfDay(zonedDateTime);
  const time = format(zonedDateTime, "HH:mm");
  return { date, time };
}

export { formatDateTime, generateTimeOptions, mergeDateTimeWithTimeZone, splitDateAndTimeInTimezone };
