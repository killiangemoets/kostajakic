import bgProjects from "@/assets/images/backgrounds/bg-projects.jpg";
import { Layout } from "@/components/layout";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Projects | Kosta Jakic",
  description:
    "Discover Kosta Jakic's ongoing projects. Learn about his interdisciplinary and intergenerational collaborations, and his research on the role of music in extreme conditions.",
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout.Body className="px-0 sm:px-8 lg:px-20" bgFilter backgroundPosition="bottom right" backgroundImg={bgProjects}>
      {children}
    </Layout.Body>
  );
}
