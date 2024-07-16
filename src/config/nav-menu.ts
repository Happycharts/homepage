import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Explore",
      items: [
        {
          title: "Github",
          href: "https://github.com/happycharts/happybase",
          description: "Find out more about Happybase on our Github.",
          image: "/images/examples/landing.jpg",
        },
        {
          title: "Discord",
          href: "https://discord.gg/TjJxa93JBY",
          description: "Join our growing Discord community for data professionals",
          image: "/images/examples/changelog.jpg",
        },
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
      ],
    },
  ],
  links: [
    // {
    //   title: "Example",
    //   href: "/example",
    //   description: "Example description",
    //   image: "/images/examples/image.jpg",
    // },
  ],
};
