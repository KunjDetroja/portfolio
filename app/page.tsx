import Container from '@/components/common/Container';
import Hero from '@/components/landing/Hero';
import Experience from '@/components/landing/Experience';
import Projects from '@/components/landing/Projects';
import About from '@/components/landing/About';
import Education from '@/components/landing/Education';
import Life from '@/components/landing/Life';
import AnimatedSection from '@/components/common/AnimatedSection';
import CTA from '@/components/landing/CTA';

export default function page() {
  return (
    <Container className="min-h-screen py-12">
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection delay={50}>
        <Experience />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Projects />
      </AnimatedSection>
      <AnimatedSection delay={150}>
        <Education />
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <Life />
      </AnimatedSection>
      <AnimatedSection delay={250}>
        <About />
      </AnimatedSection>
      {/* <AnimatedSection delay={300}>
        <CTA />
      </AnimatedSection> */}
    </Container>
  );
}
