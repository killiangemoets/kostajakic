import type { GalleryPhoto } from "../types/gallery";
import gallery1 from "@/assets/images/gallery/gallery_1.webp";
import gallery2 from "@/assets/images/gallery/gallery_2.webp";
import gallery3 from "@/assets/images/gallery/gallery_3.webp";
import gallery4 from "@/assets/images/gallery/gallery_4.webp";
import gallery5 from "@/assets/images/gallery/gallery_5.webp";
import gallery6 from "@/assets/images/gallery/gallery_6.webp";
import gallery7 from "@/assets/images/gallery/gallery_7.webp";
import gallery8 from "@/assets/images/gallery/gallery_8.webp";
import gallery9 from "@/assets/images/gallery/gallery_9.webp";

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: gallery1,
    alt: "Gallery 1",
    downloadLink: "photos/gallery_1.jpg",
  },
  {
    src: gallery2,
    alt: "Gallery 2",
    downloadLink: "photos/gallery_2.jpg",
  },
  {
    src: gallery3,
    alt: "Gallery 3",
    downloadLink: "photos/gallery_3.jpg",
  },
  {
    src: gallery4,
    alt: "Gallery 4",
    downloadLink: "photos/gallery_4.jpg",
  },
  {
    src: gallery5,
    alt: "Gallery 5",
    downloadLink: "photos/gallery_5.jpg",
  },
  {
    src: gallery6,
    alt: "Gallery 6",
    downloadLink: "photos/gallery_6.jpg",
  },
  {
    src: gallery7,
    alt: "Gallery 7",
    downloadLink: "photos/gallery_7.jpg",
  },
  {
    src: gallery8,
    alt: "Gallery 8",
    downloadLink: "photos/gallery_8.jpg",
  },
  {
    src: gallery9,
    alt: "Gallery 9",
    downloadLink: "photos/gallery_9.jpg",
  },
] as const;
