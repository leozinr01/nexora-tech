import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { differentials } from '../data/differentials';

export function Differentials() {
  const [featured, ...others] = differentials;
  if (!featured) return null;

  return (
    <Section id="diferenciais">
      <SectionHeading
        sectionId="diferenciais"
        eyebrow="Diferenciais"
        title="Por que escolher a NEXORA?"
        description="Uma forma de trabalhar pensada para que a tecnologia sirva ao negócio — e não o contrário."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {/* Destaque */}
        <Reveal className="md:col-span-2 lg:col-span-1 lg:row-span-2">
          <article className="relative isolate flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl bg-brand-950 p-8 text-white sm:p-10">
            <div aria-hidden="true" className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-grid-dark" />
              <div className="absolute -top-24 -right-24 size-80 rounded-full bg-brand-600/50 blur-3xl" />
              <svg
                viewBox="0 0 200 200"
                fill="none"
                className="absolute -top-8 -right-8 size-56 text-white/10"
              >
                <path
                  d="M50 150V50l100 100V86"
                  stroke="currentColor"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="150" cy="48" r="10" fill="var(--color-accent-400)" fillOpacity="0.9" />
              </svg>
            </div>

            <span className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-accent-300 ring-1 ring-white/15">
              <Icon name={featured.icon} />
            </span>
            <div className="mt-16">
              <p className="font-mono text-xs tracking-[0.16em] text-accent-300 uppercase">
                01 — Nosso ponto de partida
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-brand-100/85">
                {featured.description}
              </p>
            </div>
          </article>
        </Reveal>

        {others.map((item, index) => (
          <Reveal key={item.title} delay={((index % 2) + 1) * 80}>
            <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-brand-200 hover:shadow-soft sm:p-8">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon name={item.icon} size={22} />
                </span>
                <span aria-hidden="true" className="font-mono text-xs text-slate-400">
                  {String(index + 2).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2.5 leading-relaxed text-pretty text-slate-600">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
