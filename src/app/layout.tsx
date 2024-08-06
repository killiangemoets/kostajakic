import Favicon from "/public/images/Metadata/favicon.ico";
import "@/styles/globals.scss";
import { TRPCReactProvider } from "@/trpc/react";
import type { Metadata } from "next/types";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Kosta Jakic | Pianist",
  description:
    "Discover the official website of Kosta Jakic, a Belgian pianist and conductor of Yugoslav origin. Learn about his unique musical journey and upcoming concerts.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TRPCReactProvider>
        <body>
          {children}
          <Toaster position="bottom-right" />
        </body>
      </TRPCReactProvider>
    </html>
  );
}
