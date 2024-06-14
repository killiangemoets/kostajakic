"use client";

import { ConcertForm } from "@/components/concerts/concert-form";
import { Typography } from "@/components/typography";
import Spinner from "@/components/ui/spinner";
import type { Concert } from "@/prisma/generated/client";
import { updateConcertSchema } from "@/schemas/concerts";
import { trpc } from "@/trpc/react";
import type { UpdateConcert } from "@/types/concerts";
import { mergeDateTimeWithTimeZone, splitDateAndTimeInTimezone } from "@/utils/datetime";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ConcertEditForm = ({ concert }: { concert: Concert }) => {
  const { date, time } = useMemo(() => splitDateAndTimeInTimezone(concert.date, concert.timezone), [concert.date, concert.timezone]);
  const utils = trpc.useUtils();
  const router = useRouter();
  const methods = useForm<UpdateConcert>({
    resolver: zodResolver(updateConcertSchema),
    defaultValues: {
      id: concert.id,
      date: date,
      time: time,
      location: concert.location,
      title: concert.title,
      description: concert.description ?? undefined,
      timezone: concert.timezone,
    },
  });

  const updateConcertMutation = trpc.concerts.update.useMutation({
    onSuccess: async () => {
      utils.concerts.list.refetch();
      utils.concerts.infiniteList.refetch();
      utils.concerts.byId.refetch({ id: concert.id });
      toast.success("Concert updated!", {
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

  const onSubmit = (data: UpdateConcert) => {
    const { date, time, ...rest } = data;
    const dateTime = mergeDateTimeWithTimeZone(date, time, rest.timezone);
    updateConcertMutation.mutate({ ...rest, date: dateTime });
  };
  return <ConcertForm methods={methods} onSubmit={onSubmit} isLoading={updateConcertMutation.isPending} />;
};

export default function BackofficeEditConcert({ params }: { params: { id: string } }) {
  const concertsQuery = trpc.concerts.byId.useQuery({ id: params.id }, { refetchOnMount: false, refetchOnWindowFocus: false });

  if (concertsQuery.isLoading) return <Spinner />;
  if (concertsQuery.isError) return <Typography.error className="py-12">Something went wrong, please try again!</Typography.error>;

  const concert = concertsQuery.data;
  if (!concert) return <Typography.error>No concert found</Typography.error>;

  return <ConcertEditForm concert={concert} />;
}
