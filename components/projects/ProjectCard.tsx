import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { Project } from '@/types/project';
import { statusLabel } from '@/lib/project-labels';
export function ProjectCard({ project }: { project: Project }) {
 return <article className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card">
  <Link href={project.projectDetailsPageSlug} tabIndex={-1} aria-hidden="true"><Image src={project.image} alt="" width={1200} height={675} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px" className="aspect-video w-full object-cover" /></Link>
  <div className="flex flex-1 flex-col gap-4 p-6">
   <h3 className="text-xl font-semibold"><Link className="hover:underline underline-offset-4" href={project.projectDetailsPageSlug}>{project.title}</Link></h3>
   <p className="text-secondary">{project.description}</p>
   <ul aria-label="Technologies" className="flex flex-wrap gap-2 text-xs text-secondary">{project.technologies.map(t=><li key={t.name} className="rounded border px-2 py-1">{t.name}</li>)}</ul>
   <div className="mt-auto flex flex-wrap items-center gap-4 pt-2 text-sm"><Link className="inline-flex min-h-11 items-center underline underline-offset-4" href={project.projectDetailsPageSlug}>Read case study <span className="sr-only">for {project.title}</span></Link>{project.live && <a className="inline-flex min-h-11 items-center underline" href={project.live} target="_blank" rel="noopener noreferrer">Website<span className="sr-only"> for {project.title} (opens in new tab)</span></a>}{project.github && <a className="inline-flex min-h-11 items-center underline" href={project.github} target="_blank" rel="noopener noreferrer">Source<span className="sr-only"> for {project.title} (opens in new tab)</span></a>}<div className="ml-auto flex items-center gap-2 text-xs text-secondary"><span>{statusLabel(project.status)}</span>{project.platforms?.includes('Mobile') && <><span aria-hidden="true">&middot;</span><span>Mobile</span></>}</div></div>
  </div>
 </article>;
}
