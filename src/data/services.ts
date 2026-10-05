import type { IconName } from '../components/Icon';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export const services: Service[] = [
  {
    id: 'sistemas',
    title: 'Desenvolvimento de Sistemas',
    description:
      'Sistemas personalizados desenvolvidos para resolver necessidades específicas de cada negócio.',
    icon: 'layers',
  },
  {
    id: 'web',
    title: 'Desenvolvimento Web',
    description:
      'Sites e aplicações web modernas, rápidas, responsivas e preparadas para diferentes dispositivos.',
    icon: 'browser',
  },
  {
    id: 'mobile',
    title: 'Aplicativos Mobile',
    description:
      'Aplicativos para Android e iOS com foco em desempenho, usabilidade e experiência do usuário.',
    icon: 'phone',
  },
  {
    id: 'sites',
    title: 'Criação de Sites',
    description:
      'Sites institucionais, landing pages e plataformas digitais com design profissional.',
    icon: 'layout',
  },
  {
    id: 'manutencao-sistemas',
    title: 'Manutenção de Sistemas',
    description:
      'Correção de problemas, melhorias, atualizações e evolução contínua de sistemas existentes.',
    icon: 'refresh',
  },
  {
    id: 'suporte',
    title: 'Suporte e Manutenção',
    description:
      'Manutenção, configuração e suporte para computadores e equipamentos utilizados no ambiente profissional.',
    icon: 'laptop',
  },
];

/** Opções do campo "Serviço" no formulário de contato. */
export const serviceOptions: string[] = [
  ...services.map((service) => service.title),
  'Solução personalizada',
  'Ainda não sei / Quero orientação',
];
