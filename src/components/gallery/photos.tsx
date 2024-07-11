"use client";

import gallery1 from "@/assets/images/gallery/gallery_1.webp";
import gallery2 from "@/assets/images/gallery/gallery_2.webp";
import gallery3 from "@/assets/images/gallery/gallery_3.webp";
import gallery4 from "@/assets/images/gallery/gallery_4.webp";
import gallery5 from "@/assets/images/gallery/gallery_5.webp";
import gallery6 from "@/assets/images/gallery/gallery_6.webp";
import gallery7 from "@/assets/images/gallery/gallery_7.webp";
import gallery8 from "@/assets/images/gallery/gallery_8.webp";
import gallery9 from "@/assets/images/gallery/gallery_9.webp";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/ui/carousel";
import { Dialog } from "@/components/ui/dialog";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";

const PhotosCarousel = ({ initialSlide }: { initialSlide?: number }) => {
  return (
    <div className="w-full scale-100">
      <Carousel
        initialSlide={initialSlide}
        prevButtonClassName="fixed top-[50%] -translate-y-[42px] left-0 translate-x-[-46px] z-[1]"
        nextButtonClassName="fixed top-[50%] -translate-y-[42px] right-0 translate-x-[46px] z-[1]"
        thumbs
        elements={[
          <div className="relative w-full pb-[100%]" key={1}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full">
              <Image className="w-full h-full object-contain" src={gallery1} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={2}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full">
              <Image className="w-full h-full object-contain" src={gallery2} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={3}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full">
              <Image className="w-full h-full  object-contain" src={gallery3} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={4}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full">
              <Image className="w-full h-full object-contain" src={gallery4} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={5}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full">
              <Image className="w-full h-full object-contain" src={gallery5} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={6}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full">
              <Image className="w-full h-full object-contain" src={gallery6} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={7}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full">
              <Image className="w-full h-full object-contain" src={gallery7} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={8}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full">
              <Image className="w-full h-full object-contain" src={gallery8} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={9}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full">
              <Image className="w-full h-full  object-contain" src={gallery9} alt="project" priority />
            </figure>
          </div>,
        ]}
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
    >
      <Button type="button">Edit</Button>
    </Dialog>
  );
};

const Photo = ({ src, alt, onClick }: { src: StaticImageData; alt: string; onClick: () => void }) => {
  return (
    <button className="relative w-full pb-[100%] group" onClick={onClick}>
      <figure className="absolute top-0 left-0 overflow-hidden w-full h-full">
        <Image className="w-full h-full object-cover object-center group-hover:scale-110 duration-300" src={src} alt={alt} priority />
      </figure>
    </button>
  );
};

const PhotosGallery = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  return (
    <div className="space-y-4">
      <Typography.h3 className="border-b font-bold normal-case">Photos</Typography.h3>
      <div className="grid grid-cols-4 w-full gap-4">
        <Photo
          onClick={() => {
            setInitialSlide(0);
            setIsDialogOpen(true);
          }}
          src={gallery1}
          alt="project"
        />
        <Photo
          onClick={() => {
            setInitialSlide(1);
            setIsDialogOpen(true);
          }}
          src={gallery2}
          alt="project"
        />
        <Photo
          onClick={() => {
            setInitialSlide(2);
            setIsDialogOpen(true);
          }}
          src={gallery3}
          alt="project"
        />
        <Photo
          onClick={() => {
            setInitialSlide(3);
            setIsDialogOpen(true);
          }}
          src={gallery4}
          alt="project"
        />
        <Photo
          onClick={() => {
            setInitialSlide(4);
            setIsDialogOpen(true);
          }}
          src={gallery5}
          alt="project"
        />
        <Photo
          onClick={() => {
            setInitialSlide(5);
            setIsDialogOpen(true);
          }}
          src={gallery6}
          alt="project"
        />
        <Photo
          onClick={() => {
            setInitialSlide(6);
            setIsDialogOpen(true);
          }}
          src={gallery7}
          alt="project"
        />
        <Photo
          onClick={() => {
            setInitialSlide(7);
            setIsDialogOpen(true);
          }}
          src={gallery8}
          alt="project"
        />
        <Photo
          onClick={() => {
            setInitialSlide(8);
            setIsDialogOpen(true);
          }}
          src={gallery9}
          alt="project"
        />
      </div>
      <Button variant="outline" className="ml-auto block">
        See more
      </Button>
      <PhotosDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} initialSlide={initialSlide} />
    </div>
  );
};

export default PhotosGallery;
