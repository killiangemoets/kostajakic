import bgBackoffice from "@/assets/images/bg-backoffice.jpg";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="min-h-screen flex flex-col gap-8 bg-fixed"
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
