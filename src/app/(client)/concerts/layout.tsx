import bConcerts from "@/assets/images/bg-concerts.jpg";
import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kosta Jakic - Concerts",
  description: "Kosta Jakic's personal website.",
};

export default function ConcertsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout.Body backgroundImgSrc={bConcerts.src}>{children}</Layout.Body>;
}
