import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <>
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
    </>
  );
};

export const Layout = {
  Body: ({ children, backgroundImgSrc }: { backgroundImgSrc?: string } & React.ComponentPropsWithoutRef<"body">) => (
    <body
      className="min-h-screen"
      style={
        !!backgroundImgSrc
          ? {
              backgroundImage: `url(${backgroundImgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <Navbar />
      <main>{children}</main>
    </body>
  ),
};
