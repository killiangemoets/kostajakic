import { FolderOpen } from "@/assets/icons/folder-open";
import { PianoIcon } from "@/assets/icons/piano";
import { VideoIcon } from "@/assets/icons/video";

export const SIDEBAR_ITEMS = [
  {
    name: "Concerts",
    href: "/backoffice/concerts",
    icon: PianoIcon,
  },
  {
    name: "Gallery",
    href: "/backoffice/gallery",
    icon: VideoIcon,
  },
  {
    name: "Projects",
    href: "/backoffice/projects",
    icon: FolderOpen,
  },
] as const;
