import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { HeroVisual } from '../components/HeroVisual';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { site } from '../data/site';

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32"
    >
      {/* Fundo: grade sutil + luz azul discreta */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade" />
        <div className="absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-brand-100/70 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-canvas to-transparent" />
      </div>

      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 xl:gap-20">
        <div className="max-w-2xl">
          <Reveal>
            <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-brand-200/80 bg-white/80 py-1.5 pr-4 pl-3 text-[0.6875rem] font-semibold tracking-[0.08em] text-brand-800 uppercase shadow-soft backdrop-blur sm:text-xs sm:tracking-[0.12em]">
              <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent-500" />
              {site.descriptor}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="inicio-titulo"
              className="mt-7 text-[2.5rem] leading-[1.04] font-semibold tracking-[-0.03em] text-balance text-ink sm:text-6xl xl:text-[4.25rem]"
            >
              Tecnologia que transforma ideias em{' '}
              <span className="text-brand-600">soluções.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-slate-600 sm:text-xl">
              Desenvolvemos sistemas, sites, aplicativos e soluções digitais sob medida para
              empresas e profissionais.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contato" size="lg">
                Solicitar orçamento
                <Icon
                  name="arrowRight"
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                />
              </Button>
              <Button href="#servicos" variant="secondary" size="lg">
                Conheça nossas soluções
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-10 flex items-center gap-2 text-sm text-slate-500">
              <Icon name="mapPin" size={16} className="text-brand-600" />
              {site.location}
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:justify-self-end">
          <HeroVisual />
        </Reveal>
      </Container>
    </section>
  );
}
