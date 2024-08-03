import type { DocsConfig } from "@/types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/getting-started/",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/getting-started/",
        },
      ],
    },
    {
      title: "Architecture",
      items: [
        {
          title: "Why tho?",
          href: "/docs/documentation/",
        },
        {
          title: "Architecture",
          href: "/docs/documentation/architecture",
        },
        {
          title: "Concepts",
          href: "/docs/documentation/concepts",
        },
      ],
    },
    {
      title: "Commerce",
      items: [
        {
          title: "Stripe Connect",
          href: "/docs/documentation/commerce/stripe-connect",
        },
        {
          title: "Portals",
          href: "/docs/documentation/commerce/portals",
        },
        {
          title: "Payment Link Flow",
          href: "/docs/documentation/commerce/payment-links",
        },
        {
          title: "Handling Data Fulfillment",
          href: "/docs/documentation/commerce/data-fulfillment",
        },
      ],
    },
  ],
};
