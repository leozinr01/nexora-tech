import { Icon } from './Icon';
import { cn } from '../lib/cn';
import { useScrolled } from '../hooks/useScrolled';
import { buildWhatsAppUrl } from '../lib/whatsapp';

/** Atalho flutuante para o WhatsApp — aparece depois que o visitante passa do hero. */
export function FloatingWhatsApp() {
  const visible = useScrolled(560);

  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a NEXORA pelo WhatsApp (abre em nova aba)"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        'fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lift transition-[opacity,transform,background-color] duration-300 hover:bg-brand-700 sm:right-6 sm:bottom-6',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <Icon name="chat" size={26} />
    </a>
  );
}
