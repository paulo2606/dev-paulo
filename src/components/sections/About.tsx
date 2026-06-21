"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-6 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>{t.about.badge}</SectionLabel>
        <h2 className="font-heading text-3xl font-bold text-[var(--text)] mt-2 mb-12">
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            className="md:col-span-3 space-y-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[var(--muted)] leading-[1.8]">{t.about.text1}</p>
            <p className="text-[var(--muted)] leading-[1.8]">{t.about.text2}</p>
            <p className="text-[var(--muted)] leading-[1.8]">{t.about.text3}</p>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="border border-[var(--border)] rounded-2xl overflow-hidden">
              {t.about.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex justify-between items-center px-5 py-4 ${
                    i < t.about.facts.length - 1 ? "border-b border-[var(--border)]" : ""
                  }`}
                >
                  <span className="text-xs font-mono text-[var(--muted)]">{fact.label}</span>
                  <span className="text-sm font-medium text-[var(--text)]">{fact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-mono text-[var(--accent)] tracking-wide">{children}</span>;
}
