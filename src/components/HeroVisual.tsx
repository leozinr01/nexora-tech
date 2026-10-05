import { LogoMark } from './Logo';

/** Linha "esqueleto" usada para sugerir conteúdo sem inventar dados. */
function Bar({ className }: { className: string }) {
  return <span className={`block h-2 rounded-full ${className}`} />;
}

/**
 * Ilustração do hero: uma interface de software abstrata (painel web, app mobile
 * e trecho de código), construída só com HTML/CSS/SVG — sem imagens externas.
 * É puramente decorativa, por isso fica oculta de leitores de tela.
 */
export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[34rem] pt-10 pb-14 sm:px-6 lg:mx-0"
    >
      {/* Janela principal — aplicação web */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lift">
        <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-3">
          <span className="size-2.5 rounded-full bg-slate-300" />
          <span className="size-2.5 rounded-full bg-slate-300" />
          <span className="size-2.5 rounded-full bg-slate-300" />
          <span className="ml-3 h-5 flex-1 rounded-md bg-white ring-1 ring-slate-200" />
        </div>

        <div className="grid grid-cols-[3.25rem_1fr] sm:grid-cols-[3.75rem_1fr]">
          <div className="flex flex-col items-center gap-3 border-r border-slate-200 bg-slate-50/60 py-4">
            <LogoMark size={26} />
            <span className="mt-2 size-7 rounded-lg bg-brand-100" />
            <span className="size-7 rounded-lg bg-slate-200/70" />
            <span className="size-7 rounded-lg bg-slate-200/70" />
            <span className="size-7 rounded-lg bg-slate-200/70" />
          </div>

          <div className="space-y-4 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2">
                <Bar className="w-28 bg-slate-800" />
                <Bar className="w-20 bg-slate-200" />
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-accent-500/10 px-2.5 py-1 font-mono text-[0.625rem] font-medium text-accent-600">
                <span className="size-1.5 animate-pulse-dot rounded-full bg-accent-500" />
                online
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {['bg-brand-600', 'bg-accent-500', 'bg-brand-300'].map((color) => (
                <div key={color} className="space-y-2.5 rounded-xl border border-slate-200 p-3">
                  <span className={`block size-2 rounded-full ${color}`} />
                  <Bar className="w-10 bg-slate-800 sm:w-12" />
                  <Bar className="w-full bg-slate-200" />
                </div>
              ))}
            </div>

            {/* Gráfico */}
            <div className="rounded-xl border border-slate-200 p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <Bar className="w-16 bg-slate-300" />
                <div className="flex gap-1.5">
                  <span className="h-2 w-6 rounded-full bg-brand-600" />
                  <span className="h-2 w-6 rounded-full bg-slate-200" />
                </div>
              </div>
              <svg viewBox="0 0 320 96" className="mt-3 block h-auto w-full" fill="none">
                <defs>
                  <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="var(--color-brand-500)" stopOpacity="0.18" />
                    <stop offset="1" stopColor="var(--color-brand-500)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[24, 48, 72].map((y) => (
                  <path key={y} d={`M0 ${y}H320`} stroke="var(--color-slate-200)" strokeDasharray="3 5" />
                ))}
                <path
                  d="M0 78C28 74 44 60 72 58s40 12 68 4 38-34 66-36 40 14 62 6 34-22 52-26V96H0Z"
                  fill="url(#hero-area)"
                />
                <path
                  d="M0 78C28 74 44 60 72 58s40 12 68 4 38-34 66-36 40 14 62 6 34-22 52-26"
                  stroke="var(--color-brand-600)"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  className="animate-draw"
                />
                <circle cx="206" cy="26" r="4" fill="#fff" stroke="var(--color-brand-600)" strokeWidth="2.25" />
              </svg>
            </div>

            <div className="space-y-2.5">
              {['w-2/3', 'w-1/2'].map((width) => (
                <div key={width} className="flex items-center gap-3">
                  <span className="size-6 shrink-0 rounded-md bg-brand-50 ring-1 ring-brand-100" />
                  <Bar className={`${width} bg-slate-200`} />
                  <span className="ml-auto h-2 w-8 rounded-full bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cartão flutuante — código */}
      <div className="absolute top-0 right-0 w-[13.5rem] animate-float-slow rounded-xl border border-white/10 bg-brand-950 p-4 font-mono text-[0.6875rem] leading-[1.7] text-brand-200 shadow-lift sm:-right-2">
        <p>
          <span className="text-accent-300">const</span> solucao ={' '}
          <span className="text-white">nexora</span>
        </p>
        <p className="pl-3">
          .<span className="text-brand-300">entender</span>(ideia)
        </p>
        <p className="pl-3">
          .<span className="text-brand-300">desenvolver</span>()
        </p>
        <p className="pl-3">
          .<span className="text-brand-300">entregar</span>();
        </p>
      </div>

      {/* Cartão flutuante — aplicativo mobile */}
      <div className="absolute bottom-0 left-0 w-[7.75rem] animate-float rounded-[1.4rem] border border-slate-200 bg-white p-2 shadow-lift sm:-left-2">
        <div className="space-y-2.5 rounded-[1rem] bg-slate-50 p-2.5 ring-1 ring-slate-200">
          <span className="mx-auto block h-1 w-8 rounded-full bg-slate-300" />
          <div className="rounded-lg bg-brand-600 p-2.5">
            <Bar className="w-8 bg-white/90" />
            <Bar className="mt-2 w-12 bg-white/40" />
          </div>
          <div className="space-y-2 px-0.5">
            <Bar className="w-full bg-slate-200" />
            <Bar className="w-3/4 bg-slate-200" />
          </div>
          <div className="flex h-6 items-center justify-center rounded-md bg-ink">
            <span className="h-1.5 w-8 rounded-full bg-white/80" />
          </div>
        </div>
      </div>
    </div>
  );
}
