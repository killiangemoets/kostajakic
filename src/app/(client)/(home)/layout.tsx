import bgHome from "@/assets/images/backgrounds/bg-home.webp";
import { Layout } from "@/components/layout";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout.Body backgroundImgSrc={bgHome.src}>{children}</Layout.Body>;
}
