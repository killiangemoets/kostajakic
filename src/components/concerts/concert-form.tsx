import { Form } from "../rhf/form";
import { RHFLabeledDateSelectInput } from "../rhf/inputs/datepicker";
import { RHFLabeledDropdownSelectInput } from "../rhf/inputs/dropdown-select";
import { RHFLabeledTextInput } from "../rhf/inputs/text";
import { RHFLabeledTextareaInput } from "../rhf/inputs/textarea";
import { CONCERTS_TIME_OPTIONS } from "@/constants/concerts";
import type { CreateConcert, UpdateConcert } from "@/types/concerts";
import { Button } from "react-day-picker";
import type { SubmitHandler, UseFormReturn } from "react-hook-form";

type ConcertFormProps<T extends CreateConcert | UpdateConcert> = {
  isLoading?: boolean;
  methods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
};

export const ConcertForm = <T extends CreateConcert | UpdateConcert>({ methods, onSubmit, isLoading }: ConcertFormProps<T>) => {
  return (
    <Form className="flex flex-col gap-6 w-[80%] relative" onSubmit={onSubmit} methods={methods}>
      {/* <input type="hidden" {...methods.register("id", { value: concert.id })} /> */}
      <div className="flex  gap-2">
        <RHFLabeledDateSelectInput label="Date" name="date" placeholder="Select the date" className="" required />
        <RHFLabeledDropdownSelectInput label="Time" name="time" placeholder="Time" required options={CONCERTS_TIME_OPTIONS} />
      </div>

      <RHFLabeledTextInput label="Location" name="location" placeholder="Enter the location" className="w-full" required />
      <RHFLabeledTextInput label="Title" name="title" placeholder="Enter the title" className="w-full" required />
      <RHFLabeledTextareaInput label="Description" name="description" placeholder="Enter the description" className="w-full" />

      <Button disabled={isLoading} type="submit" className="w-full">
        Create concert
      </Button>
    </Form>
  );
};