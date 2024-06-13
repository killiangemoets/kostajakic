import { Navigation } from "@/components/layout";

export default async function BackofficeGalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Navigation className="w-full flex justify-center">{children}</Navigation>;
}
