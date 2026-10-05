import type { ReactNode } from 'react';
import { Button, type ButtonProps } from './Button';
import { Icon } from './Icon';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface WhatsAppButtonProps {
  children: ReactNode;
  /** Mensagem pré-preenchida na conversa */
  message?: string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  className?: string;
}

/** Botão que abre uma conversa com a NEXORA no WhatsApp (nova aba). */
export function WhatsAppButton({ children, message, ...props }: WhatsAppButtonProps) {
  return (
    <Button href={buildWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer" {...props}>
      <Icon name="chat" size={18} strokeWidth={1.8} />
      {children}
      <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
    </Button>
  );
}
