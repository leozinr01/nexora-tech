import { site } from '../data/site';

export const defaultWhatsAppMessage =
  'Olá! Vim pelo site da NEXORA e gostaria de conversar sobre um projeto.';

export const founderWhatsAppMessage =
  'Olá, Leonardo! Vim pelo site da NEXORA e gostaria de conversar sobre um projeto.';

/** Monta a URL oficial do WhatsApp (wa.me) com a mensagem já codificada. */
export function buildWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const fallback = (value: string) => value.trim() || 'Não informado';

/** Mensagem enviada pelo formulário de contato. */
export function buildContactMessage(data: ContactFormData): string {
  return [
    defaultWhatsAppMessage,
    '',
    `Nome: ${data.name.trim()}`,
    `E-mail: ${data.email.trim()}`,
    `Telefone: ${fallback(data.phone)}`,
    `Empresa: ${fallback(data.company)}`,
    `Serviço: ${data.service}`,
    '',
    'Mensagem:',
    data.message.trim(),
  ].join('\n');
}
