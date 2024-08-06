import bgConcerts from "@/assets/images/backgrounds/bg-concerts.jpg";
import { Layout } from "@/components/layout";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Concerts | Kosta Jakic",
  description:
    "Stay updated with Kosta Jakic's concert schedule. Find information about his upcoming performances and browse through his past concerts across Belgium and Europe.",
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
