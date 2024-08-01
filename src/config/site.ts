import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Happybase",
  description:
    "Client-side data-sharing fit for security aware teams ",
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
    title: "Alternative To:",
    items: [
      { title: "Census Embedded", href: "/vs/census-embedded" },
      { title: "Prequel", href: "/vs/prequel" },
    ],
  },
];