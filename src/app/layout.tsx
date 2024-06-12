import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import clsx from "clsx";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Roboto({ weight: ["300", "400", "500", "700", "900"], subsets: ["latin"], preload: true });

export const metadata: Metadata = {
  title: "Kosta Jakic",
  description: "Kosta Jakic's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TRPCReactProvider>
        <body className={clsx(inter.className, "min-h-screen")}>
          {children}
          <Toaster position="bottom-right" />
        </body>
      </TRPCReactProvider>
    </html>
  );
}
