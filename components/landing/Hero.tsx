import { Link } from 'next-view-transitions';
import Image from 'next/image';
import Container from '../common/Container';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import ArrowRight from '../svgs/ArrowRight';
import { Button } from '../ui/button';
import { navbarConfig } from '@/config/Navbar';
import { socialLinks } from '@/config/Hero';

export default function Hero() {
  return (
    <Container>
      <section aria-labelledby="intro-heading">
        <div className="flex items-center gap-4">
          <Image src={navbarConfig.logo.src} alt="Kunj Detroja" width={80} height={80}
            sizes="(min-width: 640px) 80px, 64px"
            className="size-16 shrink-0 rounded-full object-cover sm:size-20" priority />
          <div className="min-w-0">
            <h1 id="intro-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">Kunj Detroja</h1>
            <p className="mt-1 text-lg text-secondary">Full Stack Developer</p>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
          I build web and mobile products with React, Next.js, Node.js, and React Native.
          My work connects user interfaces with APIs, databases, payments, and real-time
          workflows across booking platforms, commerce, and internal tools.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild><a href="#selected-work">View selected work <ArrowRight className="size-4" /></a></Button>
          <Button variant="outline" asChild><a href="/resume.pdf" target="_blank" rel="noopener noreferrer"><CV />Download CV</a></Button>
          <Button variant="ghost" asChild><Link href="/contact"><Chat />Get in touch</Link></Button>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p className="text-sm text-secondary">Employment opportunities and freelance projects.</p>
          <div className="flex gap-1" aria-label="Profile links">
            {socialLinks.map(link => (
              <a key={link.name} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-md text-secondary transition-colors hover:bg-muted/30 hover:text-foreground">
                <span aria-hidden="true" className="size-5">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
