 'use client';
import { useEffect, useRef, ReactNode } from 'react';
interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  once?: boolean;
}
export default function AnimatedSection({ children, className, delay = 0, duration = 600 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!element || !('IntersectionObserver' in window) || motion.matches) return;
    let animation: Animation | undefined;
    const cancel = () => { if (motion.matches) animation?.cancel(); };
    motion.addEventListener('change', cancel);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (!motion.matches) animation = element.animate(
        [{ transform: 'translateY(12px)' }, { transform: 'translateY(0)' }],
        { duration, delay, easing: 'ease-out' },
      );
      observer.disconnect();
    }, { threshold: 0.1 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      animation?.cancel();
      motion.removeEventListener('change', cancel);
    };
  }, [delay, duration]);
  // Content is visible in server-rendered HTML and if JavaScript cannot run.
  return <div ref={ref} className={className}>{children}</div>;
}
