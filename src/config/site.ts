import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Happybase",
  description:
    "Collaborative SQL documents for teams of all sizes ",
  url: "https://www.happybase.co",
  ogImage: "https://astro-nomy.vercel.app/og.jpg",
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
      { title: "Roadmap", href: "https://github.com/happycharts/happybase/" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Terms", href: "/privacy" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "OSS",
    items: [
      { title: "Contributors", href: "/contributors" },
      { title: "Github", href: "https://github.com/happycharts/happybase" },
      { title: "Discord", href: "https://discord.gg/fQ9s8h8" },
    ],
  },
];