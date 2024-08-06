import bgContact from "@/assets/images/backgrounds/bg-contact.jpg";
import { Layout } from "@/components/layout";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Contact | Kosta Jakic",
  description:
    "Get in touch with Kosta Jakic. Find his email, phone number, and social media profiles including Instagram, Facebook, and YouTube.",
};

export default function ConcertsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout.Body className="px-0 sm:px-8 lg:px-20" backgroundPosition="top right" backgroundImg={bgContact}>
      {children}
    </Layout.Body>
  );
}
