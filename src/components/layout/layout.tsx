import { Navbar } from "./navbar";
import { cn } from "@/utils/tailwind";

export const Layout = {
  Body: ({ children, backgroundImgSrc, className, ...props }: { backgroundImgSrc?: string } & React.ComponentPropsWithoutRef<"div">) => (
    <div
      className="min-h-screen px-8 pt-8 pb-16 overflow-hidden flex flex-col gap-16 bg-fixed"
      style={
        !!backgroundImgSrc
          ? {
              backgroundImage: `url(${backgroundImgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }
          : {}
      }
      {...props}
    >
      <Navbar />
      <main className={cn("relative px-20 flex-1", className)}>{children}</main>
    </div>
  ),
};
