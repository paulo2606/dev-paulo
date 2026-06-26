"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="h-screen overflow-hidden pt-16 md:pt-24 px-6 md:px-14 border-t border-[var(--border)] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-12">
          <span
            aria-hidden="true"
            className="absolute -top-3 -left-1 font-heading font-black leading-none select-none pointer-events-none text-[var(--text)]"
            style={{ fontSize: "clamp(5rem, 13vw, 8rem)", opacity: 0.04 }}
          >
            04
          </span>
          <span className="text-xs font-mono text-[var(--accent)]">{t.skills.badge}</span>
          <h2 className="relative font-heading text-3xl font-bold text-[var(--text)] mt-2">
            {t.skills.title}
          </h2>
        </div>

        <div className="space-y-8">
          {t.skills.categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="grid sm:grid-cols-[140px_1fr] gap-4 items-start"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
                {cat.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono border border-[var(--border)] rounded-xl text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
