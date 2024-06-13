import { Navigation } from "@/components/layout";
import { Button } from "@/components/ui/button";

export default async function BackofficeConcertsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Navigation
      className="w-full flex justify-center"
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
