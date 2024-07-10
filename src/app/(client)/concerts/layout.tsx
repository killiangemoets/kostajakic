import bgConcerts from "@/assets/images/bg-concerts.webp";
import { Layout } from "@/components/layout";
import type { Metadata } from "next";

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
    <Layout.Body className="px-0 sm:px-8 lg:px-20" bgFilter backgroundPosition="top right" backgroundImgSrc={bgConcerts.src}>
      {children}
    </Layout.Body>
  );
}
