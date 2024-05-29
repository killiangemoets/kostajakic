import bgAbout from "@/assets/images/bg-about.jpg";
import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kosta Jakic - About",
  description: "Kosta Jakic's personal website.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout.Body backgroundImgSrc={bgAbout.src}>{children}</Layout.Body>;
}
