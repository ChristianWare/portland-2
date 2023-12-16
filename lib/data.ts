import Elite from "../public/images/elite.png";
import Nier from "../public/images/nier.png";
import Cwagency from "../public/images/cwagency.png";
import Taco from "../public/images/taco.png";
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
    src: Taco,
    title: "Taco Bell Redesign",
    description:
      "This project is a redesign of Taco Bell's website. The front end was built with next.js, and the CMS is Sanity.io. The styling was done with CSS Modules so that I can have the most flexibility for design. Each menu item has its slug page where more details are given on that particular item.",
    href: "/",
    github: "https://github.com/ChristianWare/Tacobell-ii",
  },
  {
    src: Cwagency,
    title: "Chris Ware Agency",
    description:
      "Chris Ware Agency is a website where users can learn about the benefits of having a direct booking website over third-party listing platforms like Airbnb or VRBO. This front-end project with a markdown blog utilizes the local file system with node.js. All styling was done with CSS Modules.",
    href: "https://www.chrisware.agency/",
    github: "https://github.com/ChristianWare/chris_ware_agency_ii",
  },
  {
    src: Elite,
    title: "Elite Retreat Rentals",
    description:
      "Elite Retreat Rentals is a fictional website I built to show potential clients what a personalized booking website could look like. It allows users to view all available vacation rental properties listed by the owner, and they can make reservations on each property via the full-function booking system. Users can pay for each reservation in advance using Stripe. All are built in Next.js with Mongodb for the database and Next Auth for the authentication.",
    href: "https://case-study-one.vercel.app/",
    github: "https://github.com/ChristianWare/Case-Study-One",
  },
  {
    src: Nier,
    title: "Nier Transportation",
    description:
      "Nier Transportation is a client who needed a new website that advertised his luxury black car driving service. This project is primarily front-end built with Next.js and has a markdown blog that utilizes the local file system with node.js. All styling was done with CSS Modules.",
    href: "https://www.niertransportation.com/",
    github: "https://github.com/ChristianWare/Nier-Transport-Redesign",
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
    href: "/#home",
  },
  {
    id: 6,
    heading: "About",
    href: "#about",
  },
  {
    id: 11,
    heading: "Projects",
    href: "#projects",
  },
  {
    id: 16,
    heading: "Contact",
    href: "#contact",
  },
] as const;
