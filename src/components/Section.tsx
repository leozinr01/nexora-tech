import type { ReactNode } from 'react';
import { cn } from '../lib/cn';
import { Container } from './Container';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

/** Seção padrão: âncora com compensação do header fixo e título associado via aria. */
export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titulo`}
      className={cn('relative scroll-mt-16 py-20 sm:py-28', className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
