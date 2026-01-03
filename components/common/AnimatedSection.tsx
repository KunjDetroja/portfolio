'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number; // delay in ms
    direction?: 'up' | 'down' | 'left' | 'right';
    duration?: number; // duration in ms
    once?: boolean; // only animate once
}

export default function AnimatedSection({
    children,
    className,
    delay = 0,
    direction = 'up',
    duration = 600,
    once = true,
}: AnimatedSectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && element) {
                        observer.unobserve(element);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -70px 0px',
            }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [once]);

    const directionStyles = {
        up: 'translate-y-8',
        down: '-translate-y-8',
        left: 'translate-x-8',
        right: '-translate-x-8',
    };

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all ease-out',
                isVisible
                    ? 'opacity-100 translate-x-0 translate-y-0'
                    : `opacity-0 ${directionStyles[direction]}`,
                className
            )}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}
