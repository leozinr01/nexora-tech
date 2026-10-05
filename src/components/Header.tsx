import { useCallback, useEffect, useRef, useState } from 'react';
import { navigation } from '../data/navigation';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import { cn } from '../lib/cn';
import { Button } from './Button';
import { Container } from './Container';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';

const sectionIds = navigation.map((item) => item.id);

export function Header() {
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Fecha o menu mobile se a janela for ampliada para o layout desktop
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[70] focus-visible:rounded-lg focus-visible:bg-brand-600 focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-white"
      >
        Pular para o conteúdo
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300',
          scrolled
            ? 'border-slate-200/80 bg-canvas/85 shadow-[0_8px_24px_-18px_rgb(10_24_56/0.35)] backdrop-blur-lg'
            : 'border-transparent bg-transparent',
        )}
      >
        <Container
          className={cn(
            'flex items-center justify-between transition-[height] duration-300',
            scrolled ? 'h-16' : 'h-16 lg:h-20',
          )}
        >
          <a href="#inicio" aria-label="NEXORA — voltar ao início" className="rounded-lg">
            <Logo />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                        'after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-brand-600 after:transition-transform after:duration-300',
                        isActive
                          ? 'text-brand-700 after:scale-x-100'
                          : 'text-slate-600 after:scale-x-0 hover:text-ink',
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <Button href="#contato">Fale conosco</Button>
            </div>
            <button
              ref={toggleRef}
              type="button"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              onClick={() => setMenuOpen(true)}
              className="-mr-2 flex size-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-slate-100 lg:hidden"
            >
              <Icon name="menu" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} activeId={active} />
    </>
  );
}
