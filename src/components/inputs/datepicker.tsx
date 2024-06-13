"use client";

import { InputContainer } from "./input-container";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover } from "@/components/ui/popover";
import type { DatePickerDefaultProps, InputProps, LabeledInputProps } from "@/types/inputs";
import { cn } from "@/utils/tailwind";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import type { FC } from "react";

export type DatePickerInputProps = DatePickerDefaultProps & InputProps;

export const DatePickerInput: FC<DatePickerInputProps> = ({ name, placeholder, value, onChange, isError, readOnly, className }) => {
  return (
    <Popover.Root>
      <Popover.Trigger disabled={readOnly} asChild name={name} className={className}>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] rounded-md focus:outline-none py-2.5 text-primary justify-start text-left",
            readOnly ? "rounded-lg bg-transparent border-none" : "bg-primary-700/70 border-[0.5px] px-5",
            !value && "text-primary/80",
            !readOnly && isError ? "border-destructive  border focus:border-destructive hover:border-destructive" : "border-neutral-300"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>{placeholder || "Pick a date"}</span>}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="">
        <Calendar mode="single" selected={value} onSelect={onChange} initialFocus />
      </Popover.Content>
    </Popover.Root>
  );
};

type LabeledDatePickerInputProps = DatePickerInputProps & LabeledInputProps;

export const LabeledDatePickerInput: React.FC<LabeledDatePickerInputProps> = ({
  label,
  name,
  required,
  containerClassName,
  error,
  ...props
}) => {
  return (
    <InputContainer name={name} label={label} required={required} error={error} className={containerClassName}>
      <DatePickerInput name={name} isError={Boolean(error)} {...props} />
    </InputContainer>
  );
};
