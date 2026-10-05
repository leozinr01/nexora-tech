import { useEffect, useRef } from 'react';
import { navigation } from '../data/navigation';
import { site } from '../data/site';
import { cn } from '../lib/cn';
import { Button } from './Button';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppLink';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeId: string;
}

/** Menu lateral (drawer) para telas pequenas, com foco preso, Esc e bloqueio de scroll. */
export function MobileMenu({ open, onClose, activeId }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;

      // Mantém o foco dentro do painel enquanto ele estiver aberto
      const focusable = panelRef.current.querySelectorAll<HTMLElement>('a[href], button');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div id="menu-mobile" inert={!open} className="lg:hidden">
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-[60] bg-brand-950/50 backdrop-blur-[2px] transition-opacity duration-300',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={cn(
          'fixed inset-y-0 right-0 z-[60] flex w-[min(22rem,88vw)] flex-col bg-white shadow-lift duration-300 ease-out',
          open
            ? 'visible translate-x-0 transition-transform'
            : 'invisible translate-x-full transition-[transform,visibility]',
        )}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 px-5">
          <Logo size={28} />
          <button
            ref={closeRef}
            type="button"
            aria-label="Fechar menu"
            onClick={onClose}
            className="-mr-2 flex size-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-slate-100"
          >
            <Icon name="close" />
          </button>
        </div>

        <nav aria-label="Navegação mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul>
            {navigation.map((item, index) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={onClose}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-3 py-3.5 text-lg font-semibold transition-colors',
                      isActive ? 'bg-brand-50 text-brand-700' : 'text-ink hover:bg-slate-50',
                    )}
                  >
                    {item.label}
                    <span aria-hidden="true" className="font-mono text-xs font-normal text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="shrink-0 space-y-3 border-t border-slate-200 p-5">
          <Button href="#contato" onClick={onClose} size="lg" className="w-full">
            Fale conosco
          </Button>
          <WhatsAppButton variant="secondary" size="lg" className="w-full">
            WhatsApp
          </WhatsAppButton>
          <p className="pt-1 text-center text-xs text-slate-500">{site.location}</p>
        </div>
      </div>
    </div>
  );
}
