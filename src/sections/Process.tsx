import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { processSteps } from '../data/process';
import { cn } from '../lib/cn';

export function Process() {
  return (
    <Section id="processo" className="border-y border-slate-200 bg-slate-200/40">
      <SectionHeading
        sectionId="processo"
        eyebrow="Processo"
        title="Como transformamos uma ideia em solução"
        description="Um caminho claro, em seis etapas, para você saber o que acontece em cada momento do projeto."
      />

      <ol className="relative mt-16 grid gap-10 lg:grid-cols-6 lg:gap-6">
        {/* Linha da timeline: vertical no mobile, horizontal no desktop */}
        <span
          aria-hidden="true"
          className="absolute top-5 bottom-5 left-5 w-px bg-gradient-to-b from-brand-600 via-brand-300 to-slate-200 lg:top-5 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto lg:bg-gradient-to-r"
        />

        {processSteps.map((step, index) => {
          const isLast = index === processSteps.length - 1;
          return (
            <Reveal as="li" key={step.number} delay={index * 70} className="relative pl-16 lg:pt-16 lg:pl-0">
              <span
                aria-hidden="true"
                className={cn(
                  'absolute top-0 left-0 flex size-10 items-center justify-center rounded-full border font-mono text-xs font-semibold',
                  isLast
                    ? 'border-brand-600 bg-brand-600 text-white'
                    : 'border-brand-200 bg-white text-brand-700',
                )}
              >
                {step.number}
              </span>
              <h3 className="pt-1.5 text-lg font-semibold tracking-tight text-ink lg:pt-0">
                <span className="sr-only">Etapa {step.number}: </span>
                {step.title}
              </h3>
              <p className="mt-2 max-w-md leading-relaxed text-pretty text-slate-600 lg:text-[0.9375rem]">
                {step.description}
              </p>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
