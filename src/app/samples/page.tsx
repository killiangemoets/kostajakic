"use client";

import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";

export default function Samples() {
  return (
    <main>
      <h1>SAMPLES</h1>
      <div>
        <h2>Buttons</h2>
        <div>
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
      <div>
        <h2>Typography</h2>
        <div>
          <Typography.h1>Title H1</Typography.h1>
          <Typography.h2>Title H2</Typography.h2>
          <Typography.h3>Title H3</Typography.h3>
          <Typography.h4>Title H4</Typography.h4>
          <Typography.body>Body content</Typography.body>
          <Typography.note>Note content</Typography.note>
        </div>
      </div>
    </main>
  );
}
