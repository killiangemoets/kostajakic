import { Video } from "lucide-react";
import { Piano } from "lucide-react";
import { FolderOpen } from "lucide-react";

export const SIDEBAR_ITEMS = [
  {
    name: "Concerts",
    href: "/backoffice/concerts",
    icon: Piano,
  },
  {
    name: "Gallery",
    href: "/backoffice/gallery",
    icon: Video,
  },
  {
    name: "Projects",
    href: "/backoffice/projects",
    icon: FolderOpen,
  },
] as const;
