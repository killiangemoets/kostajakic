// import Favicon from "/public/images/Metadata/favicon.ico";
import "@/styles/globals.scss";
import { TRPCReactProvider } from "@/trpc/react";
import type { Metadata } from "next/types";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Kosta Jakic | Pianist",
  description:
    "Discover the official website of Kosta Jakic, a Belgian pianist and conductor of Yugoslav origin. Learn about his unique musical journey and upcoming concerts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/layout/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/layout/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/layout/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/layout/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/layout/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/layout/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-config" content="/layout/favicon/browserconfig.xml" />
      </head>
      <TRPCReactProvider>
        <body>
          {children}
          <Toaster position="bottom-right" />
        </body>
      </TRPCReactProvider>
    </html>
  );
}
