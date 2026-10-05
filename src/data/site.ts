/**
 * Informações institucionais da NEXORA.
 * Fonte única de verdade para contatos e textos de marca usados em todo o site.
 */
export const site = {
  name: 'NEXORA',
  tagline: 'Tecnologia que transforma ideias em soluções.',
  descriptor: 'Software • Web • Mobile • Technology',
  location: 'Rio de Janeiro — RJ, Brasil',
  locationShort: 'Rio de Janeiro — RJ',
  email: 'devleonardoo@outlook.com',
  phoneDisplay: '+55 21 99531-3938',
  /** Somente dígitos, com DDI — formato exigido pelo wa.me */
  whatsappNumber: '5521995313938',
  copyright: '© 2026 NEXORA. Todos os direitos reservados.',
  founder: {
    name: 'Leonardo Ribeiro',
    role: 'Fundador & Desenvolvedor',
    initials: 'LR',
    /**
     * Foto do fundador. Coloque o arquivo em /public/images/ e informe o caminho,
     * por exemplo: '/images/leonardo-ribeiro.jpg' (recomendado: 800×1000px, JPG ou WebP).
     * Enquanto estiver como null, o site exibe um monograma no lugar.
     */
    photo: null as string | null,
  },
} as const;
