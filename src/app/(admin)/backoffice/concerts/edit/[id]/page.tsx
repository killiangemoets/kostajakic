"use client";

import { Form } from "@/components/rhf/form";
import { RHFLabeledDateSelectInput } from "@/components/rhf/inputs/datepicker";
import { RHFLabeledDropdownSelectInput } from "@/components/rhf/inputs/dropdown-select";
import { RHFLabeledTextInput } from "@/components/rhf/inputs/text";
import { RHFLabeledTextareaInput } from "@/components/rhf/inputs/textarea";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { CONERTS_TIME_OPTIONS } from "@/constants/concerts";
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
  return (
    <Form className="flex flex-col gap-6 w-[80%] relative" onSubmit={onSubmit} methods={methods}>
      <input type="hidden" {...methods.register("id", { value: concert.id })} />
      <div className="flex  gap-2">
        <RHFLabeledDateSelectInput label="Date" name="date" placeholder="Select the date" className="" required />
        <RHFLabeledDropdownSelectInput label="Time" name="time" placeholder="Time" required options={CONERTS_TIME_OPTIONS} />
      </div>

      <RHFLabeledTextInput label="Location" name="location" placeholder="Enter the location" className="w-full" required />
      <RHFLabeledTextInput label="Title" name="title" placeholder="Enter the title" className="w-full" required />
      <RHFLabeledTextareaInput label="Description" name="description" placeholder="Enter the description" className="w-full" />

      <Button disabled={updateConcertMutation.isPending} type="submit" className="w-full">
        Update Concert
      </Button>
    </Form>
  );
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
