import { InputContainer } from "./input-container";
import { Select } from "@/components/ui/select";
import type { LabeledInputProps, MultiOption } from "@/types/inputs";
import { cn } from "@/utils/tailwind";
import type { SelectProps } from "@radix-ui/react-select";
import * as React from "react";

export type DropdownSelectInputProps<T extends string> = SelectProps & {
  items: MultiOption<T>[];
  placeholder?: string;
  isError?: boolean;
  readOnly?: boolean;
};
export const DropdownSelectInput = <T extends string>({ placeholder, items, isError, readOnly, ...props }: DropdownSelectInputProps<T>) => {
  return (
    <Select.Root disabled={readOnly} {...props}>
      <Select.Trigger
        className={cn(
          "w-[180px] bg-primary-700/70 rounded-md text-primary border-[0.5px] px-4 py-2 h-10",
          !props.value && "text-primary/80",
          isError ? "border-destructive border focus:border-destructive hover:border-destructive" : " border-neutral-300"
        )}
      >
        <Select.Value placeholder={placeholder} />
      </Select.Trigger>
      <Select.Content className="bg-primary-700/90 rounded-md border max-h-96 min-w-[8rem]">
        <Select.Group>
          {items.map((item) => (
            <Select.Item key={item.value} value={item.value} className="hover:text-primary-200 duration-300 ease-in-out">
              {item.label}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export type LabeledDropdownSelectInputProps<T extends string> = DropdownSelectInputProps<T> & LabeledInputProps;

export const LabeledDropdownSelectInput = <T extends string>({
  name,
  required,
  label,
  error,
  containerClassName,
  ...props
}: LabeledDropdownSelectInputProps<T>) => {
  return (
    <InputContainer name={name} label={label} required={required} error={error} className={containerClassName}>
      <DropdownSelectInput name={name} isError={Boolean(error)} {...props} />
    </InputContainer>
  );
};
