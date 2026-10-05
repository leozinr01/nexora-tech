import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { services } from '../data/services';

export function Services() {
  return (
    <Section id="servicos" className="bg-slate-200/40">
      <SectionHeading
        sectionId="servicos"
        eyebrow="Serviços"
        title="Soluções digitais para o seu negócio"
        description="Do primeiro esboço à manutenção do dia a dia: desenvolvemos, colocamos no ar e cuidamos da tecnologia que o seu negócio precisa."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal as="li" key={service.id} delay={(index % 3) * 80}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift sm:p-8">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                  <Icon name={service.icon} />
                </span>
                <span aria-hidden="true" className="font-mono text-xs text-slate-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-semibold tracking-tight text-ink">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-pretty text-slate-600">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-dashed border-slate-300 bg-white/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-slate-700">
          <strong className="font-semibold text-ink">Precisa de algo diferente?</strong> Também
          criamos soluções tecnológicas personalizadas.
        </p>
        <a
          href="#contato"
          className="group/link inline-flex shrink-0 items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800"
        >
          Conte sua necessidade
          <Icon
            name="arrowRight"
            size={18}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover/link:translate-x-0.5"
          />
        </a>
      </Reveal>
    </Section>
  );
}
