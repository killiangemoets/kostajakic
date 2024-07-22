import { Button } from "@/components/ui/button";
import { NAVBAR_ITEMS } from "@/constants/navigation";

export const DesktopNavbar = () => {
  return (
    <header className="flex gap-6 xl:gap-8 z-10">
      <Button size="lg" className="mt-0 bg-slate-400 rounded-full" variant="ghost" href="/">
        LOGO
        <span className="sr-only">Home</span>
      </Button>
      <nav>
        <ul className="flex gap-6 xl:gap-8">
          {NAVBAR_ITEMS.map((item) => {
            return (
              <li key={item.name}>
                <Button key={item.name} size="lg" style={{ marginTop: item.desktopMarginTop }} variant="ghost" href={item.href}>
                  {item.name}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
