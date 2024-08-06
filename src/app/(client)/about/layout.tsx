import bgAbout from "@/assets/images/backgrounds/bg-about.jpg";
import { Layout } from "@/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Kosta Jakic",
  description:
    "Learn about Kosta Jakic, a Belgian pianist and conductor of Yugoslav origin. Discover his unique approach to music, collaborations with renowned artists, and his research on the role of music in historical contexts.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout.Body className="px-0 sm:px-8 lg:px-20" bgFilter backgroundPosition="top right" backgroundImg={bgAbout}>
      {children}
    </Layout.Body>
  );
}
