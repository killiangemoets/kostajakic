import bgHome from "@/assets/images/backgrounds/bg-home.webp";
import { Layout } from "@/components/layout";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout.Body backgroundImg={bgHome}>{children}</Layout.Body>;
}
