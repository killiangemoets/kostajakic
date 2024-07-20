import bgBackoffice from "@/assets/images/backgrounds/bg-backoffice.jpg";
import Image from "next/image";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col gap-8 bg-fixed relative">
      <div className="fixed top-0 left-0 w-screen h-screen block">
        <Image
          priority={true}
          src={bgBackoffice}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="background image"
          placeholder="blur"
          blurDataURL={bgBackoffice.blurDataURL}
        />
      </div>
      <div className="z-10">{children}</div>
    </div>
  );
}
