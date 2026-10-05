import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { WhatsAppButton } from '../components/WhatsAppLink';

export function Cta() {
  return (
    <section aria-labelledby="cta-titulo" className="pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-950 px-6 py-16 text-center sm:px-12 sm:py-24">
            <div aria-hidden="true" className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-grid-dark" />
              <div className="absolute top-[-40%] left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-brand-600/55 blur-3xl" />
              <svg
                viewBox="0 0 200 200"
                fill="none"
                className="absolute top-1/2 -right-16 hidden size-[26rem] -translate-y-1/2 text-white/[0.06] lg:block"
              >
                <path
                  d="M50 150V50l100 100V86"
                  stroke="currentColor"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="150" cy="48" r="10" fill="currentColor" />
              </svg>
            </div>

            <h2
              id="cta-titulo"
              className="mx-auto max-w-3xl text-3xl leading-[1.1] font-semibold tracking-tight text-balance text-white sm:text-5xl"
            >
              Tem uma ideia? Vamos transformá-la em tecnologia.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-brand-100/85">
              Conte-nos o que você precisa e vamos encontrar a melhor solução para o seu projeto.
            </p>
            <WhatsAppButton variant="inverse" size="lg" className="mt-10 max-sm:w-full">
              Falar com a NEXORA
            </WhatsAppButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
