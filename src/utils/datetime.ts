import { format } from "date-fns";

function formatDateTime(dateTime: Date) {
  return format(dateTime, "EEE do 'of' MMMM yyyy, HH:mm");
}

export { formatDateTime };
