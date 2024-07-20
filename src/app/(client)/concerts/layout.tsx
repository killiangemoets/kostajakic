import bgConcerts from "@/assets/images/backgrounds/bg-concerts.webp";
import { Layout } from "@/components/layout";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Concerts | Kosta Jakic",
  description: "Kosta Jakic's personal website.",
};

export default function ConcertsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout.Body className="px-0 sm:px-8 lg:px-20" bgFilter backgroundPosition="top right" backgroundImg={bgConcerts}>
      {children}
    </Layout.Body>
  );
}
