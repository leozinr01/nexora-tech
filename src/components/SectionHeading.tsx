import type { ReactNode } from 'react';
import { cn } from '../lib/cn';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  /** id da seção — gera o id do título usado em aria-labelledby */
  sectionId: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'default' | 'inverse';
  className?: string;
}

export function Eyebrow({
  children,
  tone = 'default',
}: {
  children: ReactNode;
  tone?: 'default' | 'inverse';
}) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2.5 font-mono text-sm font-medium tracking-[0.16em] uppercase',
        tone === 'inverse' ? 'text-accent-300' : 'text-brand-700',
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-current opacity-60" />
      {children}
    </p>
  );
}

export function SectionHeading({
  sectionId,
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'default',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={`${sectionId}-titulo`}
        className={cn(
          'mt-4 text-3xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]',
          tone === 'inverse' ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed text-pretty sm:text-lg',
            tone === 'inverse' ? 'text-brand-100/80' : 'text-slate-600',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
