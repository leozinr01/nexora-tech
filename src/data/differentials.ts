import type { IconName } from '../components/Icon';

export interface Differential {
  title: string;
  description: string;
  icon: IconName;
}

/** O primeiro item é exibido em destaque na composição da seção. */
export const differentials: Differential[] = [
  {
    title: 'Soluções sob medida',
    description: 'Cada projeto é desenvolvido de acordo com as necessidades do cliente.',
    icon: 'sliders',
  },
  {
    title: 'Tecnologia moderna',
    description: 'Utilizamos ferramentas e práticas atuais para criar soluções eficientes.',
    icon: 'bolt',
  },
  {
    title: 'Atendimento próximo',
    description: 'Mantemos uma comunicação clara e próxima durante o desenvolvimento.',
    icon: 'chat',
  },
  {
    title: 'Transparência',
    description: 'O cliente acompanha o projeto e entende cada etapa do processo.',
    icon: 'eye',
  },
  {
    title: 'Evolução contínua',
    description: 'As soluções podem continuar evoluindo conforme o negócio cresce.',
    icon: 'trending',
  },
];
