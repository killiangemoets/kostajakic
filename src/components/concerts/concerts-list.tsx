"use client";

import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import type { Concert } from "@/prisma/generated/client";
import { trpc } from "@/trpc/react";
import { formatDateTime } from "@/utils/datetime";
import InfiniteScroll from "react-infinite-scroll-component";

const ConcertCard = ({ concert }: { concert: Concert }) => {
  return (
    <li className="flex gap-8 items-center">
      <div className="border-t border-b flex flex-col gap-2 w-full">
        <div className="flex justify-between border-b">
          <Typography.body>{formatDateTime(concert.date)}</Typography.body>
          <Typography.body>{concert.location}</Typography.body>
        </div>
        <div>
          <Typography.h4>{concert.title}</Typography.h4>
          <Typography.body>{concert.description}</Typography.body>
        </div>
      </div>
      <Button variant="outline" size="lg" className="">
        More info
      </Button>
    </li>
  );
};

const ConcertsList = ({ title, concerts }: { title: string; concerts: Concert[] }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Typography.h2>{title}</Typography.h2>
      <ul className="flex flex-col gap-8">
        {concerts.map((concert) => (
          <ConcertCard key={concert.id} concert={concert} />
        ))}
      </ul>
    </div>
  );
};

const today = new Date();
export const UpcomingConcertsSection = () => {
  const upcomingConcertsQuery = trpc.concerts.list.useQuery({ filters: { minDate: today }, orderDates: "asc" });

  if (upcomingConcertsQuery.isLoading) return <>Loading...</>;
  if (upcomingConcertsQuery.isError) return <h1>Error...</h1>;
  return <ConcertsList title="Upcoming Concerts" concerts={upcomingConcertsQuery.data ?? []} />;
};

export const PastConcertsSection = () => {
  const pastConcertsQuery = trpc.concerts.infiniteList.useInfiniteQuery(
    { filters: { maxDate: today }, orderDates: "desc" },
    { getNextPageParam: (lastPage) => lastPage.nextCursor }
  );
  const concerts = pastConcertsQuery.data?.pages.flatMap((page) => page.concerts) ?? [];

  if (pastConcertsQuery.isLoading) return <>Loading...</>;
  if (pastConcertsQuery.isError) return <h1>Error...</h1>;

  if (concerts.length === 0) {
    return <h2 className="my-4 text-center text-2xl text-gray-500">No Past Concerts</h2>;
  }
  return (
    <InfiniteScroll
      dataLength={concerts.length}
      next={pastConcertsQuery.fetchNextPage}
      hasMore={pastConcertsQuery.hasNextPage}
      loader={<>Loading...</>}
    >
      <ConcertsList title="Past Concerts" concerts={concerts} />;
    </InfiniteScroll>
  );
};
