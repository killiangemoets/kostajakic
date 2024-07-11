import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

// Hook to force rerender when swiper slide changes, to fix the issue discussed here:
// https://github.com/nolimits4web/swiper/issues/5577
export const useSwiperReactive = () => {
  const swiper = useSwiper();

  const [, setSignal] = useState({});
  const forceRerender = () => setSignal({});

  useEffect(() => {
    if (swiper) swiper.on("slideChange", forceRerender);
  }, [swiper]);

  return swiper;
};
