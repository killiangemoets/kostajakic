import bgBackoffice from "@/assets/images/bg-backoffice.jpg";
import "@/styles/globals.css";

export default async function BackOfficeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="min-h-screen px-8 pt-8 pb-16 overflow-hidden flex flex-col gap-8 bg-fixed"
      style={{
        backgroundImage: `url(${bgBackoffice.src})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {children}
    </div>
  );
}
