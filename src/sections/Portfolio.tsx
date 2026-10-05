import { useState } from 'react';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
  type ProjectCategoryId,
} from '../data/projects';
import { cn } from '../lib/cn';

type Filter = ProjectCategoryId | 'todos';

const cardBase = 'flex h-full min-h-64 flex-col rounded-2xl p-6';

/** Card de um projeto do portfólio (data/projects.ts). */
function ProjectCard({ project, category }: { project: Project; category: ProjectCategory }) {
  return (
    <article
      className={cn(
        cardBase,
        'group overflow-hidden border border-slate-200 bg-white !p-0 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift',
      )}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.imageAlt ?? `Projeto ${project.title}`}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-brand-700 uppercase">
          {category.label}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
                {tag}
              </li>
            ))}
          </ul>
        )}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            Ver projeto
            <span className="sr-only"> {project.title} (abre em nova aba)</span>
            <Icon name="arrowUpRight" size={16} strokeWidth={1.8} />
          </a>
        )}
      </div>
    </article>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('todos');
  const usedCategories = projectCategories.filter((category) =>
    projects.some((project) => project.category === category.id),
  );
  const filters: Array<{ id: Filter; label: string }> = [
    { id: 'todos', label: 'Todos' },
    ...usedCategories,
  ];
  const visibleCategories = usedCategories.filter(
    (category) => filter === 'todos' || category.id === filter,
  );

  if (projects.length === 0) return null;

  return (
    <Section id="projetos">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          sectionId="projetos"
          eyebrow="Portfólio"
          title="Projetos"
          description="Alguns dos sistemas que desenvolvemos para empresas e operações reais."
        />

        {usedCategories.length > 1 && (
          <Reveal>
            <div role="group" aria-label="Filtrar projetos por categoria" className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
              {filters.map((item) => {
                const selected = filter === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setFilter(item.id)}
                    className={cn(
                      'h-10 rounded-full border px-4 text-sm font-medium transition-colors duration-200',
                      selected
                        ? 'border-brand-600 bg-brand-600 text-white'
                        : 'border-slate-300 bg-white text-slate-700 hover:border-brand-600 hover:text-brand-700',
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        )}
      </div>

      <Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCategories.flatMap((category) => {
            const items = projects.filter((project) => project.category === category.id);
            return items.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} category={category} />
              </li>
            ));
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
