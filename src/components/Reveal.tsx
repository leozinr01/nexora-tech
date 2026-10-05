import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { cn } from '../lib/cn';

interface RevealProps {
  children: ReactNode;
  /** Atraso em ms — útil para escalonar itens de uma grade */
  delay?: number;
  as?: 'div' | 'li' | 'article';
  className?: string;
}

/**
 * Fade-in + slide-up quando o elemento entra na viewport (uma única vez).
 * A animação é feita em CSS (.reveal) e é desativada com prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, as: Tag = 'div', className }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn('reveal', visible && 'is-visible', className)}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
