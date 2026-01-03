import Image from 'next/image';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import ReactIcon from '../technologies/ReactIcon';
import NodeJs from '../technologies/NodeJs';
import TypeScript from '../technologies/TypeScript';
import MongoDB from '../technologies/MongoDB';
import PostgreSQL from '../technologies/PostgreSQL';
import TailwindCss from '../technologies/TailwindCss';
import Figma from '../technologies/Figma';
import Github from '../technologies/Github';

const mySkills = [
  <ReactIcon key="react" />,
  <TypeScript key="typescript" />,
  <NodeJs key="nodejs" />,
  <MongoDB key="mongodb" />,
  <PostgreSQL key="postgresql" />,
  <TailwindCss key="tailwindcss" />,
  <Github key="git" />,
  <Figma key="figma" />,
];

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      {/* About me */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <Image
          src="/assets/logo.png"
          alt="About"
          width={100}
          height={100}
          className="border-secondary size-60 rounded-md border-2 bg-blue-300 dark:bg-yellow-300"
        />
        <div className="mt-0">
          <h3 className="text-2xl font-bold">Kunj Detroja</h3>
          <p className="text-secondary mt-2">
            I&apos;m a Full Stack web developer and Open Source Contributor. I love building products to solve real-world problems. I&apos;m specialized in building MVPs and scalable applications across fintech, HRMS, and AI domains.
          </p>
          <p className="text-primary mt-8 font-bold">Skills</p>
          <div className="flex flex-wrap gap-2">
            {mySkills.map((skill) => (
              <Tooltip key={skill.key}>
                <TooltipTrigger asChild>
                  <div className="mt-2 size-6 hover:cursor-pointer">{skill}</div>
                </TooltipTrigger>
                <TooltipContent>{skill.key}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

