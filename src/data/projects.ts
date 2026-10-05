import type { IconName } from '../components/Icon';

export type ProjectCategoryId = 'sistemas' | 'web' | 'mobile' | 'empresarial';

export interface ProjectCategory {
  id: ProjectCategoryId;
  label: string;
  icon: IconName;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategoryId;
  description: string;
  /** Caminho da imagem em /public (ex.: '/images/projetos/meu-projeto.webp') */
  image?: string;
  imageAlt?: string;
  /** Link público do projeto, se houver */
  url?: string;
  tags?: string[];
}

export const projectCategories: ProjectCategory[] = [
  { id: 'sistemas', label: 'Sistemas', icon: 'layers' },
  { id: 'web', label: 'Web', icon: 'browser' },
  { id: 'mobile', label: 'Mobile', icon: 'phone' },
  { id: 'empresarial', label: 'Soluções empresariais', icon: 'building' },
];

/**
 * PORTFÓLIO
 * ---------------------------------------------------------------------------
 * Só aparecem no site as categorias que têm pelo menos um projeto. Para
 * publicar um projeto, adicione um objeto à lista abaixo. Campos opcionais:
 * image (caminho em /public), imageAlt, url e tags.
 */
export const projects: Project[] = [
  {
    id: 'tai-painel-industrial',
    title: 'Painel de gestão industrial',
    category: 'empresarial',
    description:
      'Plataforma web para indústrias acompanharem máquinas, ordens de serviço e indicadores de OEE em tempo real, com relatórios exportáveis e controle de acesso por perfil.',
  },
  {
    id: 'controle-de-estoque',
    title: 'Sistema de controle de estoque',
    category: 'sistemas',
    description:
      'Sistema interno para controle de estoque, com dashboard de acompanhamento e acesso restrito à equipe da empresa.',
  },
  {
    id: 'bot-whatsapp',
    title: 'Bot de respostas para WhatsApp',
    category: 'empresarial',
    description:
      'Bot que responde automaticamente apenas contatos e grupos selecionados, com base em palavras-chave cadastradas. Roda localmente e é controlado por um painel web.',
  },
];
