import bgImage from "@/assets/images/backgrounds/bg-contact.jpg";
import { Layout } from "@/components/layout";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Layout.Body
      className="px-0 sm:px-8 lg:px-20 flex flex-col gap-8 items-center justify-center"
      backgroundPosition="top right"
      backgroundImg={bgImage}
    >
      <Typography.h3 className="normal-case text-center">Sorry, this page doesn&apos;t exist!</Typography.h3>
      <Button href="/" className="mb-16">
        Go Home
      </Button>
    </Layout.Body>
  );
}
