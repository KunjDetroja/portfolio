import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import SocketIo from '@/components/technologies/SocketIo';
import Stripe from '@/components/technologies/Stripe';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import { Experience } from '@/types/experience';

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: false,
    company: 'The Bilions',
    position: 'MERN Stack Developer',
    location: 'Work from Home',
    image: '/company/bilion.png',
    description: [
      'Built and deployed full-stack applications across fintech, HRMS, and AI domains using MERN stack.',
      'Developed scalable backend modules with RESTful APIs and real-time features via Socket.IO.',
      'Implemented AI-powered proposal generation system using LLMs and Puppeteer for automated PDF output.',
      'Integrated Stripe for secure payment processing and subscription management.',
      'Redesigned UI workflows in Figma and implemented with React, Redux RTK Query, and Tailwind CSS.',
    ],
    startDate: 'February 2025',
    endDate: 'Present',
    website: 'https://bilions.co/',
    linkedin: 'https://www.linkedin.com/company/bilions/',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Socket.io',
        href: 'https://socket.io/',
        icon: <SocketIo />,
      },
      {
        name: 'Stripe',
        href: 'https://stripe.com/',
        icon: <Stripe />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
    ],
  },
  {
    isCurrent: false,
    company: 'Trakky Techno',
    position: 'Backend Developer Intern',
    location: 'Work from Home',
    image: '/company/trakky.png',
    description: [
      'Supported backend development with Django framework.',
      'Managed SQLite databases and optimized queries for better performance.',
      'Collaborated with cross-functional teams on feature development.',
    ],
    startDate: 'July 2023',
    endDate: 'October 2023',
    technologies: [
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
    ],
    // website: 'https://trakky.in/',
    // linkedin: 'https://www.linkedin.com/company/trakky/',
  },
];
