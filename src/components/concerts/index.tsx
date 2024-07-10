import { PastConcertsSection, UpcomingConcertsSection } from "./concerts-list";
import { trpcServer } from "@/trpc/server";
import clsx from "clsx";

export const ConcertsSection = async ({ className, showActions }: { className?: string; showActions?: boolean }) => {
  const now = new Date();
  const upcomingConcerts = await trpcServer.concerts.list({ filters: { minDate: now }, orderDates: "asc" });
  const pastConcerts = await trpcServer.concerts.infiniteList({ filters: { maxDate: now }, orderDates: "desc" });
  return (
    <div className={clsx("flex flex-col gap-8 items-center", className)}>
      <UpcomingConcertsSection initialConcerts={upcomingConcerts} showActions={showActions} />
      <p className="text-heading-1 font-light sm:pr-[124px] font-din-pro">ф</p>
      <PastConcertsSection initialConcerts={pastConcerts.concerts} initialNextCursor={pastConcerts.nextCursor} showActions={showActions} />
    </div>
  );
};
