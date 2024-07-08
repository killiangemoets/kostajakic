import { Button } from "@/components/ui/button";
import { NAVBAR_ITEMS } from "@/constants/navigation";
import { cn } from "@/utils/tailwind";

export const DesktopNavbar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col gap-16 z-10", className)}>
      <div className="flex gap-8">
        <Button size="lg" className="mt-0 bg-slate-400 rounded-full" variant="ghost" href="/">
          LOGO
        </Button>
        {NAVBAR_ITEMS.map((item) => {
          return (
            <Button key={item.name} size="lg" style={{ marginTop: item.desktopMarginTop }} variant="ghost" href={item.href}>
              {item.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
