import { Navigation } from "@/components/layout";
import { Button } from "@/components/ui/button";
import "@/styles/globals.css";

export default async function BackOfficeConcertsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Navigation
      extra={
        <Button href="/backoffice/concerts/create" variant="outline">
          New Concert
        </Button>
      }
    >
      {children}
    </Navigation>
  );
}
