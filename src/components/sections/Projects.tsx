"use client";

import { motion } from "framer-motion";
import { ExternalLink, Wrench } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { useLang } from "@/contexts/LangContext";

interface Project {
  title: string;
  description: { pt: string; en: string };
  tags: string[];
  github: string | null;
  demo: string | null;
  wip: boolean;
}

const projects: Project[] = [
  {
    title: "Jobs Tracker",
    description: {
      pt: "Sistema fullstack para controle de candidaturas de emprego. Auth JWT, CRUD completo e painel de progresso.",
      en: "Fullstack job application tracker. JWT auth, full CRUD and progress dashboard.",
    },
    tags: ["C#", ".NET", "React", "SQL Server"],
    github: null,
    demo: null,
    wip: true,
  },
  {
    title: "Finance Dashboard",
    description: {
      pt: "API de finanças pessoais com dashboard interativo, gráficos e categorização de gastos.",
      en: "Personal finance API with interactive dashboard, charts and expense categorization.",
    },
    tags: ["C#", ".NET", "Next.js", "PostgreSQL"],
    github: null,
    demo: null,
    wip: true,
  },
  {
    title: "Real-time Chat",
    description: {
      pt: "Chat em tempo real com SignalR (.NET) no back-end e React no front. Salas e mensagens privadas.",
      en: "Real-time chat with SignalR (.NET) on the back-end and React on the front. Rooms and private messages.",
    },
    tags: ["C#", "SignalR", "React", "TypeScript"],
    github: null,
    demo: null,
    wip: true,
  },
];

export default function Projects() {
  const { t, lang } = useLang();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-mono text-[var(--accent)]">{t.projects.badge}</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text)] mt-2 mb-14">
          {t.projects.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent)]/50 transition-all duration-300 group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                {project.wip && (
                  <span className="flex items-center gap-1 text-[10px] font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full border border-[var(--accent)]/20 whitespace-nowrap ml-2">
                    <Wrench size={9} />
                    {t.projects.wipLabel}
                  </span>
                )}
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed flex-1 mb-5">
                {lang === "pt" ? project.description.pt : project.description.en}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-0.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    <GithubIcon size={13} />
                    {t.projects.githubCta}
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs text-[var(--muted)] opacity-40">
                    <GithubIcon size={13} />
                    {t.projects.githubCta}
                  </span>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    <ExternalLink size={13} />
                    {t.projects.demoCta}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
