import { DatePickerInput, LabeledDatePickerInput } from "@/components/inputs/datepicker";
import type { DatePickerDefaultProps, RHFInputProps, RHFLabeledInputProps } from "@/types/inputs";
import { get } from "lodash";
import type { FieldError, FieldValues } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";

type RHFDateSelectInputProps<TFormValues> = DatePickerDefaultProps & RHFInputProps<TFormValues>;

export const RHFDateSelectInput = <TFormValues extends FieldValues>({
  name,
  rules = {},
  required,
  ...props
}: RHFDateSelectInputProps<TFormValues>) => {
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
          <DatePickerInput
            name={name}
            isError={Boolean(error)}
            value={field.value ?? undefined}
            onChange={(value) => field.onChange(value)}
            {...props}
          />
        );
      }}
    />
  );
};

type RHFLabeledDateSelectInputProps<TFormValues> = DatePickerDefaultProps & RHFLabeledInputProps<TFormValues>;

export const RHFLabeledDateSelectInput = <TFormValues extends FieldValues>({
  label,
  name,
  required,
  containerClassName,
  rules = {},
  ...props
}: RHFLabeledDateSelectInputProps<TFormValues>) => {
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
          <LabeledDatePickerInput
            name={name}
            label={label}
            required={required}
            error={error?.message}
            containerClassName={containerClassName}
            value={field.value ?? undefined}
            onChange={(value) => field.onChange(value)}
            {...props}
          />
        );
      }}
    />
  );
};
