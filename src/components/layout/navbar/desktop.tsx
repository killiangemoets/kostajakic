import { Button } from "@/components/ui/button";
import { cn } from "@/utils/tailwind";

export const DesktopNavbar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col gap-16", className)}>
      <div className="flex gap-8">
        <Button size="lg" className="mt-0 bg-slate-400 rounded-full" variant="ghost" href="/">
          LOGO
        </Button>
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
