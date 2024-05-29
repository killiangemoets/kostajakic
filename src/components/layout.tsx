import { Button } from "@/components/ui/button";
import clsx from "clsx";

export const Navbar = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex gap-8">
        <Button className="mt-12" variant="ghost" href="/about">
          About
        </Button>
        <Button variant="ghost" href="/concerts">
          Concerts
        </Button>
        <Button className="mt-8" variant="ghost" href="/contact">
          Contact
        </Button>
        <Button className="mt-16" variant="ghost" href="/gallery">
          Gallery
        </Button>
        <Button className="mt-4" variant="ghost" href="/projects">
          Projects
        </Button>
      </div>
    </div>
  );
};

export const Layout = {
  Body: ({ children, backgroundImgSrc, className, ...props }: { backgroundImgSrc?: string } & React.ComponentPropsWithoutRef<"div">) => (
    <div
      className={clsx("min-h-screen p-8 overflow-hidden flex flex-col gap-8", className)}
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
      <main className="h-full relative">{children}</main>
    </div>
  ),
};
