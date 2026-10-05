import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn';

type Variant = 'primary' | 'secondary' | 'inverse' | 'outlineInverse';
type Size = 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };
type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };

export type ButtonProps = AnchorProps | NativeButtonProps;

const base =
  'group/btn inline-flex items-center justify-center gap-2 rounded-xl text-center leading-tight font-semibold ' +
  'transition-[background-color,border-color,color,box-shadow,transform] duration-200 ' +
  'active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-[0_1px_2px_rgb(10_24_56/0.2),0_8px_20px_-8px_rgb(27_77_194/0.6)] hover:bg-brand-700',
  secondary:
    'border border-slate-300 bg-white text-ink hover:border-brand-600 hover:text-brand-700',
  inverse: 'bg-white text-brand-800 hover:bg-brand-50 focus-visible:outline-white',
  outlineInverse:
    'border border-white/25 text-white hover:border-white/60 hover:bg-white/5 focus-visible:outline-white',
};

const sizes: Record<Size, string> = {
  md: 'min-h-11 px-5 py-2 text-sm',
  lg: 'min-h-13 px-6 py-3 text-[0.9375rem]',
};

/** Botão único do site. Renderiza <a> quando recebe `href` e <button> caso contrário. */
export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (typeof rest.href === 'string') {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
