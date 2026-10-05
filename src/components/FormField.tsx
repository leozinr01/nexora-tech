import type { ReactNode } from 'react';
import { Icon } from './Icon';

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  /** Recebe os atributos de acessibilidade prontos para aplicar no campo */
  children: (props: {
    id: string;
    'aria-invalid': boolean;
    'aria-describedby': string | undefined;
    'aria-required': boolean;
    className: string;
  }) => ReactNode;
}

const controlClass =
  'block w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-slate-400 ' +
  'transition-[border-color,box-shadow] duration-200 outline-none ' +
  'focus:border-brand-600 focus:ring-4 focus:ring-brand-600/15';

/** Rótulo + campo + mensagem de erro, com os vínculos de acessibilidade corretos. */
export function FormField({ id, label, required = false, error, className, children }: FormFieldProps) {
  const errorId = `${id}-erro`;

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-sm font-semibold text-ink">
        <span>
          {label}
          {required && (
            <span aria-hidden="true" className="ml-0.5 text-brand-600">
              *
            </span>
          )}
        </span>
        {!required && <span className="text-xs font-normal text-slate-500">Opcional</span>}
      </label>

      {children({
        id,
        'aria-invalid': Boolean(error),
        'aria-describedby': error ? errorId : undefined,
        'aria-required': required,
        className: `${controlClass} ${error ? 'border-red-600' : 'border-slate-300 hover:border-slate-400'}`,
      })}

      {error && (
        <p id={errorId} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-red-700">
          <Icon name="alert" size={16} strokeWidth={1.8} className="shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
