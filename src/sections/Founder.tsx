import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { Eyebrow } from '../components/SectionHeading';
import { WhatsAppButton } from '../components/WhatsAppLink';
import { site } from '../data/site';
import { founderWhatsAppMessage } from '../lib/whatsapp';

const { founder } = site;

function FounderPortrait() {
  return (
    <figure className="relative mx-auto w-full max-w-sm lg:max-w-none">
      <div className="relative isolate aspect-[4/5] overflow-hidden rounded-3xl bg-brand-950">
        {founder.photo ? (
          <img
            src={founder.photo}
            alt={`${founder.name}, fundador e desenvolvedor da NEXORA`}
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        ) : (
          /* Monograma exibido enquanto a foto não é definida em data/site.ts */
          <div
            role="img"
            aria-label={`Monograma de ${founder.name}`}
            className="flex size-full items-center justify-center"
          >
            <div aria-hidden="true" className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-grid-dark" />
              <div className="absolute -bottom-24 -left-16 size-80 rounded-full bg-brand-600/50 blur-3xl" />
            </div>
            <span className="flex size-32 items-center justify-center rounded-full border border-white/15 bg-white/5 text-5xl font-semibold tracking-tight text-white backdrop-blur-sm">
              {founder.initials}
            </span>
          </div>
        )}

        <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-brand-950/70 px-5 py-4 backdrop-blur-md">
          <p className="text-lg font-semibold text-white">{founder.name}</p>
          <p className="mt-0.5 text-sm text-brand-100/80">{founder.role}</p>
        </figcaption>
      </div>
      <span
        aria-hidden="true"
        className="absolute -top-3 -right-3 -z-10 size-28 rounded-3xl border border-brand-200 bg-brand-50"
      />
    </figure>
  );
}

export function Founder() {
  return (
    <Section id="fundador">
      <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <FounderPortrait />
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Fundador</Eyebrow>
            <h2
              id="fundador-titulo"
              className="mt-4 text-3xl leading-[1.12] font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
            >
              Por trás da NEXORA
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-pretty text-slate-600">
              <p>
                A NEXORA nasceu da visão de{' '}
                <strong className="font-semibold text-ink">{founder.name}</strong>, desenvolvedor e
                fundador da empresa.
              </p>
              <p>
                A proposta é unir conhecimento técnico, criatividade e proximidade com o cliente
                para transformar ideias e necessidades em soluções digitais funcionais e
                eficientes.
              </p>
              <p>
                Mais do que desenvolver software, a NEXORA busca entender o problema por trás de
                cada projeto e construir uma solução que realmente faça sentido para o negócio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <blockquote className="mt-9 border-l-2 border-accent-500 pl-6">
              <p className="text-2xl leading-snug font-semibold tracking-tight text-balance text-ink sm:text-[1.75rem]">
                “Tecnologia próxima. Soluções inteligentes.”
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={240}>
            <WhatsAppButton message={founderWhatsAppMessage} size="lg" className="mt-10 max-sm:w-full">
              Falar diretamente com Leonardo
            </WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
