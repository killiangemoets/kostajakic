"use client";

import { Form } from "@/components/rhf/form";
import { RHFLabeledDateSelectInput } from "@/components/rhf/inputs/datepicker";
import { RHFLabeledDropdownSelectInput } from "@/components/rhf/inputs/dropdown-select";
import { RHFLabeledTextInput } from "@/components/rhf/inputs/text";
import { RHFLabeledTextareaInput } from "@/components/rhf/inputs/textarea";
import { Button } from "@/components/ui/button";
import { CONERTS_TIME_OPTIONS } from "@/constants/concerts";
import { createConcertSchema } from "@/schemas/concerts";
import { trpc } from "@/trpc/react";
import type { CreateConcert } from "@/types/concerts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ConcertCreationForm = () => {
  const utils = trpc.useUtils();
  const router = useRouter();
  const methods = useForm<CreateConcert>({
    resolver: zodResolver(createConcertSchema),
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
    // eslint-disable-next-line no-console
    console.log("DATA", data);
    createConcertMutation.mutate(data);
  };
  return (
    <Form className="flex flex-col gap-6 w-[80%] relative" onSubmit={onSubmit} methods={methods}>
      <div className="flex  gap-2">
        <RHFLabeledDateSelectInput label="Date" name="date" placeholder="Select the date" className="" required />
        <RHFLabeledDropdownSelectInput label="Time" name="time" placeholder="Time" required options={CONERTS_TIME_OPTIONS} />
      </div>

      <RHFLabeledTextInput label="Location" name="location" placeholder="Enter the location" className="w-full" required />
      <RHFLabeledTextInput label="Title" name="title" placeholder="Enter the title" className="w-full" required />
      <RHFLabeledTextareaInput label="Description" name="description" placeholder="Enter the description" className="w-full" />

      <Button disabled={createConcertMutation.isPending} type="submit" className="w-full">
        Create concert
      </Button>
    </Form>
  );
};

export default function BackofficeConcertsCreate() {
  return (
    <div className="w-full flex justify-center">
      <ConcertCreationForm />
    </div>
  );
}
