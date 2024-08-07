"use client";

import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/ui/carousel";
import { Dialog } from "@/components/ui/dialog";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import type { Image as TImage } from "@/prisma/generated/client";
import { getCarouselWidth } from "@/utils/gallery";
import { cn } from "@/utils/tailwind";
import { FileDown } from "lucide-react";
import Image from "next/image";
import type { KeyboardEvent } from "react";
import { useMemo, useState } from "react";

const DownloadPhotoButton = ({ downloadLink, small }: { downloadLink: string; small?: boolean }) => {
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
      }}
      href={downloadLink}
      variant="ghost"
      size="icon"
      className="absolute bottom-0 right-0 z-10"
    >
      <FileDown className={cn(small ? "w-5 h-5" : "w-7 h-7")} />
      <span className="sr-only">Download Image</span>
    </Button>
  );
};

const CarouselPhoto = ({ photo, showDownloadButton }: { photo: TImage; showDownloadButton?: boolean }) => {
  return (
    <div className="relative w-full pb-[120%] sm:pb-[100%]">
      {showDownloadButton && <DownloadPhotoButton downloadLink={photo.best_quality_url} />}
      <figure className="absolute top-0 left-0 pb-9 flex justify-center items-center overflow-hidden w-full h-full">
        <Image width="500" height="500" className="w-full h-full object-contain" src={photo.webp_url} alt={photo.name} priority />
      </figure>
    </div>
  );
};

const PhotosCarousel = ({ photos, initialSlide }: { photos: TImage[]; initialSlide?: number }) => {
  const { widthSize } = useScreenWidth();
  const isExtraSmall = ["xxs", "xs"].includes(widthSize);
  return (
    <div className="w-full scale-100">
      <Carousel
        initialSlide={initialSlide}
        prevButtonClassName={cn("fixed top-[50%] -translate-y-[42px] left-0 translate-x-[-46px] z-[1]", { hidden: isExtraSmall })}
        nextButtonClassName={cn("fixed top-[50%] -translate-y-[42px] right-0 translate-x-[46px] z-[1]", { hidden: isExtraSmall })}
        thumbs={photos.map((photo) => (
          <CarouselPhoto key={photo.id} photo={photo} />
        ))}
        elements={photos.map((photo) => (
          <CarouselPhoto key={photo.id} photo={photo} showDownloadButton />
        ))}
      />
    </div>
  );
};

const PhotosDialog = ({
  photos,
  open,
  onOpenChange,
  initialSlide,
}: {
  photos: TImage[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  initialSlide?: number;
}) => {
  const { widthHeightRatio } = useScreenWidth();
  const width = getCarouselWidth(widthHeightRatio);

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      modal={
        // <div className="w-[100vw] xs:w-[100vw] sm:w-[96vw] md:w-[84vw] lg:w-[70vw] xl:w-[54vw] 2xl:w-[54vw] h-full py-10 md:py-0 px-8 xs:px-16 sm:px-16 md:px-20 lg:px-24 2xl:px-28 flex items-center justify-center">
        <div
          style={{
            width,
          }}
          className="h-full py-10 px-8 flex items-center justify-center"
        >
          <div className="relative w-full flex items-center justify-center">
            <PhotosCarousel photos={photos} initialSlide={initialSlide} />
          </div>
        </div>
      }
    />
  );
};

const GalleryPhoto = ({ photo, onClick, className }: { photo: TImage; onClick: () => void; className?: string }) => {
  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick();
    }
  };
  return (
    <div
      className={cn("relative w-full pb-[100%] group cursor-pointer", className)}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
    >
      <figure className="absolute top-0 left-0 overflow-hidden w-full h-full">
        <Image
          width="500"
          height="500"
          className="w-full h-full object-cover object-top group-hover:scale-110 duration-300"
          src={photo.webp_url}
          alt={photo.name}
          priority
        />
      </figure>
      <div className="opacity-0 duration-300 ease-in-out group-hover:opacity-100">
        <DownloadPhotoButton small downloadLink={photo.best_quality_url} />
      </div>
    </div>
  );
};

const PhotosGallery = ({ photos }: { photos: TImage[] }) => {
  const initialPhotosShown = useMemo(() => photos.slice(0, 8), [photos]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [photosShown, setPhotosShown] = useState(photos.slice(0, 8));

  return (
    <div className="space-y-4">
      <Typography.h2 className="border-b font-bold normal-case">Photos</Typography.h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-4">
        {photosShown.map((photo, i) => (
          <GalleryPhoto
            key={photo.id}
            photo={photo}
            onClick={() => {
              setInitialSlide(i);
              setIsDialogOpen(true);
            }}
          />
        ))}
      </div>
      <Button
        variant="outline"
        className="ml-auto block"
        onClick={() => setPhotosShown(photosShown.length !== photos.length ? photos : initialPhotosShown)}
      >
        {photosShown.length !== photos.length ? "See more" : "See less"}
      </Button>
      <PhotosDialog photos={photos} open={isDialogOpen} onOpenChange={setIsDialogOpen} initialSlide={initialSlide} />
    </div>
  );
};

export const PhotosGallery2 = ({ photos }: { photos: TImage[] }) => {
  const initialPhotosShown = useMemo(() => photos.slice(0, 8), [photos]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [photosShown, setPhotosShown] = useState(initialPhotosShown);

  return (
    <div className="space-y-4">
      <Typography.h2 className="border-b font-bold normal-case">Photos</Typography.h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-4">
        {photosShown.map((photo, i) => (
          <GalleryPhoto
            className={cn("md:col-span-1 md:row-span-1", {
              "md:col-span-2 md:row-span-2": [0, 23].includes(i),
              "md:col-span-2 md:row-span-3": [13].includes(i),
              "md:row-span-2": [4, 31].includes(i),
              "col-span-2 row-span-2": [0, 23].includes(i),
              "col-span-2 row-span-3": [12].includes(i),
              "row-span-2": [4, 31].includes(i),
            })}
            key={photo.id}
            photo={photo}
            onClick={() => {
              setInitialSlide(i);
              setIsDialogOpen(true);
            }}
          />
        ))}
      </div>
      <Button
        variant="outline"
        className="ml-auto block"
        onClick={() => setPhotosShown(photosShown.length !== photos.length ? photos : initialPhotosShown)}
      >
        {photosShown.length !== photos.length ? "See more" : "See less"}
      </Button>
      <PhotosDialog photos={photos} open={isDialogOpen} onOpenChange={setIsDialogOpen} initialSlide={initialSlide} />
    </div>
  );
};

export const PhotosGallery3 = ({ photos }: { photos: TImage[] }) => {
  const initialPhotosShown = useMemo(() => photos.slice(0, 8), [photos]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [photosShown, setPhotosShown] = useState(photos.slice(0, 11));

  return (
    <div className="space-y-4">
      <Typography.h2 className="border-b font-bold normal-case">Photos</Typography.h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 w-full gap-4">
        {photosShown.map((photo, i) => (
          <GalleryPhoto
            className={cn("md:col-span-1 md:row-span-1", {
              "md:col-span-2 md:row-span-2": [0, 23].includes(i),
              "md:col-span-2 md:row-span-3": [12].includes(i),
              "md:col-span-3 md:row-span-2": [28].includes(i),
              "md:row-span-2": [3, 32, 35].includes(i),
              "col-span-2 row-span-2": [0, 18].includes(i),
              "col-span-2 row-span-3": [12].includes(i),
              "col-span-3 row-span-2": [27].includes(i),
              "row-span-2": [3, 32, 35].includes(i),
            })}
            key={photo.id}
            photo={photo}
            onClick={() => {
              setInitialSlide(i);
              setIsDialogOpen(true);
            }}
          />
        ))}
      </div>
      <Button
        variant="outline"
        className="ml-auto block"
        onClick={() => setPhotosShown(photosShown.length !== photos.length ? photos : initialPhotosShown)}
      >
        {photosShown.length !== photos.length ? "See more" : "See less"}
      </Button>
      <PhotosDialog photos={photos} open={isDialogOpen} onOpenChange={setIsDialogOpen} initialSlide={initialSlide} />
    </div>
  );
};

export default PhotosGallery;
