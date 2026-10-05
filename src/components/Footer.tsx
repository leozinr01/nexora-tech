import { navigation } from '../data/navigation';
import { site } from '../data/site';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { Container } from './Container';
import { Icon } from './Icon';
import { Logo } from './Logo';

const linkClass =
  'text-sm text-brand-100/75 transition-colors hover:text-white focus-visible:outline-white';

export function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">
          <div>
            <a
              href="#inicio"
              aria-label="NEXORA — voltar ao início"
              className="inline-block rounded-lg focus-visible:outline-white"
            >
              <Logo tone="inverse" size={36} />
            </a>
            <p className="mt-5 max-w-xs text-base leading-relaxed text-brand-100/80">
              {site.tagline}
            </p>
            <p className="mt-6 font-mono text-[0.6875rem] tracking-[0.14em] text-brand-300/80 uppercase">
              {site.descriptor}
            </p>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="text-sm font-semibold text-white">Navegação</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-white">Contato</h2>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-2.5`}
                >
                  <Icon name="chat" size={18} className="shrink-0 text-accent-400" />
                  <span>
                    <span className="sr-only">WhatsApp: </span>
                    {site.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className={`${linkClass} inline-flex items-center gap-2.5 break-all`}
                >
                  <Icon name="mail" size={18} className="shrink-0 text-accent-400" />
                  <span>
                    <span className="sr-only">E-mail: </span>
                    {site.email}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-brand-100/75">
                <Icon name="mapPin" size={18} className="shrink-0 text-accent-400" />
                {site.locationShort}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-brand-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <a href="#inicio" className="inline-flex items-center gap-1.5 hover:text-white focus-visible:outline-white">
            Voltar ao topo
            <Icon name="arrowUpRight" size={14} className="-rotate-45" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
