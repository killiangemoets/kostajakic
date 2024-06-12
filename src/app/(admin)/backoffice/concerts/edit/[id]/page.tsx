"use client";

import { ConcertForm } from "@/components/concerts/concert-form";
import { Typography } from "@/components/typography";
import type { Concert } from "@/prisma/generated/client";
import { updateConcertSchema } from "@/schemas/concerts";
import { trpc } from "@/trpc/react";
import type { UpdateConcert } from "@/types/concerts";
import { splitDateAndTime } from "@/utils/datetime";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ConcertEditForm = ({ concert }: { concert: Concert }) => {
  const { date, time } = useMemo(() => splitDateAndTime(concert.date), [concert.date]);
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
    updateConcertMutation.mutate(data);
  };
  return <ConcertForm methods={methods} onSubmit={onSubmit} isLoading={updateConcertMutation.isPending} />;
};

export default function BackofficeConcertsEdit() {
  const { id } = useParams<{ id: string }>();
  const concertsQuery = trpc.concerts.byId.useQuery({ id }, { refetchOnMount: false, refetchOnWindowFocus: false });
  if (concertsQuery.isLoading) return <Typography.body>Loading...</Typography.body>;
  if (concertsQuery.isError) return <Typography.error>Something went wrong, please try again!</Typography.error>;
  const concert = concertsQuery.data;
  if (!concert) return <Typography.error>No concert found</Typography.error>;
  return (
    <div className="w-full flex justify-center">
      <ConcertEditForm concert={concert} />
    </div>
  );
}