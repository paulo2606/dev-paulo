"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-mono text-[var(--accent)]">{t.about.badge}</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text)] mt-2 mb-14">
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text – 3 cols */}
          <motion.div
            className="md:col-span-3 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[var(--muted)] leading-relaxed">{t.about.text1}</p>
            <p className="text-[var(--muted)] leading-relaxed">{t.about.text2}</p>
            <p className="text-[var(--muted)] leading-relaxed">{t.about.text3}</p>
          </motion.div>

          {/* Facts card – 2 cols */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 space-y-4">
              {t.about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between items-center border-b border-[var(--border)] pb-3.5 last:border-0 last:pb-0"
                >
                  <span className="text-xs font-mono text-[var(--muted)]">{fact.label}</span>
                  <span className="text-sm font-semibold text-[var(--text)]">{fact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
