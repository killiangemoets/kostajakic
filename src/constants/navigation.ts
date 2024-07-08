import { Video } from "lucide-react";
import { Piano } from "lucide-react";
import { FolderOpen } from "lucide-react";

export const NAVBAR_ITEMS = [
  {
    name: "About",
    href: "/about",
    desktopClassName: "mt-12",
  },
  {
    name: "Concerts",
    href: "/concerts",
    desktopClassName: "",
  },
  {
    name: "Gallery",
    href: "/gallery",
    desktopClassName: "mt-8",
  },
  {
    name: "Projects",
    href: "/projects",
    desktopClassName: "mt-16",
  },
  {
    name: "Contact",
    href: "/contact",
    desktopClassName: "mt-4",
  },
] as const;

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
