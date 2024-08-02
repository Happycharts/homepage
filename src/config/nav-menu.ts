import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "About",
      items: [
        {
          title: "Contact",
          href: "/contact",
          description:
            "Have a question? Want to learn more? Contact us.",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
        {
          title: "Pricing",
          href: "/pricing",
          description: "Pricing cards, FAQs and more content with price.",
          image: "/images/examples/pricing.jpg",
        },
        {
          title: "Hex Example",
          href: "https://app.happybase.cp/portal/hex-example",
          description:
            "Check out the demonstration Hex portal",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
        {
          title: "Observable Example (Coming soon!)",
          href: "",
          description:
            "Check out the demonstration Observable portal",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
      ],
    },

  ],
  links: [
     {
       title: "Documentation",
       href: "/docs/getting-started/",
       description: "Learn more about the features and how to use them.",
       image: "/images/examples/image.jpg",
     },
  ],
};
