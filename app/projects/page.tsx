import Container from '@/components/common/Container';
import { ProjectExplorer } from '@/components/projects/ProjectExplorer';
import { Separator } from '@/components/ui/separator';
import { getPublishedProjects } from '@/lib/projects';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import AnimatedSection from '@/components/common/AnimatedSection';

export const metadata: Metadata = {
  ...getMetadata('/projects'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function ProjectsPage() {
  return (
    <Container className="py-12">
      <div className="space-y-8">
        {/* Header */}
        <AnimatedSection>
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Projects
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              My projects and work across different technologies and domains.
            </p>
          </div>
        </AnimatedSection>

        <Separator />

        {/* Projects */}
        <AnimatedSection delay={100}>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                All Projects
                {getPublishedProjects().length > 0 && (
                  <span className="ml-2 text-sm font-normal text-muted-foreground">
                    ({getPublishedProjects().length}{' '}
                    {getPublishedProjects().length === 1 ? 'project' : 'projects'})
                  </span>
                )}
              </h2>
            </div>

            <ProjectExplorer />
          </div>
        </AnimatedSection>
      </div>
    </Container>
  );
}

