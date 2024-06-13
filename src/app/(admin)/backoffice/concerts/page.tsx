import { ConcertsSection } from "@/components/concerts";
import { Navigation } from "@/components/layout";
import { Button } from "@/components/ui/button";

export default function BackofficeConcerts() {
  return (
    <Navigation
      className="w-full flex justify-center"
      extra={
        <Button href="/backoffice/concerts/create" variant="outline">
          New Concert
        </Button>
      }
    >
      <ConcertsSection className="max-w-[800px]" showActions />
    </Navigation>
  );
}
