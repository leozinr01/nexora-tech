import type { ReactNode } from 'react';
import { ContactForm } from '../components/ContactForm';
import { Icon, type IconName } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { site } from '../data/site';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface ContactItemProps {
  icon: IconName;
  label: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
}

function ContactItem({ icon, label, children, href, external = false }: ContactItemProps) {
  const content = (
    <>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
        <Icon name={icon} size={22} />
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[0.6875rem] tracking-[0.14em] text-slate-500 uppercase">
          {label}
        </span>
        <span className="mt-1 block font-semibold break-words text-ink">{children}</span>
      </span>
    </>
  );

  const className = 'flex items-center gap-4 rounded-2xl p-3 -mx-3';

  return (
    <li>
      {href ? (
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={`group ${className} transition-colors duration-200 hover:bg-slate-50`}
        >
          {content}
        </a>
      ) : (
        <div className={className}>{content}</div>
      )}
    </li>
  );
}

export function Contact() {
  return (
    <Section id="contato" className="!pt-0">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            sectionId="contato"
            eyebrow="Contato"
            title="Vamos conversar?"
            description="Fale com a gente pelo canal que preferir ou preencha o formulário — a mensagem chega direto no nosso WhatsApp."
          />

          <Reveal delay={80}>
            <ul className="mt-10 space-y-2">
              <ContactItem icon="chat" label="WhatsApp" href={buildWhatsAppUrl()} external>
                {site.phoneDisplay}
              </ContactItem>
              <ContactItem icon="mail" label="E-mail" href={`mailto:${site.email}`}>
                {site.email}
              </ContactItem>
              <ContactItem icon="mapPin" label="Localização">
                {site.location}
              </ContactItem>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
