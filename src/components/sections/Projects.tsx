"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Wrench, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { useLang } from "@/contexts/LangContext";

interface Project {
  title: string;
  description: { pt: string; en: string };
  tags: string[];
  github: string | null;
  demo: string | null;
  preview: string | null;
  wip: boolean;
}

const PREVIEW_SCALE = 0.215;

const projects: Project[] = [
  {
    title: "iPhone Launch Page",
    description: {
      pt: "Landing page de lançamento de produto com design Apple-inspired, animações 3D com Spline e efeitos de scroll e parallax com Framer Motion. Seções de câmera, galeria, bateria, specs e FAQ.",
      en: "Product launch landing page with Apple-inspired design, 3D animations via Spline and scroll/parallax effects with Framer Motion. Camera, gallery, battery, specs and FAQ sections.",
    },
    tags: ["Next.js", "TypeScript", "Framer Motion", "Spline 3D", "Tailwind CSS"],
    github: "https://github.com/paulo2606/lancamento-iphone",
    demo: "https://lancamento-iphone.vercel.app/",
    preview: "https://lancamento-iphone.vercel.app/",
    wip: false,
  },
  {
    title: "Jobs Tracker",
    description: {
      pt: "Sistema fullstack para controle de candidaturas de emprego. Auth JWT, CRUD completo e painel de progresso com histórico de status.",
      en: "Fullstack job application tracker. JWT auth, full CRUD and progress dashboard with status history.",
    },
    tags: ["C#", ".NET", "React", "SQL Server"],
    github: null,
    demo: null,
    preview: null,
    wip: true,
  },
  {
    title: "Finance Dashboard",
    description: {
      pt: "API de finanças pessoais com dashboard interativo, gráficos e categorização automática de gastos por tipo.",
      en: "Personal finance API with interactive dashboard, charts and automatic expense categorization by type.",
    },
    tags: ["C#", ".NET", "Next.js", "PostgreSQL"],
    github: null,
    demo: null,
    preview: null,
    wip: true,
  },
  {
    title: "Real-time Chat",
    description: {
      pt: "Chat em tempo real com SignalR (.NET) no back-end e React no front. Suporte a salas públicas e mensagens privadas.",
      en: "Real-time chat with SignalR (.NET) on the back-end and React on the front. Public rooms and private messages.",
    },
    tags: ["C#", "SignalR", "React", "TypeScript"],
    github: null,
    demo: null,
    preview: null,
    wip: true,
  },
];

/* ── Mini preview no card ── */
function CardPreview({ url, title }: { url: string | null; title: string }) {
  if (!url) {
    return (
      <div className="h-32 rounded-xl border border-dashed border-[var(--border)] mb-4 flex flex-col items-center justify-center gap-2 shrink-0">
        <Wrench size={14} className="text-[var(--muted)] opacity-25" />
        <span className="text-[9px] font-mono text-[var(--muted)] opacity-25 uppercase tracking-widest">
          preview em breve
        </span>
      </div>
    );
  }
  return (
    <div className="relative h-32 rounded-xl overflow-hidden mb-4 border border-[var(--border)] shrink-0 group-hover:border-[var(--accent)]/40 transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          src={url}
          title={`Preview — ${title}`}
          loading="lazy"
          style={{
            width: "1440px",
            height: "900px",
            transform: `scale(${PREVIEW_SCALE})`,
            transformOrigin: "top left",
            border: "none",
          }}
        />
      </div>
      <div
        className="absolute bottom-0 inset-x-0 h-8 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }}
      />
    </div>
  );
}

/* ── Preview maior no modal ── */
function ModalPreview({ url, title }: { url: string | null; title: string }) {
  const SCALE = 0.38;
  if (!url) {
    return (
      <div className="h-52 rounded-xl border border-dashed border-[var(--border)] flex flex-col items-center justify-center gap-2 mb-6">
        <Wrench size={18} className="text-[var(--muted)] opacity-25" />
        <span className="text-[10px] font-mono text-[var(--muted)] opacity-25 uppercase tracking-widest">
          preview em breve
        </span>
      </div>
    );
  }
  return (
    <div className="relative h-52 rounded-xl overflow-hidden border border-[var(--border)] mb-6">
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          src={url}
          title={`Preview — ${title}`}
          loading="lazy"
          style={{
            width: "1440px",
            height: "900px",
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
            border: "none",
          }}
        />
      </div>
      <div
        className="absolute bottom-0 inset-x-0 h-12 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }}
      />
    </div>
  );
}

/* ── Modal de detalhes ── */
function ProjectModal({
  project,
  lang,
  t,
  onClose,
}: {
  project: Project;
  lang: "pt" | "en";
  t: { projects: { githubCta: string; demoCta: string; wipLabel: string } };
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(0,0,0,0.55)" }}
    >
      <motion.div
        className="relative w-full max-w-xl rounded-2xl border border-[var(--border)] p-6 shadow-2xl"
        style={{ backgroundColor: "var(--bg)" }}
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* X */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--bg-subtle)] transition-colors duration-150"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>

        {/* Preview grande */}
        <ModalPreview url={project.preview} title={project.title} />

        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-heading font-bold text-xl text-[var(--text)]">{project.title}</h3>
              {project.wip && (
                <span className="flex items-center gap-1 text-[10px] font-mono text-[var(--muted)] border border-[var(--border)] rounded px-1.5 py-0.5">
                  <Wrench size={9} />
                  {t.projects.wipLabel}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Descrição */}
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
          {lang === "pt" ? project.description.pt : project.description.en}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md border border-[var(--border)] text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-xs font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-150"
            >
              <GithubIcon size={13} />
              {t.projects.githubCta}
            </a>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-xs font-medium text-[var(--muted)] opacity-35 cursor-not-allowed">
              <GithubIcon size={13} />
              {t.projects.githubCta}
            </span>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-xs font-semibold text-black hover:opacity-90 transition-opacity duration-150"
            >
              <ExternalLink size={13} />
              {t.projects.demoCta}
            </a>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Section ── */
export default function Projects() {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="min-h-screen md:h-screen md:overflow-hidden pt-20 md:pt-24 px-6 md:px-14 border-t border-[var(--border)] flex flex-col justify-center"
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Header */}
          <div className="relative mb-10">
            <span
              aria-hidden="true"
              className="absolute -top-3 -left-1 font-heading font-black leading-none select-none pointer-events-none text-[var(--text)]"
              style={{ fontSize: "clamp(5rem, 13vw, 8rem)", opacity: 0.04 }}
            >
              04
            </span>
            <span className="text-xs font-mono text-[var(--accent)]">{t.projects.badge}</span>
            <h2 className="relative font-heading text-3xl font-bold text-[var(--text)] mt-2">
              {t.projects.title}
            </h2>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                className="p-4 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors duration-300 group flex flex-col cursor-pointer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onClick={() => setSelected(project)}
              >
                <CardPreview url={project.preview} title={project.title} />

                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading font-bold text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  {project.wip && (
                    <span className="flex items-center gap-1 text-[9px] font-mono text-[var(--muted)] whitespace-nowrap ml-2 mt-0.5">
                      <Wrench size={8} />
                      {t.projects.wipLabel}
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-[var(--muted)] leading-relaxed flex-1 mb-3 line-clamp-3">
                  {lang === "pt" ? project.description.pt : project.description.en}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 text-[var(--muted)] opacity-50">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-[var(--border)]">
                  <span className="text-[10px] font-mono text-[var(--accent)] opacity-70 group-hover:opacity-100 transition-opacity">
                    {lang === "pt" ? "ver detalhes →" : "see details →"}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            lang={lang}
            t={t}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
