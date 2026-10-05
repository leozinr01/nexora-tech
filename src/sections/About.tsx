import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';

const values = ['Inovação', 'Transparência', 'Qualidade', 'Evolução constante'];

export function About() {
  return (
    <Section id="sobre" className="border-y border-slate-200 bg-slate-200/40">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <SectionHeading
          sectionId="sobre"
          eyebrow="Sobre a NEXORA"
          title="Tecnologia com propósito."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <div>
          <Reveal>
            <p className="text-xl leading-relaxed font-medium text-pretty text-ink sm:text-2xl sm:leading-relaxed">
              A NEXORA nasceu com o propósito de aproximar tecnologia e negócios, transformando
              necessidades reais em soluções digitais eficientes.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-slate-600">
              Acreditamos que a tecnologia deve simplificar processos, resolver problemas e criar
              novas possibilidades.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-12 text-sm font-semibold text-ink">Nosso trabalho é baseado em</p>
            <ul className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 min-[420px]:grid-cols-2">
              {values.map((value, index) => (
                <li key={value} className="flex items-center gap-4 bg-white px-5 py-5 sm:px-6">
                  <span aria-hidden="true" className="font-mono text-xs text-brand-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-ink">{value}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
