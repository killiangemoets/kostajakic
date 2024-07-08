import { Button } from "@/components/ui/button";
import clsx from "clsx";

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex flex-col gap-16", className)}>
      <div className="flex gap-8">
        <Button size="lg" className="mt-12" variant="ghost" href="/about">
          About
        </Button>
        <Button size="lg" variant="ghost" href="/concerts">
          Concerts
        </Button>
        <Button size="lg" className="mt-8" variant="ghost" href="/contact">
          Contact
        </Button>
        <Button size="lg" className="mt-16" variant="ghost" href="/gallery">
          Gallery
        </Button>
        <Button size="lg" className="mt-4" variant="ghost" href="/projects">
          Projects
        </Button>
      </div>
    </div>
  );
};

export const Layout = {
  Body: ({ children, backgroundImgSrc, className, ...props }: { backgroundImgSrc?: string } & React.ComponentPropsWithoutRef<"div">) => (
    <div
      className={clsx("min-h-screen px-8 pt-8 pb-16 overflow-hidden flex flex-col gap-16 bg-fixed", className)}
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
      <main className="relative px-20 flex-1 ">{children}</main>
    </div>
  ),
};
