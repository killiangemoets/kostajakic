import { Video } from "lucide-react";
import { Piano } from "lucide-react";
import { FolderOpen } from "lucide-react";

export const NAVBAR_ITEMS = [
  {
    name: "About",
    href: "/about",
    desktopMarginTop: "3rem",
  },
  {
    name: "Concerts",
    href: "/concerts",
    desktopMarginTop: "0rem",
  },
  {
    name: "Gallery",
    href: "/gallery",
    desktopMarginTop: "2rem",
  },
  {
    name: "Projects",
    href: "/projects",
    desktopMarginTop: "4rem",
  },
  {
    name: "Contact",
    href: "/contact",
    desktopMarginTop: "1rem",
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
