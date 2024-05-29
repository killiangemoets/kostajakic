import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import type { Metadata } from "next";
// import { Inter, Poppins, Roboto, Rubik } from "next/font/google";
import { Roboto } from "next/font/google";

// const inter = Inter({ subsets: ["latin"], preload: true });
// const inter = Rubik({ subsets: ["latin"], preload: true });
// const inter = Poppins({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"], preload: true });
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
      <body className={inter.className}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
