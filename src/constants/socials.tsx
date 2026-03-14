import {
  IconArticle,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

const hashnodeUrl = process.env.NEXT_PUBLIC_HASHNODE_URL;

export const socials = [
  {
    href: "https://x.com/BasirKhan418",
    label: "X",
    icon: IconBrandX,
  },
  {
    href: "https://linkedin.com/in/basirkhan418",
    label: "LinkedIn",
    icon: IconBrandLinkedin,
  },
  {
    href: "https://github.com/BasirKhan418",
    label: "GitHub",
    icon: IconBrandGithub,
  },
  ...(hashnodeUrl
    ? [
        {
          href: hashnodeUrl,
          label: "Hashnode",
          icon: IconArticle,
        },
      ]
    : []),
  {
    href: "mailto:khanbasir5555@gmail.com",
    label: "Email",
    icon: IconMail,
  },
];
