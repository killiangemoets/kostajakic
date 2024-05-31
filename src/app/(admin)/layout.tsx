import bgBackoffice from "@/assets/images/bg-backoffice.jpg";
import "@/styles/globals.css";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="min-h-screen overflow-hidden flex flex-col gap-8 bg-fixed bg-neutral-400"
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
