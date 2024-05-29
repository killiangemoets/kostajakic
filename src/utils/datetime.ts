import { format, parseISO } from "date-fns";

function formatDateTime(dateString: string, timeString: string) {
  // Combine date and time strings into an ISO 8601 string
  const dateTimeString = `${dateString}T${timeString}:00`;

  // Parse the ISO string into a Date object
  const date = parseISO(dateTimeString);

  // Format the date and time
  const formattedDateTime = format(date, "EEE do 'of' MMMM yyyy, HH:mm");

  return formattedDateTime;
}

export { formatDateTime };
