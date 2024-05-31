import { PastConcertsSection, UpcomingConcertsSection } from "./concerts-list";
// import { trpcServer } from "@/trpc/server";
import clsx from "clsx";

// export const UpcomingConcertsSection = async () => {
//   const upcomingConcerts = await trpcServer.concerts.list({ filters: { minDate: new Date() }, orderDates: "asc" });
//   return <ConcertsList title="Upcoming Concerts" concerts={upcomingConcerts ?? []} />;
// };

export const ConcertsSection = async ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex flex-col gap-8 items-center", className)}>
      <UpcomingConcertsSection />
      <p className="text-heading-1 font-light pr-[124px]">ф</p>
      <PastConcertsSection />
    </div>
  );
};
