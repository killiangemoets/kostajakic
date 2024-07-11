import bgBackoffice from "@/assets/images/backgrounds/bg-backoffice.jpg";
import { Layout } from "@/components/layout";
import Spinner from "@/components/ui/spinner";

export default function Loading() {
  return (
    <Layout.Body className="flex items-center justify-center" backgroundImgSrc={bgBackoffice.src}>
      <Spinner />
    </Layout.Body>
  );
}
