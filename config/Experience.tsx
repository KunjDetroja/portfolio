import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import SocketIo from '@/components/technologies/SocketIo';
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
      'Total Liquor: built buyer/seller interfaces, relational order APIs, Finix payment flows, and real-time operational updates.',
      'AOG: worked across React dashboards, React Native/Expo mobile flows, and MySQL-backed wallet and rewards services.',
      'HRMS: implemented employee, attendance, payroll, organization, and Google Drive integration workflows.',
      'Winbid: built procurement discovery, document processing, AI-assisted generation, progress reporting, and DOCX export.',
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
        name: 'Finix',
        href: 'https://finix.com/',
        icon: null,
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
    position: 'Backend Developer Associate',
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
      { name: 'Django', href: 'https://www.djangoproject.com/', icon: null },
      { name: 'SQLite', href: 'https://www.sqlite.org/', icon: null },
    ],
    // website: 'https://trakky.in/',
    // linkedin: 'https://www.linkedin.com/company/trakky/',
  },
];
