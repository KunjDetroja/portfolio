import { Link } from 'next-view-transitions';
import React from 'react';

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <Link
      href={href ?? ''}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
    >
      {children && <div aria-hidden="true" className="size-4 shrink-0">{children}</div>}
      <p className="ml-1 text-sm font-bold">{name}</p>
    </Link>
  );
}
