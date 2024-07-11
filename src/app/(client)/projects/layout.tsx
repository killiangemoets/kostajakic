import bgProjects from "@/assets/images/backgrounds/bg-projects.webp";
import { Layout } from "@/components/layout";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Gallery | Kosta Jakic",
  description: "Kosta Jakic's personal website.",
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout.Body className="px-0 sm:px-8 lg:px-20" bgFilter backgroundPosition="bottom right" backgroundImgSrc={bgProjects.src}>
      {children}
    </Layout.Body>
  );
}
