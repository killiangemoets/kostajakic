import bgHome from "@/assets/images/bg-home.webp";
import { Layout } from "@/components/layout";
import "@/styles/globals.css";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout.Body backgroundImgSrc={bgHome.src}>{children}</Layout.Body>;
}
