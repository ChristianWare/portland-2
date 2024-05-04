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
    heading: "Contact",
    href: "#contact",
  },
] as const;

export const faqs = [
  {
    id: 36,
    question:
      "Why should I have my own website instead of relying on listing platforms like Airbnb?",
    answer:
      "This allows you to have more control over your property, lower fees, and personalized branding. You have direct communication with guests and can build a loyal customer base.",
  },
  {
    id: 36.1,
    question:
      "How do guests make reservations on a website that allows direct bookings?",
    answer:
      "Guests can browse your property, view details, and make reservations directly through your website. You have the flexibility to set your own booking policies and payment processes.",
  },
  {
    id: 36.2,
    question: "What customizable features do you offer?",
    answer:
      "You can customize the website design, branding elements, property details, pricing, and policies. We offer flexibility to tailor the platform to your unique needs.",
  },
  {
    id: 36.3,
    question: "Will it be easy for guests to find my website?",
    answer:
      "We implement SEO strategies to improve the visibility of your website on search engines. Additionally, we can assist with marketing strategies to drive traffic to your platform.",
  },
  {
    id: 36.4,
    question:
      "How do I manage bookings and communicate with guests on the platform?",
    answer:
      "We provide a user-friendly dashboard where you can manage bookings, communicate with guests, and access important information. Training is offered to ensure you can navigate the platform with ease.",
  },
  {
    id: 36.5,
    question:
      "Can I integrate the direct booking website with my existing property management system (PMS)?",
    answer:
      "Depending on your PMS, integration may be possible. We'll assess compatibility and work towards seamless integration to streamline your management processes.",
  },
  {
    id: 37,
    question: "How long does it typically take to build a website?",
    answer:
      "The timeline can vary based on the complexity of the project. On average, a small business website takes around 2 to 4 weeks from initial concept to launch.",
  },
  {
    id: 42,
    question: "Do you offer website maintenance and support?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to ensure your website remains up-to-date, secure, and functioning optimally after launch.",
  },
  {
    id: 46,
    question:
      "Can you assist with transferring my existing domain name to your hosting service?",
    answer:
      "Absolutely, we can guide you through the process of transferring your domain name to our hosting service. We'll ensure a smooth transition so that your website remains accessible with minimal downtime during the switch.",
  },
] as const;
