"use client";

import { Button } from "./button";
import { useSwiperReactive } from "@/hooks/useSwiperReactive";
import clsx from "clsx";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Keyboard, Mousewheel, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { AutoplayOptions, Swiper as TSwiper } from "swiper/types";

const SlidePrevButton = ({ className }: { className?: string }) => {
  const swiper = useSwiperReactive();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Previous slide"
      className={clsx(className ?? " absolute left-0 top-1/2 z-[2] transform -translate-y-1/2")}
      onClick={() => swiper.slidePrev()}
    >
      <ChevronLeftIcon
        className={clsx(
          "w-12 h-12",
          swiper.isBeginning && !swiper.loopedSlides ? "text-white/50" : "text-primary duration-300 ease-in-out hover:text-primary-200"
        )}
      />
    </Button>
  );
};

const SlideNextButton = ({ className }: { className?: string }) => {
  const swiper = useSwiperReactive();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Next slide"
      className={clsx(className ?? "absolute z-[2] transform -translate-y-1/2 right-0 top-1/2")}
      onClick={() => swiper.slideNext()}
    >
      <ChevronRightIcon
        className={clsx(
          "w-12 h-12 ",
          swiper.isEnd && !swiper.loopedSlides ? "text-white/50" : "text-primary duration-300 ease-in-out hover:text-primary-200"
        )}
      />
    </Button>
  );
};

type CarouselProps = {
  elements: React.ReactNode[];
  spaceBetween?: number;
  slidesPerView?: number;
  navigation?: boolean;
  pagination?: boolean;
  loop?: boolean;
  prevButtonClassName?: string;
  nextButtonClassName?: string;
  freeMode?: boolean;
  mousewheel?: boolean;
  cssMode?: boolean;
  autoplay?: boolean | AutoplayOptions;
};

const Carousel = ({
  elements,
  spaceBetween = 100,
  slidesPerView = 1,
  pagination = true,
  freeMode = false,
  mousewheel = false,
  cssMode = false,
  loop = true,
  prevButtonClassName,
  nextButtonClassName,
  autoplay,
}: CarouselProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<TSwiper | null>(null);

  return (
    <div>
      <Swiper
        className="relative flex justify-center items-center"
        style={{}}
        thumbs={{ swiper: thumbsSwiper?.activeIndex !== undefined ? thumbsSwiper : undefined }}
        initialSlide={0}
        modules={[Pagination, Keyboard, FreeMode, Mousewheel, Autoplay, Thumbs]}
        autoplay={autoplay}
        freeMode={freeMode}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        mousewheel={mousewheel}
        cssMode={cssMode}
        keyboard={{
          enabled: true,
        }}
        loop={loop}
        pagination={
          pagination && {
            clickable: true,
            bulletClass: "inline-block w-2 h-2 cursor-pointer rounded-full mx-1 bg-primary",
            bulletActiveClass: "bg-primary-200",
          }
        }
      >
        <SlidePrevButton className={prevButtonClassName} />
        {elements.map((el, i) => (
          <SwiperSlide style={{ display: "flex" }} key={i} className=" items-center justify-center">
            {el}
          </SwiperSlide>
        ))}

        <SlideNextButton className={nextButtonClassName} />
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="relative flex justify-center items-center"
      >
        {elements.map((el, i) => (
          <SwiperSlide style={{ display: "flex" }} key={i} className=" items-center justify-center">
            {el}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
