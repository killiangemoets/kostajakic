"use client";

import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function Backoffice() {
  return (
    <div>
      <Typography.h1>BACKOFFICE</Typography.h1>
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
}
