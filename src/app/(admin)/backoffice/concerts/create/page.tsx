"use client";

import { LabeledDatePickerInput } from "@/components/inputs/datepicker";
import { LabeledTextInput } from "@/components/inputs/text";
import { LabeledTextareaInput } from "@/components/inputs/textarea";
import { Typography } from "@/components/typography";
import { useState } from "react";

const ConcertCreationForm = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-col gap-8 w-[80%]">
      <Typography.h2>Form</Typography.h2>
      <div className="flex flex-col gap-4">
        <LabeledTextInput name="email" label="Email" placeholder="enter your email" required />
        <LabeledTextareaInput
          name="description"
          label="Description"
          placeholder="enter your description"
          required
          // error="Entrez un email valide!"
        />
        <LabeledDatePickerInput label="Concert date" value={date} onChange={setDate} className="mb-[500px]" />
      </div>
    </div>
  );
};

export default function BackofficeConcertsCreate() {
  return (
    <div className="w-full flex justify-center">
      <ConcertCreationForm />
    </div>
  );
}
