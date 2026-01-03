import { type Project } from '@/types/project';
import { ProjectCard } from './ProjectCard';
import AnimatedSection from '../common/AnimatedSection';

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

export function ProjectList({ projects, className }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 ${className}`}
    >
      {projects.map((project: Project, index: number) => (
        <AnimatedSection key={project.title} delay={index * 100}>
          <ProjectCard project={project} />
        </AnimatedSection>
      ))}
    </div>
  );
}
