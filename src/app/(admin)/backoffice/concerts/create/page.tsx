"use client";

import { Form } from "@/components/rhf/form";
import { RHFLabeledDateSelectInput } from "@/components/rhf/inputs/datepicker";
import { RHFLabeledTextInput } from "@/components/rhf/inputs/text";
import { RHFLabeledTextareaInput } from "@/components/rhf/inputs/textarea";
import { Button } from "@/components/ui/button";
import { createConcertSchema } from "@/schemas/concerts";
import type { CreateConcert } from "@/types/concerts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const ConcertCreationForm = () => {
  const methods = useForm<CreateConcert>({
    resolver: zodResolver(createConcertSchema),
  });

  const onSubmit = async (data: CreateConcert) => {
    // eslint-disable-next-line no-console
    console.log("DATA", data);
  };
  return (
    <Form className="flex flex-col gap-12 w-full relative" onSubmit={onSubmit} methods={methods}>
      <RHFLabeledDateSelectInput name="date" placeholder="Select the date" className="w-full" required />
      <RHFLabeledTextInput name="location" placeholder="Enter the location" className="w-full" required />
      <RHFLabeledTextInput name="title" placeholder="Enter the title" className="w-full" required />
      <RHFLabeledTextareaInput name="description" placeholder="Enter the description" className="w-full" required />
      <Button type="submit" className="w-full">
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
