"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="h-screen overflow-hidden pt-16 md:pt-24 px-6 md:px-14 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-12">
          <span
            aria-hidden="true"
            className="absolute -top-3 -left-1 font-heading font-black leading-none select-none pointer-events-none text-[var(--text)]"
            style={{ fontSize: "clamp(5rem, 13vw, 8rem)", opacity: 0.04 }}
          >
            03
          </span>
          <span className="text-xs font-mono text-[var(--accent)]">{t.experience.badge}</span>
          <h2 className="relative font-heading text-3xl font-bold text-[var(--text)] mt-2">
            {t.experience.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-8">
              {t.experience.workLabel}
            </p>

            {t.experience.items.map((item, i) => (
              <motion.div
                key={item.company}
                className="relative pl-5 border-l border-[var(--border)]"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)]" />

                <div className="mb-4">
                  <h3 className="font-heading font-bold text-[var(--text)]">{item.company}</h3>
                  <p className="text-sm text-[var(--accent)] mt-0.5">{item.role}</p>
                  <p className="text-xs font-mono text-[var(--muted)] mt-1">{item.period}</p>
                </div>

                <ul className="space-y-2 mb-5">
                  {item.description.map((d, j) => (
                    <li key={j} className="flex gap-2 text-sm text-[var(--muted)] leading-relaxed">
                      <span className="text-[var(--accent)] shrink-0 mt-0.5 text-xs">›</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg border border-[var(--border)] text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education + Certs */}
          <div className="space-y-10">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-8">
                {t.experience.educationTitle}
              </p>
              {t.experience.education.map((item) => (
                <motion.div
                  key={item.institution}
                  className="pl-5 border-l border-[var(--border)] relative"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-[var(--border)]" />
                  <h3 className="font-heading font-bold text-[var(--text)]">{item.institution}</h3>
                  <p className="text-sm text-[var(--muted)] mt-0.5">{item.course}</p>
                  <p className="text-xs font-mono text-[var(--muted)] mt-1 opacity-70">
                    {item.period} · {item.note}
                  </p>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-6">
                {t.experience.certsTitle}
              </p>
              <div className="space-y-3">
                {t.experience.certs.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border)]"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                  >
                    <span className="text-[var(--accent)] text-xs mt-0.5">✦</span>
                    <div>
                      <p className="text-sm font-medium text-[var(--text)]">{cert.name}</p>
                      <p className="text-xs text-[var(--muted)]">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
