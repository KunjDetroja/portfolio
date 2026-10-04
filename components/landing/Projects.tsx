'use client';

import { getCuratedProjects } from '@/lib/projects';
import { Link } from 'next-view-transitions';
import Container from '../common/Container';
import { ProjectList } from '../projects/ProjectList';
import { Button } from '../ui/button';

export default function Projects() {
  return (
    <Container className="mt-16">
      <section id="selected-work" aria-labelledby="selected-work-heading" className="scroll-mt-32">
        <h2 id="selected-work-heading" className="text-2xl font-bold">Selected work</h2>
        <p className="mt-2 text-secondary">Personal products and company projects across booking, commerce, and mobile.</p>

        <ProjectList className="mt-8" projects={getCuratedProjects()} />
        <div className="mt-8 flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/projects">Show all projects</Link>
          </Button>
        </div>
      </section>
    </Container>
  );
}
