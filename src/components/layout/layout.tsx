import { Navbar } from "./navbar";
import { cn } from "@/utils/tailwind";

export const Layout = {
  Body: ({
    children,
    backgroundImgSrc,
    backgroundPosition = "top",
    className,
    bgFilter = false,
    ...props
  }: { backgroundImgSrc?: string; bgFilter?: boolean; backgroundPosition?: string } & React.ComponentPropsWithoutRef<"div">) => (
    <div
      className="min-h-screen px-8 pt-8 pb-16 overflow-hidden flex flex-col gap-16 bg-fixed relative"
      style={
        !!backgroundImgSrc
          ? {
              backgroundImage: `url(${backgroundImgSrc})`,
              backgroundSize: "cover",
              backgroundPosition,
            }
          : {}
      }
      {...props}
    >
      {bgFilter && <div className="bg-primary-700/60 md:bg-primary-700/20 lg:bg-primary-700/0 absolute top-0 left-0 w-full h-full" />}
      <Navbar />
      <main className={cn("relative px-20 flex-1", className)}>{children}</main>
    </div>
  ),
};
