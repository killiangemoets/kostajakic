import bgContact from "@/assets/images/bg-contact.webp";
import { Layout } from "@/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Kosta Jakic",
  description: "Kosta Jakic's personal website.",
};

export default function ConcertsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout.Body className="px-0 sm:px-8 lg:px-20" backgroundImgSrc={bgContact.src}>
      {children}
    </Layout.Body>
  );
}
