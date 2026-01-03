import type { Education } from '@/types/education';
import { education } from '@/config/Education';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { EducationCard } from '../education/EducationCard';
import AnimatedSection from '../common/AnimatedSection';

export default function Education() {
    return (
        <Container className="mt-20">
            <SectionHeading heading="Education" />
            <div className="mt-6 flex flex-col gap-4">
                {education.map((edu: Education, index: number) => (
                    <AnimatedSection key={`${edu.institution}-${edu.degree}`} delay={index * 100}>
                        <EducationCard education={edu} />
                    </AnimatedSection>
                ))}
            </div>
        </Container>
    );
}

