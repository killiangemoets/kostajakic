import bgAbout from "@/assets/images/bg-about.webp";
import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Kosta Jakic",
  description: "Kosta Jakic's personal website.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout.Body className="px-0 sm:px-8 lg:px-20" bgFilter backgroundPosition="top right" backgroundImgSrc={bgAbout.src}>
      {children}
    </Layout.Body>
  );
}
