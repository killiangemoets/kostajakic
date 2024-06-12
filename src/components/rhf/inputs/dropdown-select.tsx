import type { DropdownSelectInputProps, LabeledDropdownSelectInputProps } from "@/components/inputs/dropdown-select";
import { DropdownSelectInput, LabeledDropdownSelectInput } from "@/components/inputs/dropdown-select";
import type { RHFInputProps } from "@/types/inputs";
import { get } from "lodash";
import type { FieldError, FieldValues } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";

type RHFDateSelectInputProps<TValue extends string, TFormValues> = DropdownSelectInputProps<TValue> & RHFInputProps<TFormValues>;

export const RHFDropdownSelectInput = <TValue extends string, TFormValues extends FieldValues>({
  name,
  rules = {},
  required,
  ...props
}: RHFDateSelectInputProps<TValue, TFormValues>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<TFormValues>();

  const error = get(errors, name) as FieldError | undefined;

  return (
    <Controller
      control={control}
      name={name}
      rules={{ ...rules, required }}
      render={({ field }) => {
        return (
          <DropdownSelectInput
            name={name}
            isError={Boolean(error)}
            value={field.value ?? undefined}
            onValueChange={(value) => field.onChange(value)}
            {...props}
          />
        );
      }}
    />
  );
};

type RHFLabeledDateSelectInputProps<TValue extends string, TFormValues> = LabeledDropdownSelectInputProps<TValue> &
  RHFInputProps<TFormValues>;

export const RHFLabeledDropdownSelectInput = <TValue extends string, TFormValues extends FieldValues>({
  label,
  name,
  required,
  containerClassName,
  rules = {},
  ...props
}: RHFLabeledDateSelectInputProps<TValue, TFormValues>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, name) as FieldError | undefined;

  return (
    <Controller
      control={control}
      name={name}
      rules={{ ...rules, required }}
      render={({ field }) => {
        return (
          <LabeledDropdownSelectInput
            name={name}
            label={label}
            required={required}
            error={error?.message}
            containerClassName={containerClassName}
            value={field.value ?? undefined}
            onValueChange={(value) => field.onChange(value)}
            {...props}
          />
        );
      }}
    />
  );
};
