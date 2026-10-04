import Container from '@/components/common/Container';
import Hero from '@/components/landing/Hero';
import Experience from '@/components/landing/Experience';
import Projects from '@/components/landing/Projects';
import About from '@/components/landing/About';
import Education from '@/components/landing/Education';
import Life from '@/components/landing/Life';
import AnimatedSection from '@/components/common/AnimatedSection';
import HomeStructuredData from '@/components/seo/HomeStructuredData';

export default function Page() {
  return (
    <Container className="min-h-screen py-12">
      <HomeStructuredData />
      <AnimatedSection><Hero /></AnimatedSection>
      <AnimatedSection><Projects /></AnimatedSection>
      <AnimatedSection><Experience /></AnimatedSection>
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Education /></AnimatedSection>
      <AnimatedSection><Life /></AnimatedSection>
      <div className="mt-16 text-center">
        <a className="inline-flex min-h-11 items-center underline underline-offset-4" href="/contact">Discuss an employment opportunity or freelance project</a>
      </div>
    </Container>
  );
}
