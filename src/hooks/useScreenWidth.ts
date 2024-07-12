import { useLayoutEffect, useState } from "react";

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

  let widthSize: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" = "xxs";
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
