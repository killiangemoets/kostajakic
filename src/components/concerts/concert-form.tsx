import { Form } from "../rhf/form";
import { RHFLabeledCheckboxInput } from "../rhf/inputs/checkbox";
import { RHFLabeledDateSelectInput } from "../rhf/inputs/datepicker";
import { RHFLabeledDropdownSelectInput } from "../rhf/inputs/dropdown-select";
import { RHFLabeledTextInput } from "../rhf/inputs/text";
import { RHFLabeledTextareaInput } from "../rhf/inputs/textarea";
import { Button } from "../ui/button";
import { CONCERTS_TIME_OPTIONS } from "@/constants/concerts";
import { TIMEZONES } from "@/constants/datetime";
import type { CreateConcert, UpdateConcert } from "@/types/concerts";
import type { SubmitHandler, UseFormReturn } from "react-hook-form";

type ConcertFormProps<T extends CreateConcert | UpdateConcert> = {
  isLoading?: boolean;
  methods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
};

export const ConcertForm = <T extends CreateConcert | UpdateConcert>({ methods, onSubmit, isLoading }: ConcertFormProps<T>) => {
  return (
    <Form className="flex flex-col gap-6 w-[80%] relative" onSubmit={onSubmit} methods={methods}>
      <div className="flex gap-2">
        <RHFLabeledDateSelectInput label="Date" name="date" placeholder="Select the date" required />
        <RHFLabeledDropdownSelectInput label="Time" name="time" placeholder="Time" required options={CONCERTS_TIME_OPTIONS} />
        <RHFLabeledDropdownSelectInput
          label="Timezone"
          name="timezone"
          placeholder="Timezone"
          required
          options={TIMEZONES.map((timezone) => ({ label: timezone, value: timezone }))}
        />
      </div>

      <RHFLabeledTextInput label="Location" name="location" placeholder="Enter the location" className="w-full" required />
      <RHFLabeledTextInput label="Title" name="title" placeholder="Enter the title" className="w-full" required />
      <RHFLabeledTextareaInput label="Description" name="description" placeholder="Enter the description" className="w-full" />
      <div className="flex gap-4">
        <RHFLabeledTextInput label="Url" name="url" placeholder="Enter the url" className="w-full" containerClassName="flex-1" />
        <RHFLabeledCheckboxInput label="Tickets" name="soldout" containerClassName="gap-4" />
      </div>

      <div className="mt-6 flex items-center gap-8">
        <Button disabled={isLoading} variant="outline" className="w-[50%]" type="button" href="/backoffice/concerts">
          Cancel
        </Button>
        <Button disabled={isLoading} type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </Form>
  );
};
