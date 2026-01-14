import { Link } from 'next-view-transitions';
import Image from 'next/image';
import Container from '../common/Container';
import Skill from '../common/Skill';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { navbarConfig } from '@/config/Navbar';
import React from 'react';
import { skillTags, socialLinks } from '@/config/Hero';
import AnimatedSection from '../common/AnimatedSection';

export default function Hero() {
    return (
        <Container className="mx-auto max-w-5xl">
            {/* Image */}
            <AnimatedSection delay={0}>
                <Image
                    src={navbarConfig.logo.src}
                    alt="hero"
                    width={500}
                    height={500}
                    className="size-24 rounded-full object-cover"
                />
            </AnimatedSection>

            {/* Text Area */}
            <AnimatedSection delay={100}>
                <div className="mt-8 flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">
                        Hi, I&apos;m Kunj — <span className="text-secondary">A Full Stack Developer.</span>
                    </h1>

                    <p className="mt-4 text-base md:text-lg text-neutral-500 leading-[38px]">
                        I build scalable web apps using{' '}
                        {skillTags.map((skill, index) => {
                            const isLast = index === skillTags.length - 1;
                            const isFirst = index === 0;
                            return (
                                <React.Fragment key={skill.name}>
                                    {!isFirst && !isLast && <> , </>}
                                    {isLast && <> and </>}
                                    <Skill
                                        name={skill.name}
                                        href={skill.href}
                                    >
                                        {skill.icon}
                                    </Skill>
                                </React.Fragment>
                            )
                        })}
                        {' '}. With a focus on{' '}
                        <span className="font-semibold text-foreground">fintech</span>,{' '}
                        <span className="font-semibold text-foreground">HRMS</span>, and{' '}
                        <span className="font-semibold text-foreground">AI</span>
                        {' '}domains, driven by clean code and great UX.
                    </p>
                </div>
            </AnimatedSection>

            {/* Buttons */}
            <AnimatedSection delay={200}>
                <div className="mt-8 flex gap-4">
                    <Button
                        variant="outline"
                        className="inset-shadow-indigo-500"
                        asChild
                    >
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <CV />
                            Download CV
                        </a>
                    </Button>
                    <Button
                        variant="default"
                        className="inset-shadow-indigo-500"
                    >
                        <Chat />
                        <Link href="/contact">Get in touch</Link>
                    </Button>
                </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection delay={300}>
                <div className="mt-8 flex gap-2">
                    {socialLinks.map((link) => (
                        <Tooltip delayDuration={0} key={link.name}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary flex items-center gap-2"
                                >
                                    <span className="size-6">
                                        {link.icon}
                                    </span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{link.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </AnimatedSection>
        </Container>
    );
}