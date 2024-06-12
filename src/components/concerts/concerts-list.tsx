"use client";

import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import type { Concert } from "@/prisma/generated/client";
import { trpc } from "@/trpc/react";
import type { ConcertCursor } from "@/types/concerts";
import { formatDateTime } from "@/utils/datetime";
import { Pencil, Trash } from "lucide-react";
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
      <Button variant="outline" className="py-6 px-4">
        More info
      </Button>
      <Button href={`/backoffice/concerts/edit/${concert.id}`} variant="ghost" size="icon">
        <Pencil className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <Trash className="w-5 h-5" />
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
      {concerts.length === 0 && (
        <Typography.body className="my-4 text-center text-2xl text-primary-200 pr-[124px]">No concerts</Typography.body>
      )}
    </div>
  );
};

const today = new Date();
export const UpcomingConcertsSection = ({ initialConcerts }: { initialConcerts: Concert[] }) => {
  const upcomingConcertsQuery = trpc.concerts.list.useQuery(
    { filters: { minDate: today }, orderDates: "asc" },
    { initialData: initialConcerts, refetchOnMount: false, refetchOnWindowFocus: false }
  );

  if (upcomingConcertsQuery.isLoading) return <Typography.body>Loading...</Typography.body>;
  if (upcomingConcertsQuery.isError) return <Typography.error>Something went wrong, please try again!</Typography.error>;
  return <ConcertsList title="Upcoming Concerts" concerts={upcomingConcertsQuery.data} />;
};

export const PastConcertsSection = ({
  initialConcerts,
  initialNextCursor,
}: {
  initialConcerts: Concert[];
  initialNextCursor: ConcertCursor;
}) => {
  const pastConcertsQuery = trpc.concerts.infiniteList.useInfiniteQuery(
    { filters: { maxDate: today }, orderDates: "desc" },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      initialData: {
        pages: [
          {
            concerts: initialConcerts,
            nextCursor: initialNextCursor,
          },
        ],
        pageParams: [undefined],
      },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const concerts = pastConcertsQuery.data?.pages.flatMap((page) => page.concerts) ?? [];

  if (pastConcertsQuery.isLoading) return <Typography.body>Loading...</Typography.body>;
  if (pastConcertsQuery.isError) return <Typography.error>Something went wrong, please try again!</Typography.error>;

  return (
    <InfiniteScroll
      dataLength={concerts.length}
      next={pastConcertsQuery.fetchNextPage}
      hasMore={pastConcertsQuery.hasNextPage}
      loader={<>===================== LOOOOADDDIIIIIINNNGGGG =========================</>}
    >
      <ConcertsList title="Past Concerts" concerts={concerts} />
    </InfiniteScroll>
  );
};
