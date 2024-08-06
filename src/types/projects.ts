import type { StaticImageData } from "next/image";

export type Project = {
  title: string;
  meta_description: string;
  slug: string;
  image: StaticImageData;
  description: string;
};
