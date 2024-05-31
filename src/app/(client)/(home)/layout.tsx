import bgHome from "@/assets/images/bg-home.jpg";
import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kosta Jakic",
  description: "Kosta Jakic's personal website.",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout.Body backgroundImgSrc={bgHome.src}>{children}</Layout.Body>;
}
