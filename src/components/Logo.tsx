import { cn } from '../lib/cn';

interface LogoMarkProps {
  size?: number;
  className?: string;
}

/**
 * Símbolo da NEXORA: um "N" contínuo cuja haste final se abre em um ponto —
 * o nexo entre a ideia e a solução. Funciona de 16px (favicon) a grandes formatos.
 */
export function LogoMark({ size = 32, className }: LogoMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect width="32" height="32" rx="8" fill="var(--color-brand-600)" />
      <path
        d="M10 22V10l12 12v-7.5"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="9.6" r="1.9" fill="var(--color-accent-400)" />
    </svg>
  );
}

interface LogoProps {
  /** `inverse` para uso sobre fundos escuros */
  tone?: 'default' | 'inverse';
  size?: number;
  className?: string;
}

export function Logo({ tone = 'default', size = 32, className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark size={size} />
      <span
        className={cn(
          'text-[1.0625rem] font-bold tracking-[0.2em]',
          tone === 'inverse' ? 'text-white' : 'text-ink',
        )}
      >
        NEXORA
      </span>
    </span>
  );
}
