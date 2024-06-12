"use client";

import { LabeledDatePickerInput } from "@/components/inputs/datepicker";
import { LabeledDropdownSelectInput } from "@/components/inputs/dropdown-select";
import { LabeledTextInput } from "@/components/inputs/text";
import { LabeledTextareaInput } from "@/components/inputs/textarea";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Buttons = () => {
  return (
    <div className="flex flex-col gap-8">
      <Typography.h2>Buttons</Typography.h2>
      <div className="flex gap-8">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Outline</Button>
      </div>
      <div className="flex gap-8">
        <Button size="lg">Default</Button>
        <Button size="lg" variant="destructive">
          Destructive
        </Button>
        <Button size="lg" variant="outline">
          Outline
        </Button>
        <Button size="lg" variant="ghost">
          Outline
        </Button>
      </div>
      <div className="flex gap-8">
        <Button disabled size="lg">
          Default
        </Button>
        <Button disabled size="lg" variant="destructive">
          Destructive
        </Button>
        <Button disabled size="lg" variant="outline">
          Outline
        </Button>
        <Button disabled size="lg" variant="ghost">
          Outline
        </Button>
      </div>
      <div className="flex gap-8">
        <Button size="sm">Default</Button>
        <Button size="sm" variant="destructive">
          Destructive
        </Button>
        <Button size="sm" variant="outline">
          Outline
        </Button>
        <Button size="sm" variant="ghost">
          Outline
        </Button>
      </div>
      <div className="flex gap-8">
        <Button size="icon">Def</Button>
        <Button size="icon" variant="destructive">
          Des
        </Button>
        <Button size="icon" variant="outline">
          Out
        </Button>
        <Button size="icon" variant="ghost">
          Out
        </Button>
      </div>
    </div>
  );
};

const Typographies = () => {
  return (
    <div className="flex flex-col gap-8">
      <Typography.h2>Typography</Typography.h2>
      <div className="flex flex-col gap-2">
        <Typography.h1>Title H1</Typography.h1>
        <Typography.h2>Title H2</Typography.h2>
        <Typography.h3>Title H3</Typography.h3>
        <Typography.h4>Title H4</Typography.h4>
        <Typography.body>Body content</Typography.body>
        <Typography.note>Note content</Typography.note>
        <Typography.error>Error message</Typography.error>
      </div>
    </div>
  );
};

const Inputs = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-col gap-8">
      <Typography.h2>Form</Typography.h2>
      <div className="flex flex-col gap-4">
        <LabeledTextInput readOnly name="email" label="Email" value="test 1212" placeholder="enter your email" required />
        <LabeledTextareaInput
          name="description"
          label="Description"
          placeholder="enter your description"
          required
          // error="Entrez un email valide!"
        />
        <LabeledDatePickerInput label="Concert date" value={date} onChange={setDate} />
        <LabeledDropdownSelectInput
          name="genre"
          label="Genre"
          placeholder="Select a genre"
          options={[
            { value: "pop", label: "Pop" },
            { value: "rock", label: "Rock" },
            { value: "jazz", label: "Jazz" },
          ]}
          required
        />
      </div>
    </div>
  );
};

export default function Samples() {
  return (
    <main className="flex flex-col gap-12">
      <Typography.h1 className="text-center">SAMPLES</Typography.h1>
      <Buttons />
      <Typographies />
      <Inputs />
    </main>
  );
}
