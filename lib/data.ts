import Elite from "../public/images/elite.png";
import Nier from "../public/images/nier.png";
import Cwagency from "../public/images/cwagency.png";
import Taco from "../public/images/taco.png";

export const projects = [
  {
    src: Taco,
    title: "Taco Bell Redesign",
    description:
      "This project is a redesign of Taco Bell's website. The front end was built with next.js, and the CMS is Sanity.io. The styling was done with CSS Modules so that I can have the most flexibility for design. Each menu item has its slug page where more details are given on that particular item.",
    href: "https://www.livemas.dev/",
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
      "Elite Retreat Rentals is a fictional website I built to show potential clients what a personalized booking website could look like. It allows users to view all available vacation rental properties listed by the owner, and they can make reservations on each property via the full-function booking system. Users can pay for each reservation in advance using Stripe. All are built in Next.js with Mongodb for the database and Next Auth for the authentication. MERN Stack.",
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

export const experince = [
  {
    title: "Freelance Developer",
    years: "JAN 2020 - Present",
  },
  {
    title: "Contract Web Developer - KNI",
    years: "JAN 2023 - AUG 2023",
  },
  {
    title: "Contract Software Engineer - Joyous App",
    years: "OCT 2022 - DEC 2022",
  },
  {
    title: "Software Engineer - Mentorworks",
    years: "JAN 2022 - DEC 2022",
  },
  {
    title: "Contract Frontend Developer - Fandem",
    years: "JAN 2021 - Jan 2022",
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
    heading: "FAQ",
    href: "#faq",
  },
] as const;

export const faqs = [
  {
    id: 36,
    question: "What is your experience with Next.js?",
    answer:
      "I have been working with Next.js since version 10 was available with the pages router. Now I build all my projects with the latest verion 14, which utilizes the app router.",
  },
  {
    id: 36.1,
    question: "Can you explain your role in previous Next.js projects?",
    answer:
      "I have contributed to many Next.js projects, both large and small. I have desiged components, implemented server-side rendering, optimized performance, and integrated APIs.",
  },
  {
    id: 36.2,
    question: "What technologies do you use alongside Next.js?",
    answer:
      "I am proficient in other technologies such as React, Node.js, MongoDB, GraphQL, and many more.",
  },
  {
    id: 36.3,
    question: "How do you handle state management in Next.js applications?",
    answer:
      "Depending on the project/situation, I use the built in React features useState and useEffect. But if the state needs to be accessible accross the entire app, then I'll use libraries like Redux or Zustand. Sometimes I'll use the built in Context API.",
  },
  {
    id: 36.4,
    question: "Have you worked with Next.js for SEO optimization?",
    answer:
      "Yes, I have optimized many Next.js applications for SEO by implementing dynamic routing, meta tags, and structured data to improve search engine visibility.",
  },
] as const;
