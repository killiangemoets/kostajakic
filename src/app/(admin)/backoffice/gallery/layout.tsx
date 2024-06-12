import { Navigation } from "@/components/layout";
import "@/styles/globals.css";

export default async function BackOfficeGalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Navigation>{children}</Navigation>;
}
