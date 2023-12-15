import Elite from "../public/images/elite.png";
import Typescript from "../public/icons/typescript.png";
import NextJs from "../public/icons/next.png";
import ReactJs from "../public/icons/react.png";
import Tailwind from "../public/icons/tailwind.png";
import Framer from "../public/icons/framer.png";
import NodeJs from "../public/icons/nodejs.png";
import Mongo from "../public/icons/mongodb.png";
import Prisma from "../public/icons/prisma.png";
import Strapi from "../public/icons/strapi.png";
import Sanity from "../public/icons/sanity.png";

export const projects = [
  {
    src: Elite,
    title: "Taco Bell Redesign",
    description:
      "This website is a redesign of Taco Bell's web page. I wanted the main focus on the site to be the menu so that it is able to be filtered to show breakfast, lunch, and all items on the menu at the same time. The Site is mobile responsive, and received high scores on Google's Page Speed Insights.",
  },
  {
    src: Elite,
    title: "Chris Ware Agency",
    description:
      "This website is a redesign of Taco Bell's web page. I wanted the main focus on the site to be the menu so that it is able to be filtered to show breakfast, lunch, and all items on the menu at the same time. The Site is mobile responsive, and received high scores on Google's Page Speed Insights.",
  },
  {
    src: Elite,
    title: "Elite Retreat Rentals",
    description:
      "This website is a redesign of Taco Bell's web page. I wanted the main focus on the site to be the menu so that it is able to be filtered to show breakfast, lunch, and all items on the menu at the same time. The Site is mobile responsive, and received high scores on Google's Page Speed Insights.",
  },
  {
    src: Elite,
    title: "Nier Transportation",
    description:
      "This website is a redesign of Taco Bell's web page. I wanted the main focus on the site to be the menu so that it is able to be filtered to show breakfast, lunch, and all items on the menu at the same time. The Site is mobile responsive, and received high scores on Google's Page Speed Insights.",
  },
] as const;

export const frontEnd = [
  {
    icon: NextJs,
    name: "Next.js",
  },
  {
    icon: ReactJs,
    name: "React",
  },
  {
    icon: Typescript,
    name: "Typescript",
  },
  {
    icon: Tailwind,
    name: "Tailwind",
  },
  {
    icon: Framer,
    name: "Framer Motion",
  },
] as const;

export const backEnd = [
  {
    icon: NodeJs,
    name: "Node.js",
  },
  {
    icon: Mongo,
    name: "Mongo DB",
  },
  {
    icon: Prisma,
    name: "Prisma",
  },
  {
    icon: Strapi,
    name: "Strapi",
  },
  {
    icon: Sanity,
    name: "Sanity",
  },
] as const;


export const footer = [
  {
    id: 1,
    heading: "Home",
    href: "/",
  },
  {
    id: 6,
    heading: "About",
    href: "/about",
  },
  {
    id: 11,
    heading: "Features",
    href: "/features",
  },
  {
    id: 16,
    heading: "Contact",
    href: "/contact",
  },
  {
    id: 17,
    heading: "Blog",
    href: "/blog",
  },
] as const;