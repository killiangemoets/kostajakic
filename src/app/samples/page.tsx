"use client";

import { LabeledTextInput, TextInput } from "@/components/inputs/text";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";

export default function Samples() {
  return (
    <main className="flex flex-col gap-12">
      <Typography.h1 className="text-center">SAMPLES</Typography.h1>
      <div className="flex flex-col gap-8">
        <Typography.h2>Buttons</Typography.h2>
        <div className="flex gap-8">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Typography.h2>Typography</Typography.h2>
        <div className="flex flex-col gap-2">
          <Typography.h1>Title H1</Typography.h1>
          <Typography.h2>Title H2</Typography.h2>
          <Typography.h3>Title H3</Typography.h3>
          <Typography.h4>Title H4</Typography.h4>
          <Typography.body>Body content</Typography.body>
          <Typography.note>Note content</Typography.note>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Typography.h2>Form</Typography.h2>
        <div className="flex flex-col gap-2">
          <TextInput name="name" placeholder="enter your full name" required />
          <LabeledTextInput name="email" label="Email" placeholder="enter your email" required error="Entrez un email valide!" />
        </div>
      </div>
    </main>
  );
}
