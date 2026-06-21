"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 px-6 bg-[var(--bg-card)]">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-mono text-[var(--accent)]">{t.skills.badge}</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text)] mt-2 mb-14">
          {t.skills.title}
        </h2>

        <div className="space-y-9">
          {t.skills.categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <p className="text-xs font-mono text-[var(--muted)] mb-3 uppercase tracking-widest">
                {cat.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-sm font-mono bg-[var(--bg)] border border-[var(--border)] rounded-xl text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 cursor-default"
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
