export interface NavItem {
  label: string;
  /** id da seção de destino (sem #) */
  id: string;
}

export const navigation: NavItem[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Fundador', id: 'fundador' },
  { label: 'Processo', id: 'processo' },
  { label: 'Contato', id: 'contato' },
];
