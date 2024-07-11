"use client";

import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/ui/carousel";
import { Dialog } from "@/components/ui/dialog";
import { GALLERY_PHOTOS } from "@/constants/gallery";
import type { GalleryPhoto } from "@/types/gallery";
import { cn } from "@/utils/tailwind";
import { FileDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const DownloadPhotoButton = ({ downloadLink, small }: { downloadLink: string; small?: boolean }) => {
  const handleDownload = async (downloadLink: string) => {
    const response = await fetch(`/${downloadLink}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", downloadLink.replace("photos/", ""));
    document.body.appendChild(link);
    link.click();
    link?.parentNode?.removeChild(link);
    window.URL.revokeObjectURL(url);
  };
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        handleDownload(downloadLink);
      }}
      variant="ghost"
      size="icon"
      className="absolute bottom-0 right-0 z-10"
    >
      <FileDown className={cn(small ? "w-5 h-5" : "w-7 h-7")} />
    </Button>
  );
};

const CarouselPhoto = ({ photo, showDownloadButton }: { photo: GalleryPhoto; showDownloadButton?: boolean }) => {
  return (
    <div className="relative w-full pb-[100%]">
      {showDownloadButton && <DownloadPhotoButton downloadLink={photo.downloadLink} />}
      <figure className="absolute top-0 left-0 pb-9 flex justify-center items-center overflow-hidden w-full h-full">
        <Image className="w-full h-full object-contain" src={photo.src} alt={photo.alt} priority />
      </figure>
    </div>
  );
};

const PhotosCarousel = ({ initialSlide }: { initialSlide?: number }) => {
  return (
    <div className="w-full scale-100">
      <Carousel
        initialSlide={initialSlide}
        prevButtonClassName="fixed top-[50%] -translate-y-[42px] left-0 translate-x-[-46px] z-[1]"
        nextButtonClassName="fixed top-[50%] -translate-y-[42px] right-0 translate-x-[46px] z-[1]"
        thumbs={GALLERY_PHOTOS.map((photo) => (
          <CarouselPhoto key={photo.alt} photo={photo} />
        ))}
        elements={GALLERY_PHOTOS.map((photo) => (
          <CarouselPhoto key={photo.alt} photo={photo} showDownloadButton />
        ))}
      />
    </div>
  );
};

const PhotosDialog = ({
  open,
  onOpenChange,
  initialSlide,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  initialSlide?: number;
}) => {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      modal={
        <div className="w-[54vw] h-[100vh] flex items-center justify-center">
          <div className="relative w-[40vw] flex items-center justify-center">
            <PhotosCarousel initialSlide={initialSlide} />
          </div>
        </div>
      }
    />
  );
};

const GalleryPhoto = ({ photo, onClick }: { photo: GalleryPhoto; onClick: () => void }) => {
  return (
    <button className="relative w-full pb-[100%] group" onClick={onClick}>
      <figure className="absolute top-0 left-0 overflow-hidden w-full h-full">
        <Image
          className="w-full h-full object-cover object-center group-hover:scale-110 duration-300"
          src={photo.src}
          alt={photo.alt}
          priority
        />
      </figure>
      <div className="opacity-0 duration-300 ease-in-out group-hover:opacity-100">
        <DownloadPhotoButton small downloadLink={photo.downloadLink} />
      </div>
    </button>
  );
};

const PhotosGallery = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [photos, setPhotos] = useState(GALLERY_PHOTOS.slice(0, 8));
  return (
    <div className="space-y-4">
      <Typography.h3 className="border-b font-bold normal-case">Photos</Typography.h3>
      <div className="grid grid-cols-4 w-full gap-4">
        {photos.map((photo, i) => (
          <GalleryPhoto
            key={photo.alt}
            photo={photo}
            onClick={() => {
              setInitialSlide(i);
              setIsDialogOpen(true);
            }}
          />
        ))}
      </div>
      {photos.length !== GALLERY_PHOTOS.length && (
        <Button variant="outline" className="ml-auto block" onClick={() => setPhotos(GALLERY_PHOTOS)}>
          See more
        </Button>
      )}
      <PhotosDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} initialSlide={initialSlide} />
    </div>
  );
};

export default PhotosGallery;
