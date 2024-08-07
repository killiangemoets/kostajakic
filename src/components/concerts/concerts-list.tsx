"use client";

import Spinner from "../ui/spinner";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import type { Concert } from "@/prisma/generated/client";
import { trpc } from "@/trpc/react";
import type { ConcertCursor } from "@/types/concerts";
import { formatDateTime } from "@/utils/datetime";
import { cn } from "@/utils/tailwind";
import { Pencil, Trash2 as Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import InfiniteScroll from "react-infinite-scroll-component";

const ConcertActionButtons = ({ concertId }: { concertId: string }) => {
  const utils = trpc.useUtils();
  const router = useRouter();
  const deleteConcertMutation = trpc.concerts.delete.useMutation({
    onSuccess: async () => {
      utils.concerts.list.refetch();
      utils.concerts.infiniteList.refetch();
      toast.success("Concert deleted!", {
        duration: 5000,
        style: {
          fontWeight: 600,
        },
      });
      router.push("/backoffice/concerts");
    },
    onError: (error) => {
      console.error(error.message);
      toast.error("Something went wrong. Please try again!", {
        duration: 5000,
        style: {
          fontWeight: 600,
        },
      });
    },
  });

  const deleteConcert = () => {
    deleteConcertMutation.mutate({ id: concertId });
  };
  return (
    <div className="flex items-center gap-2">
      <Button href={`/backoffice/concerts/edit/${concertId}`} variant="ghost" size="icon">
        <Pencil className="w-5 h-5" />
      </Button>
      <Button
        disabled={deleteConcertMutation.isPending}
        onClick={() => {
          deleteConcert();
        }}
        variant="ghost"
        size="icon"
      >
        <Trash className="w-5 h-5" />
      </Button>
    </div>
  );
};

const ConcertCard = ({ concert, showActions = false }: { concert: Concert; showActions?: boolean }) => {
  return (
    <li className="flex gap-3 sm:gap-8 items-center flex-col lg:flex-row">
      <div className="flex gap-3 sm:gap-8 items-center flex-col sm:flex-row w-full">
        <div className="w-full border-t border-b flex flex-col gap-2 flex-1">
          <div className="flex justify-between border-b">
            <Typography.body className="font-medium">{formatDateTime(concert.date, concert.timezone)}</Typography.body>
            <Typography.body className="font-medium">{concert.location}</Typography.body>
          </div>
          <div>
            <Typography.h4>{concert.title}</Typography.h4>
            <Typography.body className="italic text-base">
              {concert.description?.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Typography.body>
          </div>
        </div>
        <div className="ml-auto w-[110px]">
          {!!concert?.url && (
            <Button
              variant="outline"
              target="_blank"
              className={cn("h-9 px-2 sm:py-6 sm:px-4 w-full")}
              {...(!!concert?.url && { href: concert.url })}
            >
              {concert.soldout ? "Soldout" : "More info"}
              <span className="sr-only">tickets available on {concert.url}</span>
            </Button>
          )}
        </div>
      </div>

      {showActions && <ConcertActionButtons concertId={concert.id} />}
    </li>
  );
};

const ConcertsList = ({ title, concerts, showActions }: { title: string; concerts: Concert[]; showActions?: boolean }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Typography.h3>{title}</Typography.h3>
      <ul className="flex flex-col gap-8">
        {concerts.map((concert) => (
          <ConcertCard key={concert.id} concert={concert} showActions={showActions} />
        ))}
      </ul>
      {concerts.length === 0 && (
        <Typography.body className="my-4 text-center text-2xl text-primary-200 sm:pr-[124px]">No concerts</Typography.body>
      )}
    </div>
  );
};
const now = new Date();

export const UpcomingConcertsSection = ({ initialConcerts, showActions }: { initialConcerts: Concert[]; showActions?: boolean }) => {
  const upcomingConcertsQuery = trpc.concerts.list.useQuery(
    { filters: { minDate: now }, orderDates: "asc" },
    {
      initialData: initialConcerts,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  if (upcomingConcertsQuery.isLoading) return <Spinner className="sm:pr-[124px]" />;
  if (upcomingConcertsQuery.isError)
    return <Typography.error className="sm:pr-[124px] py-6">Something went wrong, please try again!</Typography.error>;

  return <ConcertsList title="Upcoming" concerts={upcomingConcertsQuery.data} showActions={showActions} />;
};

export const PastConcertsSection = ({
  initialConcerts,
  initialNextCursor,
  showActions,
}: {
  initialConcerts: Concert[];
  initialNextCursor: ConcertCursor;
  showActions?: boolean;
}) => {
  const pastConcertsQuery = trpc.concerts.infiniteList.useInfiniteQuery(
    { filters: { maxDate: now }, orderDates: "desc" },
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

  if (pastConcertsQuery.isLoading) return <Spinner className="sm:pr-[124px]" />;
  if (pastConcertsQuery.isError)
    return <Typography.error className="sm:pr-[124px] py-6">Something went wrong, please try again!</Typography.error>;

  return (
    <InfiniteScroll
      dataLength={concerts.length}
      next={pastConcertsQuery.fetchNextPage}
      hasMore={pastConcertsQuery.hasNextPage}
      loader={<Spinner className="sm:pr-[124px]" />}
    >
      <ConcertsList title="Previous" concerts={concerts} showActions={showActions} />
    </InfiniteScroll>
  );
};
