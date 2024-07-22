import { Navbar } from "./navbar";
import facebookIcon from "@/assets/icons/facebook.png";
import instagramIcon from "@/assets/icons/instagram.png";
import youtubeIcon from "@/assets/icons/youtube.png";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { FACEBOOK_URL, FULL_NAME, INSTAGRAM_URL, YOUTUBE_URL } from "@/constants/contact";
import { cn } from "@/utils/tailwind";
import type { StaticImageData } from "next/image";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-between z-10">
      <div className="flex items-center gap-1.5 md:gap-2">
        <Button size="icon" variant="ghost" className="w-5 h-5 md:w-7 md:h-7 p-0" href={INSTAGRAM_URL} target="_blank">
          <Image className="w-5 h-5 md:w-7 md:h-7 duration-300" src={instagramIcon} alt="Instagram url" />
          <span className="sr-only">Instagram</span>
        </Button>
        <Button size="icon" variant="ghost" className="w-5 h-5 md:w-7 md:h-7 p-0" href={FACEBOOK_URL} target="_blank">
          <Image className="w-5 h-5 md:w-7 md:h-7 duration-300" src={facebookIcon} alt="Facebook url" />
          <span className="sr-only">Facebook</span>
        </Button>
        <Button size="icon" variant="ghost" className="w-5 h-5 md:w-7 md:h-7 p-0" href={YOUTUBE_URL} target="_blank">
          <Image className="w-5 h-5 md:w-7 md:h-7 duration-300" src={youtubeIcon} alt="Youtube url" />
          <span className="sr-only">Youtube</span>
        </Button>
      </div>
      <div>
        <Typography.note className="text-right w-full ">&copy; 2024, {FULL_NAME}</Typography.note>
      </div>
    </footer>
  );
};

export const Layout = {
  Body: ({
    children,
    backgroundImg,
    backgroundPosition = "top",
    className,
    bgFilter = false,
    ...props
  }: { backgroundImg?: StaticImageData; bgFilter?: boolean; backgroundPosition?: string } & React.ComponentPropsWithoutRef<"div">) => (
    <>
      <div className="min-h-dvh overflow-hidden px-5 sm:px-6 md:px-8 pt-8 pb-4 sm:pb-6 flex flex-col gap-16 relative" {...props}>
        {!!backgroundImg && (
          <div className="fixed top-0 left-0 w-full h-screen">
            <Image
              priority
              src={backgroundImg}
              fill
              quality={90}
              objectFit="cover"
              objectPosition={backgroundPosition}
              alt="background image"
              placeholder="blur"
              blurDataURL={backgroundImg.blurDataURL}
              className="w-full h-full"
            />
            {bgFilter && <div className="bg-primary-700/60 md:bg-primary-700/20 lg:bg-primary-700/0 absolute top-0 left-0 w-full h-full" />}
          </div>
        )}
        <Navbar />
        <main className={cn("relative px-20 flex-1", className)}>{children}</main>
        <Footer />
      </div>
    </>
  ),
};
