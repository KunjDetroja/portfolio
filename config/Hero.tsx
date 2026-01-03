import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import Mail from "@/components/svgs/Mail";
import X from "@/components/svgs/X";
import MongoDB from "@/components/technologies/MongoDB";
import NodeJs from "@/components/technologies/NodeJs";
import ReactIcon from "@/components/technologies/ReactIcon";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";

// Social Links Configuration
export const socialLinks = [
    // {
    //     name: 'X',
    //     href: 'https://x.com/kunjdetroja',
    //     icon: <X />,
    // },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/kunjdetroja',
        icon: <LinkedIn />,
    },
    {
        name: 'Github',
        href: 'https://github.com/KunjDetroja',
        icon: <Github />,
    },
    {
        name: 'Email',
        href: 'mailto:kunjdetroja52@gmail.com',
        icon: <Mail />,
    },
];

// Skill Tags Configuration
export const skillTags = [
    { name: 'TypeScript', href: 'https://typescriptlang.org', icon: <TypeScript /> },
    { name: 'React', href: 'https://react.dev', icon: <ReactIcon /> },
    { name: 'Node.js', href: 'https://nodejs.org', icon: <NodeJs /> },
    { name: 'MongoDB', href: 'https://mongodb.com', icon: <MongoDB /> },
    { name: 'Tailwind CSS', href: 'https://tailwindcss.com', icon: <TailwindCss /> },
];