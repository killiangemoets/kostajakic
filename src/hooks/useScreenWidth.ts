import { useLayoutEffect, useState } from "react";

type Breakpoint = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const useScreenWidth = () => {
  const [width, setWidth] = useState(Infinity);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let widthSize: Breakpoint = "xxs";
  if (width >= 1536) {
    widthSize = "2xl";
  } else if (width >= 1280) {
    widthSize = "xl";
  } else if (width >= 1024) {
    widthSize = "lg";
  } else if (width >= 768) {
    widthSize = "md";
  } else if (width >= 640) {
    widthSize = "sm";
  } else if (width >= 420) {
    widthSize = "xs";
  }

  return { width, widthSize };
};
