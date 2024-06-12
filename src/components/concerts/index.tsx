import { PastConcertsSection, UpcomingConcertsSection } from "./concerts-list";
import { trpcServer } from "@/trpc/server";
import clsx from "clsx";

export const ConcertsSection = async ({ className }: { className?: string }) => {
  const upcomingConcerts = await trpcServer.concerts.list({ filters: { minDate: new Date() }, orderDates: "asc" });
  const pastConcerts = await trpcServer.concerts.infiniteList({ filters: { maxDate: new Date() }, orderDates: "desc" });
  return (
    <div className={clsx("flex flex-col gap-8 items-center", className)}>
      <UpcomingConcertsSection initialConcerts={upcomingConcerts} />
      <p className="text-heading-1 font-light pr-[124px]">ф</p>
      <PastConcertsSection initialConcerts={pastConcerts.concerts} initialNextCursor={pastConcerts.nextCursor} />
    </div>
  );
};
