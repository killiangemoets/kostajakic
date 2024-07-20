import { Navbar } from "./navbar";
import { cn } from "@/utils/tailwind";
import type { StaticImageData } from "next/image";
import Image from "next/image";

export const Layout = {
  Body: ({
    children,
    backgroundImg,
    backgroundPosition = "top",
    className,
    bgFilter = false,
    ...props
  }: { backgroundImg?: StaticImageData; bgFilter?: boolean; backgroundPosition?: string } & React.ComponentPropsWithoutRef<"div">) => (
    <div className="min-h-screen px-8 pt-8 pb-16 overflow-hidden flex flex-col gap-16 bg-fixed relative" {...props}>
      {!!backgroundImg && (
        <div className="fixed top-0 left-0 w-screen h-screen">
          <Image
            priority={true}
            src={backgroundImg}
            layout="fill"
            objectFit="cover"
            objectPosition={backgroundPosition}
            alt="background image"
            placeholder="blur"
            blurDataURL={backgroundImg.blurDataURL}
          />
          {bgFilter && <div className="bg-primary-700/60 md:bg-primary-700/20 lg:bg-primary-700/0 absolute top-0 left-0 w-full h-full" />}
        </div>
      )}
      <Navbar />
      <main className={cn("relative px-20 flex-1", className)}>{children}</main>
    </div>
  ),
};
