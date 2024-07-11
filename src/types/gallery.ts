import type { StaticImageData } from "next/image";

export type GalleryPhoto = {
  src: StaticImageData;
  alt: string;
  downloadLink: string;
};
