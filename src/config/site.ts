import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Happybase",
  description:
    "Endlessly flexible access portals for commercializing your data ",
  url: "https://www.happybase.co",
  ogImage: "https://www.happybase.co/og.jpg",
  links: {
    twitter: "",
    github: "https://github.com/happycharts/happybase",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "Pricing", href: "/pricing" },
      { title: "About", href: "/about" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Open Source",
    items: [
      { title: "Documentation", href: "/docs/getting-started/" },
      { title: "GitHub", href: "https://github.com/happycharts/happybase" },
    ],
  },
];