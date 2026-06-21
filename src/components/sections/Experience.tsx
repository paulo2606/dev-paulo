"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-mono text-[var(--accent)]">{t.experience.badge}</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text)] mt-2 mb-14">
          {t.experience.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Work */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase size={15} className="text-[var(--accent)]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted)]">
                {t.experience.workLabel}
              </span>
            </div>

            {t.experience.items.map((item, i) => (
              <motion.div
                key={item.company}
                className="relative pl-6 border-l-2 border-[var(--border)] pb-8 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />

                <div className="mb-4">
                  <h3 className="font-heading font-bold text-[var(--text)]">{item.company}</h3>
                  <p className="text-sm text-[var(--accent)] mt-0.5">{item.role}</p>
                  <p className="text-xs font-mono text-[var(--muted)] mt-1">{item.period}</p>
                </div>

                <ul className="space-y-2.5 mb-4">
                  {item.description.map((desc, j) => (
                    <li key={j} className="flex gap-2 text-sm text-[var(--muted)]">
                      <span className="text-[var(--accent)] shrink-0 mt-0.5">›</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--muted)] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education + Certs */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap size={15} className="text-[var(--accent)]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted)]">
                  {t.experience.educationTitle}
                </span>
              </div>

              {t.experience.education.map((item, i) => (
                <motion.div
                  key={item.institution}
                  className="relative pl-6 border-l-2 border-[var(--border)]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--navy)]" />
                  <h3 className="font-heading font-bold text-[var(--text)]">{item.institution}</h3>
                  <p className="text-sm text-[var(--muted)] mt-0.5">{item.course}</p>
                  <p className="text-xs font-mono text-[var(--muted)] mt-1">{item.period}</p>
                  <p className="text-xs text-[var(--muted)] mt-1 opacity-60">{item.note}</p>
                </motion.div>
              ))}
            </div>

            {/* Certs */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award size={15} className="text-[var(--accent)]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted)]">
                  {t.experience.certsTitle}
                </span>
              </div>

              <div className="space-y-3">
                {t.experience.certs.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <span className="text-[var(--accent)] text-sm mt-0.5">✦</span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text)]">{cert.name}</p>
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
