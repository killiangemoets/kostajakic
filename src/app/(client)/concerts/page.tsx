import { ConcertsSection } from "@/components/concerts";

// export const dynamic = "force-static"; // force static rendering

export default async function Concerts() {
  return <ConcertsSection className="w-full md:w-[56%] md:min-w-[600px]" />;
}
