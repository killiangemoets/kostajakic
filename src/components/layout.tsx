import { Button } from "@/components/ui/button";
import clsx from "clsx";

export const Navbar = () => {
  return (
    <div>
      <Button variant="ghost" href="/about">
        About
      </Button>
      <Button variant="ghost" href="/concerts">
        Concerts
      </Button>
      <Button variant="ghost" href="/contact">
        Contact
      </Button>
      <Button variant="ghost" href="/gallery">
        Gallery
      </Button>
      <Button variant="ghost" href="/projects">
        Projects
      </Button>
    </div>
  );
};

export const Layout = {
  Body: ({ children, backgroundImgSrc, className, ...props }: { backgroundImgSrc?: string } & React.ComponentPropsWithoutRef<"div">) => (
    <div
      className={clsx("min-h-screen p-8", className)}
      style={
        !!backgroundImgSrc
          ? {
              backgroundImage: `url(${backgroundImgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
      {...props}
    >
      <Navbar />
      <main>{children}</main>
      {/* {children} */}
    </div>
  ),
};
