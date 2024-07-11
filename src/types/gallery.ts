import type { StaticImageData } from "next/image";

export type GalleryPhoto = {
  src: StaticImageData;
  alt: string;
  downloadLink: string;
};

export type GalleryVideo = {
  src: string;
  title: string;
};
