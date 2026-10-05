# NEXORA — Site institucional

**Tecnologia que transforma ideias em soluções.**
Site oficial da NEXORA (Rio de Janeiro — RJ), desenvolvido com React, TypeScript, Vite e Tailwind CSS.

## Como rodar

```bash
npm install
npm run dev        # ambiente de desenvolvimento (http://localhost:5173)
npm run build      # checagem de tipos + build de produção em /dist
npm run preview    # serve o build localmente
```

Requer Node.js 20.19+ (recomendado 22+).

## Estrutura

```
public/            favicon, imagem Open Graph, robots.txt
src/
  assets/          símbolo da marca (SVG)
  components/      componentes reutilizáveis (Button, Logo, Icon, Header, Footer, ContactForm…)
  sections/        seções da página (Hero, Services, About, Founder, Process…)
  pages/           Home.tsx — monta a página
  data/            TODO o conteúdo editável (contatos, serviços, etapas, projetos)
  hooks/           useScrolled, useActiveSection
  lib/             whatsapp.ts (URLs e mensagem do formulário), cn.ts
  styles/          index.css — tokens da identidade visual (cores, fontes, animações)
```

## Onde editar

| O que | Arquivo |
| --- | --- |
| Telefone/WhatsApp, e-mail, localização | `src/data/site.ts` |
| Foto do fundador | coloque em `public/images/` e informe o caminho em `founder.photo` (`src/data/site.ts`) |
| Serviços | `src/data/services.ts` |
| Diferenciais | `src/data/differentials.ts` |
| Etapas do processo | `src/data/process.ts` |
| **Projetos do portfólio** | `src/data/projects.ts` — adicione objetos ao array `projects`; só aparecem as categorias com projetos (lista vazia esconde a seção) |
| Cores e tipografia | bloco `@theme` em `src/styles/index.css` |
| Mensagens do WhatsApp | `src/lib/whatsapp.ts` |

## Formulário → WhatsApp

Não há backend. Ao enviar, o formulário valida os campos, monta a mensagem e abre
`https://wa.me/5521995313938?text=...` em uma nova aba, com o texto já codificado.

## Publicação

**GitHub**

```bash
git init
git add .
git commit -m "Site institucional NEXORA"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/nexora-site.git
git push -u origin main
```

**Vercel** — importe o repositório em vercel.com/new. O framework (Vite) é detectado
automaticamente; o `vercel.json` já define build, saída e cache dos assets.

### Depois de definir o domínio

No `index.html`, troque `/og-image.png` (em `og:image` e `twitter:image`) pela URL completa,
por exemplo `https://seudominio.com.br/og-image.png`, e adicione `og:url` e
`<link rel="canonical">`. Redes sociais exigem URL absoluta para exibir a imagem de prévia.

## Marca

- Símbolo: `public/favicon.svg` / `src/assets/nexora-mark.svg` (vetorial, serve para avatar de redes sociais, app e documentos)
- Azul principal `#1B4DC2` · Azul escuro `#0A1838` · Destaque `#3CC4D4` · Texto `#0A1A33`
- Tipografia: Manrope (auto-hospedada via `@fontsource-variable/manrope`)

© 2026 NEXORA. Todos os direitos reservados.
