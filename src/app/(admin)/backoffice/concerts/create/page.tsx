"use client";

import { ConcertForm } from "@/components/concerts/concert-form";
import { createConcertSchema } from "@/schemas/concerts";
import { trpc } from "@/trpc/react";
import type { CreateConcert } from "@/types/concerts";
import { mergeDateTime } from "@/utils/datetime";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ConcertCreationForm = () => {
  const utils = trpc.useUtils();
  const router = useRouter();
  const methods = useForm<CreateConcert>({
    resolver: zodResolver(createConcertSchema),
    defaultValues: {
      timezone: "Europe/Brussels",
    },
  });

  const createConcertMutation = trpc.concerts.create.useMutation({
    onSuccess: async () => {
      utils.concerts.list.refetch();
      utils.concerts.infiniteList.refetch();
      toast.success("Concert created!", {
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

  const onSubmit = (data: CreateConcert) => {
    const { date, time, ...rest } = data;
    const dateTime = mergeDateTime(date, time);
    createConcertMutation.mutate({ ...rest, date: dateTime });
  };
  return <ConcertForm methods={methods} onSubmit={onSubmit} isLoading={createConcertMutation.isPending} />;
};

export default function BackofficeCreateConcert() {
  return <ConcertCreationForm />;
}
