import type { Experience } from '@/types/experience';
import { experiences } from '@/config/Experience';
import { Link } from 'next-view-transitions';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ExperienceCard } from '../experience/ExperienceCard';
import { Button } from '../ui/button';
import AnimatedSection from '../common/AnimatedSection';

export default function Experience() {
  return (
    <Container className="mt-20">
      <SectionHeading heading="Experience" />
      <div className="mt-4 flex flex-col gap-8">
        {experiences.slice(0, 1).map((experience: Experience) => (
          <AnimatedSection key={`${experience.company}-${experience.position}`} delay={0}>
            <ExperienceCard experience={experience} />
          </AnimatedSection>
        ))}
        {experiences.length > 1 && (
          <AnimatedSection key={`${experiences[1].company}-${experiences[1].position}`} delay={100}>
            <ExperienceCard
              experience={experiences[1]}
              collapsible={true}
              defaultCollapsed={true}
            />
          </AnimatedSection>
        )}
      </div>
      {experiences.length > 2 && (
        <div className="mt-8 flex justify-center">
          <Button variant="outline">
            <Link href="/work-experience">Show all work experiences</Link>
          </Button>
        </div>
      )}
    </Container>
  );
}