import { useState, type ChangeEvent, type FormEvent } from 'react';
import { serviceOptions } from '../data/services';
import {
  buildContactMessage,
  buildWhatsAppUrl,
  type ContactFormData,
} from '../lib/whatsapp';
import { Button } from './Button';
import { FormField } from './FormField';
import { Icon } from './Icon';

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const emptyForm: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

/** Ordem dos campos na tela — usada para focar o primeiro campo inválido. */
const fieldOrder: Array<keyof ContactFormData> = [
  'name',
  'email',
  'phone',
  'company',
  'service',
  'message',
];

const fieldId = (field: keyof ContactFormData) => `contato-${field}`;

/** Formata telefones brasileiros enquanto o usuário digita: (21) 99999-9999 */
function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validate(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (data.name.trim().length < 2) errors.name = 'Informe o seu nome.';

  if (!data.email.trim()) errors.email = 'Informe o seu e-mail.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim()))
    errors.email = 'Informe um e-mail válido.';

  const phoneDigits = data.phone.replace(/\D/g, '');
  if (phoneDigits.length > 0 && phoneDigits.length < 10)
    errors.phone = 'Informe o telefone com DDD.';

  if (!data.service) errors.service = 'Selecione um serviço.';

  if (data.message.trim().length < 10)
    errors.message = 'Conte um pouco sobre o que você precisa (mínimo de 10 caracteres).';

  return errors;
}

/**
 * Formulário de contato sem backend: valida os campos, monta a mensagem e
 * abre a conversa no WhatsApp da NEXORA com o texto já preenchido.
 */
export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const handleChange =
    (field: keyof ContactFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = field === 'phone' ? formatPhone(event.target.value) : event.target.value;
      setData((current) => ({ ...current, [field]: value }));
      setSentUrl(null);
      // Remove o erro do campo assim que o usuário começa a corrigi-lo
      if (errors[field]) setErrors(({ [field]: _removed, ...rest }) => rest);
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(data);
    setErrors(nextErrors);

    const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    const url = buildWhatsAppUrl(buildContactMessage(data));
    window.open(url, '_blank', 'noopener,noreferrer');
    setSentUrl(url);
  };

  const errorCount = Object.keys(errors).length;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulário de contato"
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id={fieldId('name')} label="Nome" required error={errors.name}>
          {(field) => (
            <input
              {...field}
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Seu nome"
              value={data.name}
              onChange={handleChange('name')}
            />
          )}
        </FormField>

        <FormField id={fieldId('email')} label="E-mail" required error={errors.email}>
          {(field) => (
            <input
              {...field}
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              placeholder="voce@empresa.com.br"
              value={data.email}
              onChange={handleChange('email')}
            />
          )}
        </FormField>

        <FormField id={fieldId('phone')} label="Telefone" error={errors.phone}>
          {(field) => (
            <input
              {...field}
              type="tel"
              name="phone"
              autoComplete="tel-national"
              inputMode="tel"
              placeholder="(21) 99999-9999"
              value={data.phone}
              onChange={handleChange('phone')}
            />
          )}
        </FormField>

        <FormField id={fieldId('company')} label="Empresa" error={errors.company}>
          {(field) => (
            <input
              {...field}
              type="text"
              name="company"
              autoComplete="organization"
              placeholder="Nome da empresa"
              value={data.company}
              onChange={handleChange('company')}
            />
          )}
        </FormField>

        <FormField
          id={fieldId('service')}
          label="Serviço"
          required
          error={errors.service}
          className="sm:col-span-2"
        >
          {(field) => (
            <div className="relative">
              <select
                {...field}
                name="service"
                value={data.service}
                onChange={handleChange('service')}
                className={`${field.className} appearance-none pr-11 ${data.service ? '' : 'text-slate-400'}`}
              >
                <option value="" disabled>
                  Selecione um serviço
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option} className="text-ink">
                    {option}
                  </option>
                ))}
              </select>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-slate-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          )}
        </FormField>

        <FormField
          id={fieldId('message')}
          label="Mensagem"
          required
          error={errors.message}
          className="sm:col-span-2"
        >
          {(field) => (
            <textarea
              {...field}
              name="message"
              rows={5}
              placeholder="Conte um pouco sobre o seu projeto ou necessidade."
              value={data.message}
              onChange={handleChange('message')}
              className={`${field.className} min-h-32 resize-y`}
            />
          )}
        </FormField>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          Ao enviar, sua mensagem será aberta no WhatsApp, pronta para envio.
        </p>
        <Button type="submit" size="lg" className="shrink-0 max-sm:w-full">
          Enviar mensagem
          <Icon
            name="arrowRight"
            size={18}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
          />
        </Button>
      </div>

      {/* Região anunciada por leitores de tela */}
      <div role="status" aria-live="polite" className="empty:hidden">
        {errorCount > 0 && (
          <p className="mt-5 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
            <Icon name="alert" size={18} className="shrink-0" />
            {errorCount === 1
              ? 'Revise o campo destacado para continuar.'
              : `Revise os ${errorCount} campos destacados para continuar.`}
          </p>
        )}
        {sentUrl && (
          <p className="mt-5 flex items-start gap-2 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-900">
            <Icon name="check" size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-brand-700" />
            <span>
              Tudo certo! Abrimos o WhatsApp com a sua mensagem — é só confirmar o envio por lá.{' '}
              <a
                href={sentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 hover:text-brand-700"
              >
                O WhatsApp não abriu? Clique aqui.
              </a>
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
