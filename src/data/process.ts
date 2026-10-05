export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Conversamos', description: 'Entendemos o problema, necessidade ou ideia.' },
  {
    number: '02',
    title: 'Planejamos',
    description: 'Definimos funcionalidades, prioridades e a melhor abordagem.',
  },
  {
    number: '03',
    title: 'Desenvolvemos',
    description: 'Transformamos o planejamento em uma solução funcional.',
  },
  {
    number: '04',
    title: 'Testamos',
    description: 'Validamos funcionamento, desempenho e experiência.',
  },
  { number: '05', title: 'Entregamos', description: 'Colocamos a solução em funcionamento.' },
  {
    number: '06',
    title: 'Evoluímos',
    description: 'Continuamos oferecendo melhorias e suporte quando necessário.',
  },
];
